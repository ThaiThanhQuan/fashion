'use client';

import { useState } from 'react';
import { useCartStore } from "@/src/store/useCartStore";
import { useAuthStore } from "@/src/store/useAuthStore";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Plus } from "lucide-react";
import type { IProduct, IProductVariant } from "@/src/types";
import SizeSelector from "@/src/components/SizeSelector/SizeSelector";

interface IProps {
    product: IProduct;
    variants: IProductVariant[];
}

function ButtonAddToCart({ product, variants }: IProps) {
    const [selectedSize, setSelectedSize] = useState<string | undefined>();
    const { addItem } = useCartStore();
    const { isLoggedIn } = useAuthStore();
    const router = useRouter();
    const hasAvailableSize = variants.some((variant) => variant.stock > 0);

    const handleAddToCart = () => {
        if (!hasAvailableSize) {
            toast.info("San pham da het hang!", {
                position: "top-center",
                duration: 3000,
            });
            return;
        }

        if (!isLoggedIn) {
            toast.error("Vui lòng đăng nhập để mua hàng!", {
                position: "top-center",
                duration: 3000,
            });
            return;
        }

        if (!selectedSize) {
            toast.info("Vui lòng chọn size!", {
                position: "top-center",
                duration: 3000,
                description: "Bạn cần chọn kích cỡ trước khi thêm vào giỏ hàng.",
                classNames: {
                    toast: "rounded-none border border-[#e5e5e5] shadow-sm bg-white px-5 py-4 gap-4",
                    title: "text-[11px] font-bold uppercase tracking-[0.15em] text-[#323233]",
                    description: "text-[10px] tracking-wide font-light !text-[#5f5f5f]",
                },
            });
            return;
        }

        const selectedVariant = variants.find((variant) => variant.size === selectedSize);
        if (!selectedVariant || selectedVariant.stock <= 0) {
            toast.info("Size nay da het hang!", {
                position: "top-center",
                duration: 3000,
            });
            return;
        }

        addItem(product, selectedSize);
        toast.success("Đã thêm vào giỏ hàng!", {
            position: "top-center",
            duration: 3000,
        });
        router.push("/order");
    };

    return (
        <>
            <div className="mt-6 h-px w-12 bg-[#b2b2b14d]"></div>
            <SizeSelector selectedSize={selectedSize} onSelect={setSelectedSize} variants={variants} />
            <button
                onClick={handleAddToCart}
                disabled={!hasAvailableSize}
                className="w-full py-5 bg-[#5f5e5e] text-[#faf7f6] font-headline font-bold uppercase tracking-widest transition-all hover:bg-[#535252] hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
            >
                <Plus color="white" size={18} /> Thêm nhanh
            </button>
        </>
    );
}

export default ButtonAddToCart;
