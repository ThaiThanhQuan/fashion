import { images } from "@/src/assets/images";
import Image from "next/image";

function AtelierCard() {
  return (
    <div className="relative cursor-pointer group">
      <Image
        src={images.fabric}
        alt="Atelier Fabric Texture"
        width={260}
        height={260}
        priority
        className="object-cover w-full transition-transform duration-1000 ease-out h-35 group-hover:scale-105"
      />
    </div>
  );
}

export default AtelierCard;
