'use client';

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, XCircle } from "lucide-react";

function PaymentResultPage() {
    const searchParams = useSearchParams();
    const status = searchParams.get('status');
    const orderId = searchParams.get('orderId');

    const isSuccess = status === 'success';

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-6">
            {isSuccess ? (
                <>
                    <CheckCircle size={64} className="text-green-500" />
                    <h1 className="text-2xl font-bold uppercase tracking-widest">
                        Thanh toán thành công!
                    </h1>
                    <p className="text-[#5f5f5f] text-sm">
                        Kiểm tra email của bạn để xem chi tiết đơn hàng.
                    </p>
                </>
            ) : (
                <>
                    <XCircle size={64} className="text-red-500" />
                    <h1 className="text-2xl font-bold uppercase tracking-widest">
                        Thanh toán thất bại!
                    </h1>
                    <p className="text-[#5f5f5f] text-sm">
                        Vui lòng thử lại hoặc chọn phương thức khác.
                    </p>
                </>
            )}

            <div className="flex gap-4 mt-4">
                <Link
                    href="/"
                    className="border border-[#b2b2b14d] py-3 px-8 text-xs uppercase tracking-widest hover:bg-[#f6f3f2] transition-all"
                >
                    Trang chủ
                </Link>
                {orderId && (
                    <Link
                        href={`/order/${orderId}`}
                        className="bg-[#323233] text-white py-3 px-8 text-xs uppercase tracking-widest hover:bg-black transition-all"
                    >
                        Xem đơn hàng
                    </Link>
                )}
            </div>
        </div>
    );
}

export default PaymentResultPage;