"use client";
import { images } from "@/src/assets/images";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="relative flex items-center w-full h-[90vh] bg-gray-900">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.brandhero}
          alt="Hero Background"
          fill
          sizes="100vw"
          priority
          className="object-cover w-full h-auto opacity-60"
        />
      </div>

      {/* Content */}
      <div className="container absolute flex flex-col items-center text-white">
        <h1 className="font-serif text-[clamp(72px,10vw,112px)] font-normal uppercase leading-[0.9] tracking-tight mb-6">
          QUANTHAI
        </h1>

        <div className="flex flex-col items-start gap-3 mb-6">
          <p className="font-serif text-[13px] font-light uppercase tracking-[0.35em] text-white/80">
            Signature of Individuality
          </p>
          <div className="w-full h-px bg-white/50" />
        </div>

        <p className="font-serif text-[15px] font-light tracking-wider text-white/90 mb-10">
          New Collection — Now Available
        </p>

        <button className="px-10 py-3 border border-white/70 bg-transparent text-white uppercase tracking-[0.25em] text-[11px] font-medium transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
          <Link href="/product">Discover Now</Link>
        </button>
      </div>
    </section>
        )}

export default Hero;
