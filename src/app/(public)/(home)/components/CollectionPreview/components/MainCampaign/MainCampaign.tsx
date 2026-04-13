import { images } from "@/src/assets/images";
import Image from "next/image";

function MainCampaign() {
  return (
    <div className="relative cursor-pointer group overflow-hidden">
      {/* <Image
        src={images.collection}
        alt="Spring/Summer 2024 Collection"
        width={606}
        height={758}
        priority
        className="object-contain w-full h-165 transition-transform duration-1000 ease-out group-hover:scale-105"
      /> */}

      <video
        src="/videos/fashion.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-165 object-contain transition-transform duration-1000 ease-out group-hover:scale-105"
      />
    </div>
  );
}

export default MainCampaign;
