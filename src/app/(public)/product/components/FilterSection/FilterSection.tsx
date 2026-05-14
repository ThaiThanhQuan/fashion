import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import PriceRange from "./components/PriceRange/PriceRange";
import SizeSelector from "../../../../../components/SizeSelector/SizeSelector";
import { IProductFilter } from "@/src/types";
interface IProps {
    onFilter: (filter: Partial<IProductFilter>) => void;
    onReset: () => void;
    filter: IProductFilter;
}

function FilterSection({ onFilter, onReset, filter }: IProps) {
  return (
    <div>
      <CategoryFilter 
          selected={filter.categoryId}
          onReset={onReset}
          onChange={(categoryId) => onFilter({ categoryId })}
        />
       <PriceRange
            min={filter.minPrice}
            max={filter.maxPrice}
            onChange={(minPrice, maxPrice) => onFilter({ minPrice, maxPrice })}
        />
        <SizeSelector
            selectedSize={filter.productSize}
            onSelect={(productSize) => onFilter({ productSize })}
        />

    </div>
  );
}

export default FilterSection;
