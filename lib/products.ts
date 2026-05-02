import type { Product } from "@/components/product-card";

const ph = (text: string, bg = "1a1a1a", fg = "f1ece1") =>
  `https://placehold.co/800x1000/${bg}/${fg}/png?text=${encodeURIComponent(text)}&font=oswald`;

export const PRODUCTS: Product[] = [
  {
    handle: "atlas-work-jacket",
    name: "Atlas Work Jacket",
    price: 245,
    currency: "USD",
    category: "Outerwear",
    front: ph("ATLAS\\nFRONT"),
    back: ph("ATLAS\\nBACK", "0a0a0a"),
    badge: "Drop 01",
  },
  {
    handle: "loop-cardigan",
    name: "Loop Knit Cardigan",
    price: 180,
    currency: "USD",
    category: "Knitwear",
    front: ph("LOOP\\nFRONT", "2b2b2b"),
    back: ph("LOOP\\nBACK", "111111"),
  },
  {
    handle: "haze-tee",
    name: "Haze Pocket Tee",
    price: 65,
    currency: "USD",
    category: "Tops",
    front: ph("HAZE\\nFRONT", "1f1f1f"),
    back: ph("HAZE\\nBACK", "0f0f0f"),
  },
  {
    handle: "rope-cargo",
    name: "Rope Cargo Pant",
    price: 195,
    currency: "USD",
    category: "Bottoms",
    front: ph("ROPE\\nFRONT", "2a2418"),
    back: ph("ROPE\\nBACK", "1c1810"),
    badge: "New",
  },
  {
    handle: "void-hoodie",
    name: "Void Heavyweight Hoodie",
    price: 165,
    currency: "USD",
    category: "Tops",
    front: ph("VOID\\nFRONT", "0a0a0a"),
    back: ph("VOID\\nBACK", "1a1a1a"),
  },
  {
    handle: "static-cap",
    name: "Static Six-Panel Cap",
    price: 55,
    currency: "USD",
    category: "Accessories",
    front: ph("STATIC\\nFRONT", "121212"),
    back: ph("STATIC\\nBACK", "0c0c0c"),
    soldOut: true,
  },
  {
    handle: "pulse-shorts",
    name: "Pulse Mesh Shorts",
    price: 85,
    currency: "USD",
    category: "Bottoms",
    front: ph("PULSE\\nFRONT", "1c1c1c"),
    back: ph("PULSE\\nBACK", "0d0d0d"),
  },
  {
    handle: "ember-scarf",
    name: "Ember Wool Scarf",
    price: 95,
    currency: "USD",
    category: "Accessories",
    front: ph("EMBER\\nFRONT", "3a1d10"),
    back: ph("EMBER\\nBACK", "230f08"),
  },
];

export function getProduct(handle: string) {
  return PRODUCTS.find((p) => p.handle === handle);
}
