"use client";

import { ICategoryCollection } from "@/src/types";

interface IProps {
    categories: ICategoryCollection[];
    value?: string;
    onFilter: (categoryId?: string) => void;
}

function CategoryFilter({
    categories,
    value,
    onFilter,
}: IProps) {
    return (
        <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#5f5f5f] mb-4 block">
                Danh mục
            </p>

            <div className="flex gap-6">
                <button
                    type="button"
                    onClick={() => onFilter(undefined)}
                    className={`text-sm font-medium transition-colors duration-300 ${
                        !value
                            ? "text-(--primary-color)"
                            : "text-[#323233] hover:text-(--primary-color)/70"
                    }`}
                >
                    Tất cả
                </button>

                {categories.map((category) => (
                    <button
                        type="button"
                        key={category.id}
                        onClick={() => onFilter(category.id)}
                        className={`text-sm font-medium transition-colors duration-300 ${
                            value === category.id
                                ? "text-(--primary-color)"
                                : "text-[#323233] hover:text-(--primary-color)/70"
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