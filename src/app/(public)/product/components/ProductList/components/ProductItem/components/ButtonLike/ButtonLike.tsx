'use client';

import { Heart } from 'lucide-react';
import { toast } from 'sonner';
import { useAuthStore } from '@/src/store/useAuthStore';
import { useWishlistStore } from '@/src/store/useWishlistStore';

interface IProps {
    productId: string;
}

function ButtonLike({ productId }: IProps) {
    const { isLoggedIn } = useAuthStore();
    const { isLiked, addToWishlist, removeFromWishlist } = useWishlistStore();
    const liked = isLiked(productId);

    const handleLike = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (!isLoggedIn) {
            toast.error("Vui lòng đăng nhập để lưu sản phẩm!", {
                position: "top-center",
                duration: 3000,
            });
            return;
        }

        if (liked) {
            await removeFromWishlist(productId);
            toast.error("Đã xóa khỏi danh sách yêu thích", {
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
            onClick={handleLike}
            className='cursor-pointer'
        >
            <Heart
                size={24}
                color={liked ? "#ff0000" : "white"}
                fill={liked ? "#ff0000" : "none"}
                className="transition-colors duration-300"
            />
        </button>
    );
}

export default ButtonLike;