import Image from "next/image";
import { COLLECTIONS_DATA } from "../../data";
import Link from "next/link";
import { getGridPosition } from "@/src/utils/layoutHelpers";

function CollectionItem() {
  return (
    <div className="grid grid-cols-12 gap-8">
      {COLLECTIONS_DATA.map((item, index) => {
        const { isBig, hasMargin } = getGridPosition(index);

        return (
          <Link
            href={`/collection/${item.slug}`}
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
          </Link>
        );
      })}
    </div>
  );
}

export default CollectionItem;
