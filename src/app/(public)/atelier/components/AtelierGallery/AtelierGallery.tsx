import { images } from "@/src/assets/images";
import Image from "next/image";

function AtelierGallery() {
  return (
    <div className="relative aspect-4/5">
      <Image
        src={images.atelier1}
        alt="Atelier 1"
        fill
        className="object-cover w-full h-full"
      />

      <div className="absolute -bottom-12 -left-24 w-64 h-80 overflow-hidden shadow-2xl aspect-4/5">
        <Image
          src={images.atelier2}
          alt="Atelier 2"
          fill
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default AtelierGallery;
