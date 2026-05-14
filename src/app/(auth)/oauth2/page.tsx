'use client';

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuthStore } from "@/src/store/useAuthStore";

function OAuth2CallbackPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { login } = useAuthStore();

    useEffect(() => {
        const token = searchParams.get('token');
        const refreshToken = searchParams.get('refreshToken');

        if (token && refreshToken) {
            login(token, refreshToken); 
            router.push('/');
            router.refresh();
        } else {
            router.push('/login');
        }
    }, []);

    return (
        <div className="flex items-center justify-center h-screen">
            <p className="text-[#5f5f5f] uppercase tracking-widest text-xs">
                Đang xử lý...
            </p>
        </div>
    );
}

export default OAuth2CallbackPage;