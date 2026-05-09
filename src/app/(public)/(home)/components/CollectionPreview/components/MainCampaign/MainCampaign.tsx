import { ICollection } from "@/src/types";
import Image from "next/image";

interface IProps {
  collection: ICollection
}

function MainCampaign({collection}:  IProps) {
  return (
    <div className="relative cursor-pointer group overflow-hidden">
      <Image
        src={collection.thumbnail}
        alt={collection.title}
        width={606}
        height={758}
        priority
        className="object-contain w-full h-165 transition-transform duration-1000 ease-out group-hover:scale-105"
      />

    </div>
  );
}

export default MainCampaign;
