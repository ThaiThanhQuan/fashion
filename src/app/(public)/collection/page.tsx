import CollectionFilter from "./components/CollectionFilter/CollectionFilter";
import CollectionItem from "./components/CollectionItem/CollectionItem";
import CollectionTitle from "./components/CollectionTitle/CollectionTitle";

function CollectionPage() {
  return (
    <div className="px-(--padding-x) pt-2.5 pb-(--padding-y)">
      <CollectionTitle />
      <CollectionFilter />
      <CollectionItem />
    </div>
  );
}

export default CollectionPage;
