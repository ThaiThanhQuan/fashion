import { ArrowLeft } from "lucide-react";
import Link from "next/link";

function BackToLogin() {
    return ( 
        <Link href={'/login'} className="mt-6 flex items-center gap-3 group">
            <ArrowLeft size={17} className="transition-transform duration-300 group-hover:-translate-x-1" />
            <p className="font-label text-[10px] tracking-[0.2em] uppercase text-(--text-color) hover:text-(--primary-color) transition-colors duration-300">
                Quay lại đăng nhập
            </p>
        </Link>
     );
}

export default BackToLogin;