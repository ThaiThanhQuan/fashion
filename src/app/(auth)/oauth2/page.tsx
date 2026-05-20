'use client';

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuthStore } from "@/src/store/useAuthStore";

function OAuth2CallbackContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { login } = useAuthStore();

    useEffect(() => {
        const token = searchParams.get("token");
        const refreshToken = searchParams.get("refreshToken");

        if (token && refreshToken) {
            login(token, refreshToken);
            router.push("/");
            router.refresh();
        } else {
            router.push("/login");
        }
    }, [login, router, searchParams]);

    return (
        <div className="flex items-center justify-center h-screen">
            <p className="text-[#5f5f5f] uppercase tracking-widest text-xs">
                Dang xu ly...
            </p>
        </div>
    );
}

export default function OAuth2CallbackPage() {
    return (
        <Suspense fallback={null}>
            <OAuth2CallbackContent />
        </Suspense>
    );
}
