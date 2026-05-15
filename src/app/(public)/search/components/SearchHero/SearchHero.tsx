import { searchService } from "@/src/services/search.service";

interface IProps {
    query: string;
}

async function SearchHero({ query }: IProps) {
    if (!query) return null;

    const res = await searchService.search(query);
    const products = res?.result?.products ?? [];
    const collections = res?.result?.collections ?? [];
    const total = products.length + collections.length;

    return (
        <div className="container">
            <p className="tracking-wide font-body text-on-surface-variant">
                Hiển thị <span className="font-bold">{total}</span> kết quả cho &quot;{query}&quot;
            </p>
        </div>
    );
}

export default SearchHero;