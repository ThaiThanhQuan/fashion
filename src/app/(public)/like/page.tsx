import NewCollection from "./components/NewCollection/NewCollection";
import LikeHeader from "./components/LikeHeader/LikeHeader";
import LikeProductsGrid from "./components/LikeProductsGrid/LikeProductsGrid";

function LikePage() {
  return (
    <div className="p-16">
      <LikeHeader />
      <LikeProductsGrid />
      <NewCollection />
    </div>
  );
}

export default LikePage;
