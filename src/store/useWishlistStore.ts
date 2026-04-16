import { create } from "zustand";
import { IProductItem } from "../app/(public)/product/data";

interface WishlistState {
  wishlist: IProductItem[];
  addToWishlist: (product: IProductItem) => void;
  removeFromWishlist: (productId: string | number) => void;
}

export const useWishlistStore = create<WishlistState>()((set) => ({
  wishlist: [],

  addToWishlist: (product) =>
    set((state) => {
      const isExisted = state.wishlist.find((item) => item.id === product.id);
      if (isExisted) return state; // Nếu có rồi thì không thêm nữa
      return { wishlist: [...state.wishlist, product] };
    }),

  removeFromWishlist: (productId) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.id !== productId),
    })),
}));
