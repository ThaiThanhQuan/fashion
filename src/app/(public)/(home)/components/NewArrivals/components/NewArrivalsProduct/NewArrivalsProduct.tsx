import { images } from "@/src/assets/images";
import Image from "next/image";
import { INewArrivalItem } from "../../data";

interface INewArrivalsProductProps {
  item: INewArrivalItem;
}

function NewArrivalsProduct({ item }: INewArrivalsProductProps) {
  return (
    <div className="group cursor-pointer overflow-hidden">
      <Image
        src={item.thumbnail}
        height={512}
        width={320}
        alt=""
        className="object-cover mb-6 w-full h-auto transition-transform duration-1000 ease-out group-hover:scale-105"
      />

      <h5 className="text-xs uppercase tracking-widest font-light mb-2">
        {item.label}
      </h5>
      <h4 className="font-headline text-xl font-bold">{item.title}</h4>
    </div>
  );
}

export default NewArrivalsProduct;
