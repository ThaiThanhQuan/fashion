"use client";
import { images } from "@/src/assets/images";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <section className="relative flex items-center w-full h-[90vh] bg-gray-900">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        {/* <Image
          src={images.brand}
          alt="Hero Background"
          fill
          sizes="100vw"
          priority
          className="object-cover w-full h-auto opacity-60"
        /> */}

        <video
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-60"
        />
      </div>

      {/* Content */}
      <div className="container relative text-white">
        <h1 className="text-[112px] font-black uppercase leading-[0.9] mb-8">
          Silent <br /> Authority
        </h1>
        <div className="text-[18px] font-light max-w-md mb-10">
          <Typewriter
            options={{
              strings: [
                " The 2024 Collection explores the intersection of brutalist architecture and fluid textiles. A study in presence through subtraction.",
              ],
              autoStart: true,
              loop: true,
              delay: 70,
              deleteSpeed: 50,
              cursor: "|",
            }}
          />
        </div>
        <button className="px-12 py-5 bg-[#5f5e5e] cursor-pointer text-white uppercase tracking-[0.2em] text-xs font-medium transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#535252]">
          <Link href={"/product"}>Shop Now</Link>
        </button>
      </div>
    </section>
  );
}

export default Hero;
