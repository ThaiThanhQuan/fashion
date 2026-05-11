'use client';

import { useAuthStore } from '@/src/store/useAuthStore';
import { useEffect } from 'react';

function AuthProvider({ children }: { children: React.ReactNode }) {
    const { checkAuth } = useAuthStore();

    useEffect(() => {
        checkAuth();
    }, []);

    return <>{children}</>;
}

export default AuthProvider;