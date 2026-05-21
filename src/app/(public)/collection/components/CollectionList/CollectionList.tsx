'use client';

import { useState, useEffect } from 'react';
import ButtonViewMore from "@/src/components/ButtonViewMore/ButtonViewMore";
import CollectionItem from "../CollectionItem/CollectionItem";
import { ICollection, ICollectionFilter } from "@/src/types";
import { getGridPosition } from "@/src/utils/layoutHelpers";
import { collectionService } from "@/src/services";



interface IProps {
    initialCollections: ICollection[];
    totalElements: number;
    filter: ICollectionFilter;
}

function CollectionList({ initialCollections, totalElements: initialTotal, filter }: IProps) {
    const [collections, setCollections] = useState<ICollection[]>(initialCollections);
    const [totalElements, setTotalElements] = useState(initialTotal);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchFiltered = async () => {
            try {
                setLoading(true);
                const res = await collectionService.filter({
                    ...filter,
                    page: 0,
                    size: 4
                });
                setCollections(res?.result?.content ?? []);
                setTotalElements(res?.result?.totalElements ?? 0);
                setPage(0);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchFiltered();
    }, [filter]);

    const hasMore = collections.length < totalElements;

    const handleLoadMore = async () => {
        try {
            setLoading(true);
            const nextPage = page + 1;
            const res = await collectionService.filter({
                ...filter,
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

    if (loading && collections.length === 0) {
        return (
            <div className="flex items-center justify-center h-96">
                <p className="text-[10px] uppercase tracking-widest text-[#5f5f5f]">
                    Đang tải...
                </p>
            </div>
        );
    }

    if (!loading && collections.length === 0) {
        return (
            <div className="flex items-center justify-center h-96">
                <p className="text-[10px] uppercase tracking-widest text-[#5f5f5f]">
                    Không tìm thấy bộ sưu tập
                </p>
            </div>
        );
    }

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
                        className="hover:bg-[#323233] text-white bg-[#323233]/70"
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