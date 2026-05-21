import { IArtist } from "@/src/types";
import Image from "next/image";

interface IProps {
  artist: IArtist
}

function ArtistItem({artist}: IProps) {
    return ( 
        <div className="flex flex-col lg:flex-row gap-10 col-span-1 lg:col-span-6">
            <div className="relative aspect-3/4 w-full">
            <Image
                src={artist.thumbnail}
                fill
                alt=""
                className="object-cover "
            />
            </div>
            <div className="pt-8">
            <span className="text-(--primary-color) text-xs font-bold tracking-widest uppercase">
                {artist.feature}
            </span>
            <h3 className="text-2xl font-bold mt-2 mb-4">{artist.name}</h3>
            <p className="text-[#5f5f5f] text-sm font-light leading-loose">
                {artist.description}
            </p>
            </div>
        </div> 
    );
}

export default ArtistItem;