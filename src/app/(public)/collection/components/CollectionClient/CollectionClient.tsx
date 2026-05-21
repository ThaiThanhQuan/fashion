'use client';

import { useState } from "react";

import { ICollection, ICollectionFilter } from "@/src/types";
import CollectionList from "../CollectionList/CollectionList";
import CollectionFilter from "../CollectionFilter/CollectionFilter";

interface IProps {
    initialCollections: ICollection[];
    totalElements: number;
}

function CollectionClient({ initialCollections, totalElements }: IProps) {
    const [filter, setFilter] = useState<ICollectionFilter>({});

    const handleFilter = (newFilter: Partial<ICollectionFilter>) => {
        setFilter(prev => ({ ...prev, ...newFilter }));
    };

    return (
        <>
            <CollectionFilter
                collections={initialCollections}
                filter={filter}
                onFilter={handleFilter}
            />
            <CollectionList
                initialCollections={initialCollections}
                totalElements={totalElements}
                filter={filter}
            />
        </>
    );
}

export default CollectionClient;