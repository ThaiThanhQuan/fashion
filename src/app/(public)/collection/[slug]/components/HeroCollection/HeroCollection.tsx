import Image from "next/image";
import { ICollection } from "@/src/types";

interface IProps {
  collection: ICollection;
}

function HeroCollection({ collection }: IProps) {
  return (
    <div>
      <div className="relative w-full h-[90vh] ">
        <Image
          src={collection.thumbnail}
          alt={collection.title}
          fill
          className="object-cover"
        />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#fcf9f800_0%,rgba(252,249,248,0.9)_100%)]" />
      
        <div className="absolute px-(--padding-x) bottom-30 left-0 flex flex-col items-start">
          <span className="block text-(--primary-color) font-semibold tracking-[0.2em] uppercase text-xl">
            {collection.season.name} - {collection.year}
          </span>

          <h1 className="mb-8 font-bold leading-none tracking-tighter text-8xl">
            {collection.title}
          </h1>
          <p className="text-[#5f5f5f] text-xl max-w-2xl leading-relaxed">
            {collection.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroCollection;
