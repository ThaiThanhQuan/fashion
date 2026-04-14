import ButtonViewMore from "@/src/components/ButtonViewMore/ButtonViewMore";
import CollectionFilter from "./components/CollectionFilter/CollectionFilter";
import CollectionItem from "./components/CollectionItem/CollectionItem";
import CollectionTitle from "./components/CollectionTitle/CollectionTitle";

function CollectionPage() {
  return (
    <div className="px-(--padding-x) py-(--padding-y)">
      <CollectionTitle />
      <CollectionFilter />
      <CollectionItem />

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
