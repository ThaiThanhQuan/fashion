import { images } from "@/src/assets/images";
import Image from "next/image";
import { ICategoryServiceItem } from "../../../data";
import Link from "next/link";

interface IProps {
  service: ICategoryServiceItem;
}

function HeroService({ service }: IProps) {
  return (
    <div>
      <div className="relative w-full h-[90vh] ">
        <Image
          src={images.heroservice}
          alt={service.title}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#fcf9f800_0%,rgba(252,249,248,0.9)_100%)]" />

        <div className="absolute px-(--padding-x) bottom-30 left-0 flex flex-col items-start max-w-2xl">
          <span className="text-(--primary-color) font-label tracking-[0.3em] uppercase text-sm">
            Dịch vụ {service.title}
          </span>
          <h1 className="text-8xl font-bold tracking-tighter text-on-surface mb-8">
            {service.sub_title}
          </h1>
          <p className="text-[#5f5f5f] text-xl font-light leading-relaxed mb-12">
            {service.desc}
          </p>

          <div className="flex gap-6">
            <Link
              href="/atelier#service"
              className="inline-block bg-[#5f5e5e] text-[#faf7f6] px-12 py-5 text-sm uppercase tracking-widest font-bold hover:bg-[#535252] transition-all duration-300 hover:-translate-y-1"
            >
              Đặt lịch tư vấn
            </Link>

            <a
              href="#procedure"
              className="border border-[#b2b2b133] px-12 py-5 text-sm uppercase tracking-widest font-bold hover:bg-[#f6f3f2] transition-all"
            >
              Khám Phá Quy Trình
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroService;
