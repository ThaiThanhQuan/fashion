"use client";

import { useIsMounted } from "@/src/hooks/useIsMounted";
import { useAuthStore } from "@/src/store/useAuthStore";
import { Handbag, Heart, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function ActionIcons() {
    const pathname = usePathname();
    const { isLoggedIn, isAdmin } = useAuthStore();  
    const mounted = useIsMounted();

    const actionItems = [
        ...(mounted && isLoggedIn
            ? [
                {
                    icon: <Heart size={20} strokeWidth={1.5} />,
                    href: "/like",
                    key: "heart",
                },
            ]
            : []),

        ...(mounted && isAdmin
            ? [
                {
                    icon: <Settings size={20} strokeWidth={1.5} />,
                    href: "/admin",
                    key: "admin",
                },
            ]
            : []),

        {
            icon: <Handbag size={20} strokeWidth={1.5} />,
            href: "/order",
            key: "bag",
        },
    ];

    return (
        <>
            {actionItems.map((action) => {
                const isActive = pathname === action.href;
                return (
                    <Link
                        key={action.key}
                        href={action.href}
                        className={`
                            relative flex items-center hover:text-black transition-colors cursor-pointer
                            after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-[#5f5e5e]
                            after:transition-all after:duration-500 after:ease-in-out
                            ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                        `}
                    >
                        {action.icon}
                    </Link>
                );
            })}
        </>
    );
}

export default ActionIcons;