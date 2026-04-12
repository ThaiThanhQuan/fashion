import CollectionsContent from "./components/CollectionsContent/CollectionsContent";
import CollectionsHeader from "./components/CollectionsHeader/CollectionsHeader";
import FilterSection from "./components/FilterSection/FilterSection";
import ViewMore from "./components/ViewMore/ViewMore";
import { CollectionsMockData } from "./data";

function Collections() {
  return (
    <div className="">
      <CollectionsHeader />

      <div className="px-(--padding-width) grid grid-cols-12 gap-10">
        <div className="col-span-3">
          <FilterSection />
        </div>
        <div className="col-span-9">
          <div className=" grid grid-cols-3 gap-x-12 gap-y-24 [&>div:nth-child(3n-1)]:translate-y-12">
            {CollectionsMockData.map((item) => (
              <CollectionsContent key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      <ViewMore />
    </div>
  );
}

export default Collections;
