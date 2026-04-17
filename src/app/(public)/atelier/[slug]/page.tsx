import { CategoryServiceMockData } from "../data";
import ArtistInfo from "./components/ArtistInfo/ArtistInfo";
import HeroService from "./components/HeroService/HeroService";
import Procedure from "./components/Procedure/Procedure";
import ServiceCrafts from "./components/ServiceCrafts/ServiceCrafts";
import ServiceDetailsSection from "./components/ServiceDetailsSection/ServiceDetailsSection";

async function AtelierDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const service = CategoryServiceMockData.find((item) => item.slug === slug);

  if (!service) {
    return <div>Dịch vụ không tồn tại</div>;
  }
  return (
    <div>
      <HeroService service={service} />
      <ServiceCrafts service={service} />
      <div id="procedure">
        <Procedure service={service} />
      </div>
      <ArtistInfo service={service} />
      <ServiceDetailsSection service={service} />
    </div>
  );
}

export default AtelierDetailPage;
