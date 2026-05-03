"use client";

import { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";
import { PRODUCTS, type Product } from "./products";

export type CartItem = {
  handle: string;
  size: string;
  qty: number;
};

type State = { items: CartItem[] };

type Action =
  | { type: "add"; item: CartItem }
  | { type: "remove"; handle: string; size: string }
  | { type: "qty"; handle: string; size: string; qty: number }
  | { type: "clear" }
  | { type: "hydrate"; items: CartItem[] };

const STORAGE_KEY = "desires.cart.v1";

function reduce(state: State, action: Action): State {
  switch (action.type) {
    case "hydrate":
      return { items: action.items };
    case "add": {
      const ix = state.items.findIndex(
        (i) => i.handle === action.item.handle && i.size === action.item.size
      );
      if (ix >= 0) {
        const next = [...state.items];
        next[ix] = { ...next[ix], qty: next[ix].qty + action.item.qty };
        return { items: next };
      }
      return { items: [...state.items, action.item] };
    }
    case "remove":
      return {
        items: state.items.filter(
          (i) => !(i.handle === action.handle && i.size === action.size)
        ),
      };
    case "qty": {
      const next = state.items
        .map((i) =>
          i.handle === action.handle && i.size === action.size
            ? { ...i, qty: Math.max(0, action.qty) }
            : i
        )
        .filter((i) => i.qty > 0);
      return { items: next };
    }
    case "clear":
      return { items: [] };
  }
}

type Ctx = {
  items: CartItem[];
  count: number;
  subtotal: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (handle: string, size: string, qty?: number) => void;
  remove: (handle: string, size: string) => void;
  setQty: (handle: string, size: string, qty: number) => void;
  clear: () => void;
  productOf: (handle: string) => Product | undefined;
};

const CartCtx = createContext<Ctx | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reduce, { items: [] });
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[];
        if (Array.isArray(parsed)) dispatch({ type: "hydrate", items: parsed });
      }
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch {}
  }, [state.items, hydrated]);

  const value = useMemo<Ctx>(() => {
    const productOf = (handle: string) => PRODUCTS.find((p) => p.handle === handle);
    const count = state.items.reduce((s, i) => s + i.qty, 0);
    const subtotal = state.items.reduce((s, i) => {
      const p = productOf(i.handle);
      return s + (p ? p.price * i.qty : 0);
    }, 0);
    return {
      items: state.items,
      count,
      subtotal,
      open,
      setOpen,
      add: (handle, size, qty = 1) => {
        dispatch({ type: "add", item: { handle, size, qty } });
        setOpen(true);
      },
      remove: (handle, size) => dispatch({ type: "remove", handle, size }),
      setQty: (handle, size, qty) => dispatch({ type: "qty", handle, size, qty }),
      clear: () => dispatch({ type: "clear" }),
      productOf,
    };
  }, [state.items, open]);

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
