import Image from "next/image";
import { COLLECTIONS_DATA } from "../../data";

function ArchiveItem() {
  return (
    <div className="grid grid-cols-12 gap-8">
      {COLLECTIONS_DATA.map((item, index) => {
        // Xác định xem item nằm ở vị trí nào trong cụm 4 cái (0, 1, 2, 3)
        const position = index % 4;

        // Logic cho từng vị trí
        const isBig = position === 0 || position === 3; // 0 và 3 là ô to (span-8)
        const hasMargin = position === 1 || position === 3; // 1 và 3 là ô thụt xuống (mt-24)

        return (
          <div
            key={item.id}
            className={`group cursor-pointer 
          ${isBig ? "col-span-8" : "col-span-4"} 
          ${hasMargin ? "mt-24" : "mt-0"}`}
          >
            <div
              className={`relative overflow-hidden mb-6 ${isBig ? "aspect-video" : "aspect-4/5"}`}
            >
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                sizes={isBig ? "66vw" : "33vw"}
                className="object-cover duration-1000 ease-out group-hover:scale-105"
              />
            </div>

            <div>
              <span className="text-xs text-[#5f5f5f] font-medium tracking-widest uppercase">
                {item.year} : {item.category}
              </span>
              <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ArchiveItem;
