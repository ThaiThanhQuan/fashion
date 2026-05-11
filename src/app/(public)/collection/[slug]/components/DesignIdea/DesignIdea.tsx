import { images } from "@/src/assets/images";
import Image from "next/image";
import { ICollection } from "@/src/types";

interface IProps {
  collection: ICollection;
}

function DesignIdea({ collection }: IProps) {
  return (
    <div className=" py-(--padding-y)">
      <div className="grid grid-cols-2 gap-32">
        <div className="relative w-full h-150">
          <div className="relative w-[90%] h-142.5 group overflow-hidden">
            <Image
              src={images.bg_author}
              fill
              alt="bg-author"
              className="object-cover duration-1000 ease-out group-hover:scale-105"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-[60%] aspect-3/4 border-8 border-[#fcf9f8] z-20">
            <Image
              src={collection.artist.thumbnail}
              alt={collection.artist.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="mb-8 text-4xl font-bold tracking-tight">
            Cảm Hứng Thiết Kế
          </h2>

          <div className="space-y-6 text-[#5f5f5f] leading-loose text-lg">
              <p >{collection.designIdeas}</p>
          </div>

          <div className="pt-8 flex items-center gap-4 text-[#323233]">
            <span className="h-px w-12 bg-(--primary-color)" />
            <span className="italic font-bold font-headline">
              {collection.artist.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignIdea;
