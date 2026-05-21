import CollectionClient from "./components/CollectionClient/CollectionClient";
import CollectionTitle from "./components/CollectionTitle/CollectionTitle";
import { collectionService } from "@/src/services";

async function CollectionPage() {
    const res = await collectionService.getAll({ page: 0, size: 20 });
    const collections = res?.result?.content ?? [];
    const totalElements = res?.result?.totalElements ?? 0;


    return (
        <div className="px-(--padding-x) pt-2.5 pb-(--padding-y)">
            <CollectionTitle />
            <CollectionClient
                initialCollections={collections}
                totalElements={totalElements}
            />
        </div>
    );
}

export default CollectionPage;