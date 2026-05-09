import { IService } from "@/src/types";
import Link from "next/link";

interface IProps {
  service: IService
}

function ServiceCard({service}: IProps) {
  return (
    <div className="bg-[#f0eded] p-12">
      <h4 className="mb-4 text-xl font-bold font-headline">
        {service.title}
      </h4>
      <p className="mb-8 text-xs tracking-widest uppercase font-body text-on-surface-variant">
        {service.subTitle}
      </p>
      <button className="text-xs font-bold uppercase text-(--primary-color) tracking-widest border-b border-(--primary-color) cursor-pointer">
        <Link href={"/atelier"}>Đặt lịch hẹn</Link>
      </button>
    </div>
  );
}

export default ServiceCard;
