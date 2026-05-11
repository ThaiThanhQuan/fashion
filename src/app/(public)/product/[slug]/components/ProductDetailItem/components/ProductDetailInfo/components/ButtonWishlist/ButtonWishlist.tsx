'use client';

import { Heart } from 'lucide-react';
import { toast } from 'sonner';
import { useAuthStore } from '@/src/store/useAuthStore';
import { useWishlistStore } from '@/src/store/useWishlistStore';

interface IProps {
    productId: string;
}

function ButtonWishlist({ productId }: IProps) {
    const { isLoggedIn } = useAuthStore();
    const { isLiked, addToWishlist, removeFromWishlist } = useWishlistStore();
    const liked = isLiked(productId);

    const handleWishlist = async () => {
        if (!isLoggedIn) {
            toast.error("Vui lòng đăng nhập để lưu sản phẩm!", {
                position: "top-center",
                duration: 3000,
            });
            return;
        }

        if (liked) {
            await removeFromWishlist(productId);
            toast.info("Đã xóa khỏi danh sách yêu thích", {
                position: "top-center",
                duration: 3000,
            });
        } else {
            await addToWishlist(productId);
            toast.success("Đã thêm vào danh sách yêu thích", {
                position: "top-center",
                duration: 3000,
            });
        }
    };

    return (
        <button
            onClick={handleWishlist}
            className="w-full py-5 border border-[#b2b2b133] text-[#323233] font-headline font-bold uppercase tracking-widest transition-all hover:bg-[#f6f3f2] flex items-center justify-center gap-2"
        >
            <Heart
                size={18}
                color={liked ? "#ff0000" : "currentColor"}
                fill={liked ? "#ff0000" : "none"}
                className="transition-colors duration-300"
            />
            <span>{liked ? "Đã lưu vào yêu thích" : "Lưu vào danh sách yêu thích"}</span>
        </button>
    );
}

export default ButtonWishlist;