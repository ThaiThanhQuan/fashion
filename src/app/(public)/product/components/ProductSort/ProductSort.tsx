import { IProductFilter } from "@/src/types";

interface IProps {
    onFilter: (filter: Partial<IProductFilter>) => void;
    filter: IProductFilter;
}
function ProductSort({ onFilter, filter }: IProps) {

    const handleSortChange = ( e: React.ChangeEvent<HTMLSelectElement>) => {
        onFilter({
            sortBy: e.target.value
        });
    };

    return (  
         <div className="flex items-end justify-end">
    <div className="flex items-center gap-8 pb-2 border-b border-outline-variant/20">
          <span className="text-[10px] font-label uppercase tracking-widest text-[#5f5f5f] ">
            Sắp Xếp Theo
          </span>
          <select
            value={filter.sortBy ?? ""}
            onChange={handleSortChange}
            className="text-xs font-bold tracking-widest uppercase bg-transparent border-none font-headline"
            name=""
            id=""
          >
            <option value="">Nổi Bật</option>
            <option value="newest">Mới Nhất</option>
            <option value="price_asc">Giá: (Thấp-Cao)</option>
            <option value="price_desc">Giá: (Cao-Thấp)</option>
          </select>
        </div> 
        </div>
        );
}

export default ProductSort;