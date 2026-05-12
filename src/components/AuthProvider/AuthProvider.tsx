'use client';

import { useAuthStore } from '@/src/store/useAuthStore';
import { useWishlistStore } from '@/src/store/useWishlistStore';
import { useEffect } from 'react';

function AuthProvider({ children }: { children: React.ReactNode }) {
      const { checkAuth, isLoggedIn } = useAuthStore();
    const { fetchWishlist, clearWishlist } = useWishlistStore();

    useEffect(() => {
        checkAuth();
    }, []);

    useEffect(() => {
        if (isLoggedIn) {
            fetchWishlist();  
        } else {
            clearWishlist(); 
        }
    }, [isLoggedIn]);

    return <>{children}</>;
}

export default AuthProvider;