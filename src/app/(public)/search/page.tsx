import SearchCollection from "./components/SearchCollection/SearchCollection";
import SearchHero from "./components/SearchHero/SearchHero";
import SearchProduct from "./components/SearchProduct/SearchProduct";

interface IProps {
    searchParams: { q?: string };
}

async function SearchPage({ searchParams }: IProps) {
    const { q } = await searchParams;

    console.log('searchParam:' ,q)

    return ( 
        <div className="container pt-10 space-y-10 pb-30">
            <SearchHero query={q ?? ''} />
            <SearchCollection query={q ?? ''} />
            <SearchProduct query={q ?? ''} />
        </div>
     );
}

export default SearchPage;