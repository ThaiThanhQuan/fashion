import { ICollection } from "@/src/types";
import Link from "next/link";

interface IProps {
  collection: ICollection
}

function CollectionTitle({collection}:  IProps) {
  return (
    <div className="flex items-center justify-between gap-4 mt-8">
      <div>
        <span className="text-[12px] text-(--primary-color) mb-2 font-medium uppercase tracking-[0.3em]">
          {collection.title}
        </span>
        <h3 className="text-[36px] font-bold ">{collection.season.name} {collection.year}</h3>
      </div>

      <div>
        <Link
          href="/collection"
          className="font-light tracking-widest uppercase text-[12px] pb-1 border-b border-[#323233]/20 hover:border-black"
        >
          Khám phá
        </Link>
      </div>
    </div>
  );
}

export default CollectionTitle;
