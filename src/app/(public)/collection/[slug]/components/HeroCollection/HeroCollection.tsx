import Image from "next/image";
import { ICollectionItem } from "../../../data";

interface IProps {
  collection: ICollectionItem;
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
          <span className="block text-(--primary-color) font-semibold tracking-[0.2em] uppercase text-xs">
            {collection.season} - {collection.year}
          </span>

          <h1 className="text-8xl font-bold tracking-tighter leading-none mb-8">
            {collection.title}
          </h1>
          <p className="text-[#5f5f5f] text-xl max-w-2xl leading-relaxed">
            {collection.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroCollection;
