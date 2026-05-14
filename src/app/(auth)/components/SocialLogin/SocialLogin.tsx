'use client'
import { icon } from "@/src/assets/icons";
import Image from "next/image";

function SocialLogin() {

    const handleGoogleLogin = () => {
        window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/google`;
    };

    return ( 
        <div>
            <div className="py-4  text-center">
          <span className="shrink mx-4 text-[10px] font-label uppercase tracking-[0.3em] text-[#b2b2b1]">
            Hoặc tiếp tục với
          </span>
        </div>

        <div>
          <button onClick={handleGoogleLogin} className="flex w-full justify-center  items-center gap-5 border px-4 py-2 hover:bg-[#b2b2b126] cursor-pointer transition-colors duration-300">
            <Image src={icon.google} alt="Google Icon" width={20} height={20} />
            <span className="text-[12px] font-bold tracking-[1em] uppercase">
              Google
            </span>
          </button>
        </div>
        </div>
     );
}

export default SocialLogin;
