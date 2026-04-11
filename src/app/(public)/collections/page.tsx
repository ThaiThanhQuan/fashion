import CollectionsHeader from "./components/CollectionsHeader/CollectionsHeader";
import FilterSection from "./components/FilterSection/FilterSection";

function Collections() {
  return (
    <div className="pt-32 pb-20 ">
      <CollectionsHeader />

      <div className="px-(--padding-width) grid grid-cols-12 gap-10">
        <div className="col-span-3">
          <FilterSection />
        </div>
        <h1 className="col-span-9">hi</h1>
      </div>
    </div>
  );
}

export default Collections;
