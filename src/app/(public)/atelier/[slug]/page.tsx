import { artistService, pricingService, serviceService, timelineService, workflowService } from "@/src/services";
import ArtistInfo from "./components/ArtistInfo/ArtistInfo";
import HeroService from "./components/HeroService/HeroService";
import Procedure from "./components/Procedure/Procedure";
import ServiceCrafts from "./components/ServiceCrafts/ServiceCrafts";
import ServiceDetailsSection from "./components/ServiceDetailsSection/ServiceDetailsSection";

async function AtelierDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const resService = await serviceService.getBySlug(slug)
  const service = resService?.result
  
  const resArtist = await artistService.getById(service.artistId)
  const artist = resArtist?.result

  const resWorkFlow = await workflowService.getByService(service.id)
  const workflows = resWorkFlow?.result

  const resPricing = await pricingService.getByService(service.id)
  const pricing = resPricing?.result

  const resTimeline = await timelineService.getByService(service.id)
  const timeline = resTimeline?.result


  if (!service) {
    return <div>Dịch vụ không tồn tại</div>;
  }
  return (
    <div>
      <HeroService service={service} />
      <ServiceCrafts service={service} />
      <div id="procedure">
        <Procedure workflows={workflows} />
      </div>
      <ArtistInfo artist={artist} />
      <ServiceDetailsSection 
          timeline={timeline} 
          pricing={pricing}
        />
    </div>
  );
}

export default AtelierDetailPage;
