import { artistService, serviceService } from "@/src/services";
import ArtisanList from "./components/ArtisanList/ArtisanList";
import BookAppointment from "./components/BookAppointment/BookAppointment";
import CategoryService from "./components/CategoryService/CategoryService";
import HeroAtelier from "./components/HeroAtelier/HeroAtelier";

async function AtelierPage() {

  const resService = await serviceService.getAll({page: 0, size: 4})
  const resArtist = await artistService.getAll({page: 0, size: 4})

  const services = resService?.result?.content ?? [];
  const artists = resArtist?.result?.content ?? [];

  return (
    <div>
      <HeroAtelier />
      <div id="categoryservice">
        <CategoryService services={services}/>
      </div>

      <div id="service">
        <BookAppointment 
            services={services}
            artists={artists}
        />
      </div>
      <ArtisanList artists={artists}/>
    </div>
  );
}

export default AtelierPage;
