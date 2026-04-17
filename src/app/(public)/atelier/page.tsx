import ArtisanList from "./components/ArtisanList/ArtisanList";
import AtelierContent from "./components/AtelierContent/AtelierContent";
import AtelierGallery from "./components/AtelierGallery/AtelierGallery";
import BookAppointment from "./components/BookAppointment/BookAppointment";
import CategoryService from "./components/CategoryService/CategoryService";

function AtelierPage() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-5 pb-7.5 px-(--padding-x)">
        <div className="col-span-7 flex flex-col justify-center">
          <AtelierContent />
        </div>
        <div className="col-span-5">
          <AtelierGallery />
        </div>
      </div>

      <div id="categoryservice">
        <CategoryService />
      </div>

      <div id="service" className="px-(--padding-x)">
        <BookAppointment />
      </div>
      <ArtisanList />
    </div>
  );
}

export default AtelierPage;
