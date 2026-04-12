import ButtonViewMore from "@/src/components/ButtonViewMore/ButtonViewMore";
import ArchiveFilter from "./components/ArchiveFilter/ArchiveFilter";
import ArchiveItem from "./components/ArchiveItem/ArchiveItem";
import ArchiveTitle from "./components/ArchiveTitle/ArchiveTitle";

function ArchivePage() {
  return (
    <div className="px-(--padding-width) py-(--padding-y)">
      <ArchiveTitle />
      <ArchiveFilter />
      <ArchiveItem />

      <div className="container flex items-center justify-center mt-24">
        <ButtonViewMore
          className="hover:bg-[#323233] text-white  bg-[#323233]/70"
          title="Xem thêm bộ sưu tập"
        />
      </div>
    </div>
  );
}

export default ArchivePage;
