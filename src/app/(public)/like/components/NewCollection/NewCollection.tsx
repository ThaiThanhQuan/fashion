import { Sparkles } from "lucide-react";
import Link from "next/link";
import { COLLECTIONS_DATA } from "../../../collection/data";
import CollectionPreviewProduct from "./components/CollectionPreviewProduct/CollectionPreviewProduct";

function NewCollection() {
  const collection = COLLECTIONS_DATA[0];
  return (
    <div className="container py-(--padding-y)">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8 flex flex-col items-center justify-center bg-[#f6f3f2] p-12 border border-dashed border-[#b2b2b14d]">
          <Sparkles color="#b2b2b1" className="mb-6" />
          <div className="text-center max-w-sm">
            <h4 className="text-xl font-bold mb-4">Khám Phá Thêm</h4>
            <p className="text-[#5f5f5f] text-sm mb-8 leading-relaxed">
              Tiếp tục hành trình tìm kiếm phong cách riêng với các bộ sưu tập
              mới nhất từ Avenue Noir.
            </p>

            <Link
              href={"/collection"}
              className="inline-block border-b border-[#323233] pb-1 text-sm font-bold tracking-widest uppercase hover:text-(--primary-color) hover:border-(--primary-color) transition-all"
            >
              Xem Bộ Sưu Tập Mùa Hè
            </Link>
          </div>
        </div>

        <div className="col-span-4">
          <CollectionPreviewProduct product={collection.product[0]} />
        </div>
      </div>
    </div>
  );
}

export default NewCollection;
