import { COLLECTIONS_DATA } from "../data";
import CollectionProduct from "./components/CollectionProduct/CollectionProduct";
import DesignIdea from "./components/DesignIdea/DesignIdea";
import HeroCollection from "./components/HeroCollection/HeroCollection";

async function CollectionDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const collection = COLLECTIONS_DATA.find((item) => item.slug === slug);

  if (!collection) {
    return <div>Sản phẩm không tồn tại</div>;
  }
  return (
    <div>
      <HeroCollection collection={collection} />
      <div className="container">
        <DesignIdea collection={collection} />
        <CollectionProduct collection={collection} />
      </div>
    </div>
  );
}

export default CollectionDetailPage;
