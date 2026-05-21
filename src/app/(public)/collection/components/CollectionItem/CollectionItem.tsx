import Image from "next/image";
import Link from "next/link";
import { ICollection } from "@/src/types";

interface IProps {
  collection: ICollection;
  isBig?: boolean;
  hasMargin?: boolean;
}

function CollectionItem({ collection, isBig, hasMargin }: IProps) {
  return (
    <Link
      href={`/collection/${collection.slug}`}
      key={collection.id}
      className={`group cursor-pointer 
          ${isBig ? "col-span-12 md:col-span-8" : "col-span-12 md:col-span-4"} 
          ${hasMargin ? "mt-24" : "mt-0"}`}
    >
      <div
        className={`relative overflow-hidden mb-6 ${ isBig ? "h-107.5" : "h-75"}`}
      >
        <Image
          src={collection.thumbnail}
          alt={collection.title}
          fill
          sizes={isBig ? "66vw" : "33vw"}
          className="object-cover duration-1000 ease-out group-hover:scale-105"
        />
      </div>

      <div>
        <span className="text-xs text-[#5f5f5f] font-medium tracking-widest uppercase">
          {collection.year} : {collection.categoryCollection.name}
        </span>
        <h3 className="mt-2 text-2xl font-bold">{collection.title}</h3>
      </div>
    </Link>
  );
}

export default CollectionItem;
