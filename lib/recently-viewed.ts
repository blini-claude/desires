"use client";

import { useEffect, useState } from "react";

const KEY = "desires.recent.v1";
const LIMIT = 8;

export function useRecentlyViewed(currentHandle?: string) {
  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      const list: string[] = raw ? JSON.parse(raw) : [];
      setRecent(list);

      if (currentHandle) {
        const next = [currentHandle, ...list.filter((h) => h !== currentHandle)].slice(0, LIMIT);
        localStorage.setItem(KEY, JSON.stringify(next));
      }
    } catch {}
  }, [currentHandle]);

  return recent.filter((h) => h !== currentHandle);
}
