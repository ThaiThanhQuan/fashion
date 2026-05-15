import { searchService } from "@/src/services/search.service";
import Link from "next/link";
import CollectionItem from "../../../collection/components/CollectionItem/CollectionItem";
import { getGridPosition } from "@/src/utils/layoutHelpers";

interface IProps {
    query: string;
}
async function SearchCollection({ query }: IProps) {
     if (!query) return null;

    const res = await searchService.search(query);
    const collections = res?.result?.collections ?? [];

    if (collections.length === 0) return null;
    return (  
        <div>
            <div className="container flex items-center justify-between px-8 mb-12">
                <h2 className="text-3xl font-bold tracking-tighter font-headline">Bộ sưu tập ({collections.length})</h2>
                <Link href={'/collection'} className="text-xs tracking-widest underline uppercase transition-colors font-label  hover:text-(--primary-color) underline-offset-8">Xem tất cả</Link>
            </div>

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
        </div>
    );
}

export default SearchCollection;