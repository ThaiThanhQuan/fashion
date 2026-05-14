import CollectionFilter from "./components/CollectionFilter/CollectionFilter";
import CollectionTitle from "./components/CollectionTitle/CollectionTitle";
import { collectionService } from "@/src/services";
import CollectionList from "./components/CollectionList/CollectionList";

async function CollectionPage() {
  const res = await collectionService.getAll({ page: 0, size: 4 })
  const collections = res?.result?.content ?? [];
  const totalElements = res?.result?.totalElements ?? 0;

  return (
    <div className="px-(--padding-x) pt-2.5 pb-(--padding-y)">
      <CollectionTitle />
      <CollectionFilter />

      <CollectionList 
          initialCollections={collections}
          totalElements={totalElements}
      />
    </div>
  );
}

export default CollectionPage;
