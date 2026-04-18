import { getGridPosition } from "@/src/utils/layoutHelpers";
import CollectionFilter from "./components/CollectionFilter/CollectionFilter";
import CollectionTitle from "./components/CollectionTitle/CollectionTitle";
import { COLLECTIONS_DATA } from "./data";
import CollectionItem from "./components/CollectionItem/CollectionItem";
import ButtonViewMore from "@/src/components/ButtonViewMore/ButtonViewMore";

function CollectionPage() {
  return (
    <div className="px-(--padding-x) pt-2.5 pb-(--padding-y)">
      <CollectionTitle />
      <CollectionFilter />

      <div className="grid grid-cols-12 gap-8">
        {COLLECTIONS_DATA.map((item, index) => {
          const { isBig, hasMargin } = getGridPosition(index);
          return (
            <CollectionItem
              key={item.id}
              item={item}
              isBig={isBig}
              hasMargin={hasMargin}
            />
          );
        })}
      </div>

      <div className="container flex items-center justify-center mt-24">
        <ButtonViewMore
          className="hover:bg-[#323233] text-white  bg-[#323233]/70"
          title="Xem thêm bộ sưu tập"
        />
      </div>
    </div>
  );
}

export default CollectionPage;
