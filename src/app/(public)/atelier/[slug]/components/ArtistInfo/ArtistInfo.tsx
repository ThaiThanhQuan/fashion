import Image from "next/image";
import { IArtist } from "@/src/types";

interface IProps {
  artist: IArtist;
}

function ArtistInfo({ artist }: IProps) {
  return (
    <div className="container py-(--padding-y)">
      <div className="grid grid-cols-2">
        <div className="p-24 flex flex-col justify-center bg-[#e4e2e2]">
          <h2 className="text-4xl font-bold tracking-tighter mb-8 leading-tight">
            {artist.feature}
          </h2>
          <div className="flex flex-col mb-6">
            <p className=" text-2xl font-light text-(--primary-color) ">
              {artist.name}
            </p>
            <p className="text-[#5f5f5f] font-light leading-relaxed ">
              +{artist.experience}
            </p>
          </div>
          <p className="text-[#5f5f5f] font-light leading-relaxed mb-10">
            {artist.description}
          </p>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-px bg-(--primary-color)" />
            <span>{artist.expertise}</span>
          </div>
        </div>
        <div className="relative w-full h-auto">
          <Image
            src={artist.thumbnail}
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default ArtistInfo;
