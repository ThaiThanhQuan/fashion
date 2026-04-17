import AtelierContent from "./components/AtelierContent/AtelierContent";
import AtelierGallery from "./components/AtelierGallery/AtelierGallery";

function HeroAtelier() {
  return (
    <div className="grid grid-cols-12 gap-5 pb-7.5 px-(--padding-x)">
      <div className="col-span-7 flex flex-col justify-center">
        <AtelierContent />
      </div>
      <div className="col-span-5">
        <AtelierGallery />
      </div>
    </div>
  );
}

export default HeroAtelier;
