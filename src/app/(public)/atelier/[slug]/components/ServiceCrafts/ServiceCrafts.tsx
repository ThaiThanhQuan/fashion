import Image from "next/image";
import { IService } from "@/src/types";

interface IProps {
  service: IService;
}

function ServiceCrafts({ service }: IProps) {
  return (
    <div className="container">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 py-(--padding-y)">
        <div className="col-span-1 xl:col-span-5">
          <div className="relative w-full h-150">
            <div className="relative w-[90%] h-142.5 group overflow-hidden">
              <Image
                src={service.thumbnail}
                fill
                alt="bg-author"
                className="object-cover duration-1000 ease-out group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-80 bg-[#e4e2e2] p-8">
              <p className="text-4xl font-bold text-(--primary-color) mb-4 italic">
                {service.featureLabel}
              </p>
              <p className="font-label text-xs tracking-widest uppercase text-[#5f5f5f] leading-relaxed">
                {service.featureLabel}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:col-span-7 flex flex-col justify-center">
          <h2 className="text-5xl font-bold tracking-tighter mb-10">
            Kỹ Nghệ Của Sự Chính Xác
          </h2>
          <p className="text-[#5f5f5f] font-light leading-relaxed text-lg">
            {service.detailDescription}
          </p>

          <div className="pt-6 mt-8 border-l-2 border-(--primary-color) pl-8">
            <span className="block italic text-[#323233] font-medium">
              {`"${service.quote}"`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCrafts;
