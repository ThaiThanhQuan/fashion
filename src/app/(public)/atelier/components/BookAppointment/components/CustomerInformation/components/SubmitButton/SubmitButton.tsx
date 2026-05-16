interface IProps {
    loading?: boolean;
}

export default function SubmitButton({ loading }: IProps) {
    return (
        <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-[#faf7f6] py-6 text-sm uppercase tracking-[0.3em] font-bold hover:bg-[#535252] transition-all mt-8 cursor-pointer disabled:opacity-50"
        >
            {loading ? "Đang xử lý..." : "Xác Nhận Đặt Lịch"}
        </button>
    );
}