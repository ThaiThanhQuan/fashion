import { images } from "@/src/assets/images";
import Image from "next/image";

function MainCampaign() {
  return (
    <div className="relative cursor-pointer group overflow-hidden">
      <Image
        src={images.collection}
        alt="Spring/Summer 2024 Collection"
        width={606}
        height={758}
        priority
        className="object-cover w-full h-auto transition-transform duration-1000 ease-out group-hover:scale-105"
      />
    </div>
  );
}

export default MainCampaign;
