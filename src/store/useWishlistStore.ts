import { create } from 'zustand';
import { wishlistService } from '@/src/services';
import { IWishlist } from '../types';

interface WishlistStore {
    wishlist: IWishlist[];
    fetchWishlist: () => Promise<void>;
    addToWishlist: (productId: string) => Promise<void>;
    removeFromWishlist: (productId: string) => Promise<void>;
    isLiked: (productId: string) => boolean;
    clearWishlist: () => void; 
}

export const useWishlistStore = create<WishlistStore>((set, get) => ({
    wishlist: [],

    clearWishlist: () => set({ wishlist: [] }),

    fetchWishlist: async () => {
        try {
            const res = await wishlistService.getMyWishlist();
            set({ wishlist: res?.result ?? [] });
        } catch {}
    },

    addToWishlist: async (productId) => {
        const prev = get().wishlist;

        if (prev.some(item => item.product.id === productId)) return;

        const tempItem = { id: `temp-${productId}`, userId: '', product: { id: productId } } as IWishlist;
        set(state => ({ wishlist: [...state.wishlist, tempItem] }));

        try {
            const res = await wishlistService.add({ productId });
            if (!res?.result) throw new Error(res?.message ?? "Add wishlist failed");

            set(state => ({
                wishlist: state.wishlist.map(item =>
                    item.product.id === productId ? res.result! : item
                ),
            }));
        } catch {
            set({ wishlist: prev });
        }
    },

    removeFromWishlist: async (productId) => {
        const prev = get().wishlist;

        set(state => ({
            wishlist: state.wishlist.filter(item => item.product.id !== productId),
        }));

        try {
            const res = await wishlistService.remove(productId);
            // Check for success - backend may return different success codes
            if (res && (res.code === 1000 || res.code === 200 || res.code === 0)) {
                // Success - fetch lại để đảm bảo sync với backend
                await get().fetchWishlist();
                return;
            } else {
                // If response indicates failure, revert the state
                throw new Error(res?.message ?? "Remove wishlist failed");
            }
        } catch (error) {
            // Revert on any error
            set({ wishlist: prev });
            throw error;
        }
    },

    isLiked: (productId) =>
        get().wishlist.some(item => item.product.id === productId),
}));
