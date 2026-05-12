import NewCollection from "./components/NewCollection/NewCollection";
import LikeHeader from "./components/LikeHeader/LikeHeader";
import LikeProductsGrid from "./components/LikeProductsGrid/LikeProductsGrid";
import { collectionService } from "@/src/services";

async function LikePage() {
  const collec = await collectionService.getAll({ page: 0, size: 4 });
  const collections = collec?.result?.content ?? [];
  const firstCollection = collections[0];

  return (
    <div className="px-16 py-3">
      <LikeHeader />
      <LikeProductsGrid />
      <NewCollection collection={firstCollection}/>
    </div>
  );
}

export default LikePage;
