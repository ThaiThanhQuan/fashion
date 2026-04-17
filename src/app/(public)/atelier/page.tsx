import ArtisanList from "./components/ArtisanList/ArtisanList";
import BookAppointment from "./components/BookAppointment/BookAppointment";
import CategoryService from "./components/CategoryService/CategoryService";
import HeroAtelier from "./components/HeroAtelier/HeroAtelier";

function AtelierPage() {
  return (
    <div>
      <HeroAtelier />
      <div id="categoryservice">
        <CategoryService />
      </div>

      <div id="service">
        <BookAppointment />
      </div>
      <ArtisanList />
    </div>
  );
}

export default AtelierPage;
