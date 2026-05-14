'use client'
import { ICategoryProduct } from "@/src/types";
import { useEffect, useState } from "react";
import { categoryProductService } from "@/src/services";

interface IProps {
    selected?: string;
    onChange: (categoryId: string | undefined) => void;
    onReset: () => void
}
function CategoryFilter({ selected, onChange,onReset }: IProps) {

  const [categories, setCategories] = useState<ICategoryProduct[]>([]);

    useEffect(() => {
        categoryProductService.getAll()
            .then((res) => {
              setCategories(res?.result ?? []);
            })
            .catch(console.error);
    }, []);



  return (
    <div className="">
      <div className="flex items-center justify-between">
         <h3 className="text-xs font-headline font-bold uppercase tracking-[0.2em] mb-6 text-[#323233]">
          Danh mục
        </h3>
        <button onClick={onReset} className="text-xs font-headline font-bold uppercase tracking-[0.2em] mb-6 text-[#323233] cursor-pointer">Clear all</button>
      </div>

      <div className="space-y-2 text-sm font-body">
        {categories.map((category) => (
           <button
              key={category.id}
              onClick={() => onChange(
                  selected === category.id ? undefined : category.id
              )}
              className={`block uppercase tracking-widest transition-colors
                  ${selected === category.id
                      ? "text-[#323233] font-bold"
                      : "text-[#5f5f5f] hover:text-[#323233]"
                  }`}
          >
              {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
export default CategoryFilter;
