import Link from "next/link";
import { IProductItem } from "../../../data";

interface IProps {
  product: IProductItem;
}

function Breadcrumbs({ product }: IProps) {
  return (
    <div className="mb-12 flex gap-4 text-[10px] uppercase tracking-[0.2em] text-[#5f5f5f]">
      <Link href={"/product"}>Product</Link>
      <span>/</span>
      <span>{product.title}</span>
    </div>
  );
}

export default Breadcrumbs;
