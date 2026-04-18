import { create } from "zustand";
import { IProductItem } from "@/src/app/(public)/product/data";

export interface ICartItem {
  product: IProductItem;
  size: string;
  quantity: number;
}

export interface ICartStore {
  items: ICartItem[];
  addItem: (product: IProductItem, size: string) => void;
  removeItem: (productId: string, size: string) => void;
  increment: (productId: string, size: string) => void;
  decrement: (productId: string, size: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<ICartStore>((set) => ({
  items: [],
  addItem: (product, size) =>
    set((state) => {
      const existing = state.items.find(
        (i) => i.product.slug === product.slug && i.size === size,
      );
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.product.slug === product.slug && i.size === size
              ? { ...i, quantity: i.quantity + 1 }
              : i,
          ),
        };
      }
      return { items: [...state.items, { product, size, quantity: 1 }] };
    }),
  removeItem: (productId, size) =>
    set((state) => ({
      items: state.items.filter(
        (i) => !(i.product.slug === productId && i.size === size),
      ),
    })),

  increment: (productId, size) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.product.slug === productId && i.size === size
          ? { ...i, quantity: i.quantity + 1 }
          : i,
      ),
    })),

  decrement: (productId, size) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.product.slug === productId && i.size === size
          ? { ...i, quantity: Math.max(1, i.quantity - 1) }
          : i,
      ),
    })),
  clearCart: () => set({ items: [] }),
}));
