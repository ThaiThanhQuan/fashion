'use client'
import ButtonViewMore from "@/src/components/ButtonViewMore/ButtonViewMore";
import CollectionItem from "../CollectionItem/CollectionItem";
import { ICollection } from "@/src/types";
import { getGridPosition } from "@/src/utils/layoutHelpers";
import { useState } from "react";
import { collectionService } from "@/src/services";

interface IProps{
    initialCollections: ICollection[]
    totalElements: number
}

function CollectionList({initialCollections, totalElements}:  IProps) {

    const [collections, setCollections] = useState<ICollection[]>(initialCollections);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);

    const hasMore = collections.length < totalElements;

    const handleLoadMore = async () => {
        try {
            setLoading(true);
            const nextPage = page + 1;
            const res = await collectionService.getAll({
                page: nextPage,
                size: 4
            });

            if (res?.result?.content) {
                setCollections(prev => [...prev, ...res.result.content]);
                setPage(nextPage);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="grid grid-cols-12 gap-8">
                {collections.map((collection, index) => {
                const { isBig, hasMargin } = getGridPosition(index);
                return (
                    <CollectionItem
                    key={collection.id}
                    collection={collection}
                    isBig={isBig}
                    hasMargin={hasMargin}
                    />
                );
                })}
            </div> 
        
        <div className="container flex items-center justify-center mt-24">
            {hasMore && (
                <ButtonViewMore
                className="hover:bg-[#323233] text-white  bg-[#323233]/70"
                title={loading ? "Đang tải..." : "Xem thêm bộ sưu tập"}
                onClick={handleLoadMore}
                disabled={loading}
                />
            )}
      </div>
        </>
    );
}

export default CollectionList;