'use client'
import { IProduct, IProductFilter } from "@/src/types";
import FilterSection from "../FilterSection/FilterSection";
import ProductList from "../ProductList/ProductList";
import { useState } from "react";
import ProductSort from "../ProductSort/ProductSort";

interface IProps {
    initialProducts: IProduct[];
    totalElements: number;
}

function ProductCatalog({ initialProducts, totalElements }: IProps) {
    const [filter, setFilter] = useState<IProductFilter>({});

    const handleFilter = (newFilter: Partial<IProductFilter>) => {
        setFilter(prev => ({ ...prev, ...newFilter }));
    };

    const handleReset = () => setFilter({});

    return ( 
        <div className="px-(--padding-x) grid grid-cols-12 gap-10 mb-10">
        <div className="col-span-3">
          <FilterSection 
                filter={filter}
                onFilter={handleFilter}
                onReset={handleReset}
          />
        </div>
        <div className="flex flex-col col-span-9 gap-5">
            <ProductSort 
                filter={filter}
                onFilter={handleFilter}
            />
             <ProductList
                  initialProducts={initialProducts}
                  totalElements={totalElements}
                  filter={filter}
              />
        </div>
      </div>
     );
}

export default ProductCatalog;