import Image from "next/image";
import { ICategoryServiceItem } from "../../../../data";
import Link from "next/link";

interface IProps {
  item: ICategoryServiceItem;
}

function CategoryServiceItem({ item }: IProps) {
  return (
    <div className="cursor-pointer">
      <Link href={`/atelier/${item.slug}`}>
        <div className="relative w-full h-87.5 mb-8 group ">
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            className="object-contain w-full h-full grayscale duration-1000 ease-out group-hover:scale-105 group-hover:grayscale-0"
          />
        </div>

        <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">
          {item.title}
        </h3>

        <p className="text-[#5f5f5f] text-sm font-light leading-relaxed mb-6">
          {item.desc}
        </p>
      </Link>

      <a
        href="#service"
        className="flex justify-between items-center text-sm font-bold tracking-widest uppercase border-t border-[#b2b2b11a] pt-4"
      >
        <span>{item.label}</span>
        <span className="text-(--primary-color)">
          {(item.price ?? 0) > 0
            ? `${(item.price ?? 0).toLocaleString("vi-VN")} VNĐ`
            : "Liên hệ"}
        </span>
      </a>
    </div>
  );
}

export default CategoryServiceItem;
