"use client";

import { useEffect, useState } from "react";

import {
    categoryCollectionService,
    seasonService,
} from "@/src/services";

import {
    ICollectionFilter,
    ICategoryCollection,
    ISeason,
    ICollection,
} from "@/src/types";
import YearFilter from "./components/YearFilter/YearFilter";
import SeasonFilter from "./components/SeasonFilter/SeasonFilter";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";

interface IProps {
    collections: ICollection[];
    filter: ICollectionFilter;
    onFilter: (filter: Partial<ICollectionFilter>) => void;
}

function CollectionFilter({ collections, filter, onFilter }: IProps) {
    const [seasons, setSeasons] = useState<ISeason[]>([]);
    const [categories, setCategories] = useState<
        ICategoryCollection[]
    >([]);

    const years = [
        "Tất cả",
        ...new Set(collections.map((item) => item.year))
    ];

    useEffect(() => {
        seasonService
            .getAll()
            .then((res) => setSeasons(res?.result ?? []));

        categoryCollectionService
            .getAll()
            .then((res) => setCategories(res?.result ?? []));
    }, []);

    return (
        <div className="flex flex-wrap gap-12 cursor-pointer pb-8 mb-16 border-b border-[#b2b2b126]">

            <YearFilter
                years={years}
                value={filter.year}
                onFilter={(year) => onFilter({ year })}
            />

            <SeasonFilter
                seasons={seasons}
                value={filter.seasonId}
                onFilter={(seasonId) =>
                    onFilter({ seasonId })
                }
            />

            <CategoryFilter
                categories={categories}
                value={filter.categoryId}
                onFilter={(categoryId) =>
                    onFilter({ categoryId })
                }
            />
        </div>
    );
}

export default CollectionFilter;