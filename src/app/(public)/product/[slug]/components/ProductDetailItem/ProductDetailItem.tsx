import SizeSelector from "@/src/components/SizeSelector/SizeSelector";
import { IProductItem } from "../../../data";
import { Heart, Plus } from "lucide-react";

interface IProps {
  product: IProductItem;
}
function ProductDetailItem({ product }: IProps) {
  return (
    <div className="grid grid-cols-12 gap-16">
      <div className="col-span-7">
        <h1>hi</h1>
      </div>

      <div className="col-span-5">
        <p className="font-headline text-(--primary-color) tracking-widest text-xs font-bold uppercase">
          Collection Nº 04
        </p>
        <div className="text-6xl tracking-tighter leading-none font-extrabold uppercase mt-4 max-w-98">
          {product.title}
        </div>

        <div className="flex items-end gap-4 mt-4">
          <span className="text-2xl font-light text-on-surface">
            $ {product.price.toLocaleString("de-DE")}
          </span>
          <span className="text-xs uppercase tracking-widest text-[#5f5f5f] mb-1">
            {product.label}
          </span>
        </div>

        <p className="mt-10 text-[#5f5f5f] leading-relaxed font-light text-lg">
          {product.desc}
        </p>

        <div className="mt-6 h-px w-12 bg-[#b2b2b14d]"></div>

        <SizeSelector />

        <div className="mt-10 flex flex-col gap-4">
          <button className="w-full py-5 bg-[#5f5e5e] text-[#faf7f6] font-headline font-bold uppercase tracking-widest transition-all hover:bg-[#535252] hover:-translate-y-0.5 flex items-center justify-center gap-2">
            <Plus color="white" size={18} /> Thêm nhanh
          </button>

          <button className="w-full py-5 border border-[#b2b2b133] text-[#323233] font-headline font-bold uppercase tracking-widest transition-all hover:bg-[#f6f3f2] flex items-center justify-center gap-2">
            <Heart className="stroke-black fill-none stroke-1" size={18} />
            <span>Lưu vào danh sách yêu thích</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-8 pt-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest mb-2">
              Provenance
            </p>
            <p className="text-xs text-[#5f5f5f] font-light">
              Milan, Italy. Artisan Workshop Nº 8
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest mb-2">
              Shipping
            </p>
            <p className="text-xs text-[#5f5f5f] font-light">
              Express worldwide shipping. 2–3 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailItem;
