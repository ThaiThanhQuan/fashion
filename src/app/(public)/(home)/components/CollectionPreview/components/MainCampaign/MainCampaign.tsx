import { ICollection } from "@/src/types";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  collection: ICollection
}

function MainCampaign({collection}:  IProps) {
  return (
    <Link href={`/collection/${collection.slug}`} className="relative overflow-hidden cursor-pointer group">
      <Image
        src={collection.thumbnail}
        alt={collection.title}
        width={606}
        height={400}
        priority
        className="object-contain w-90% transition-transform duration-1000 ease-out h-120 group-hover:scale-105"
      />

    </Link>
  );
}

export default MainCampaign;
