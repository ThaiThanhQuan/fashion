import { images } from "@/src/assets/images";
import Image from "next/image";

function AtelierCard() {
  return (
    <div className="relative  group cursor-pointer">
      <Image
        src={images.fabric}
        alt="Atelier Fabric Texture"
        width={300}
        height={300}
        priority
        className="object-cover w-full h-75 transition-transform duration-1000 ease-out group-hover:scale-105"
      />
    </div>
  );
}

export default AtelierCard;
