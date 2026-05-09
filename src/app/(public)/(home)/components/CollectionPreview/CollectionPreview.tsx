import { collectionService, serviceService } from "@/src/services";
import AtelierCard from "./components/AtelierCard/AtelierCard";
import CampaignDescription from "./components/CampaignDescription/CampaignDescription";
import CollectionTitle from "./components/CollectionTitle/CollectionTitle";
import MainCampaign from "./components/MainCampaign/MainCampaign";
import ServiceCard from "./components/ServiceCard/ServiceCard";

async function Collections() {
  const collec = await collectionService.getAll({ page: 0, size: 4 });
  const service = await serviceService.getAll({ page: 0, size: 4 });

  const collections = collec?.result?.content ?? [];
  const services = service?.result?.content ?? [];

  const firstCollection = collections[0];
  const firstService = services[0];


  return (
    <section className="grid grid-cols-12 py-(--padding-y) container">
      <div className="col-span-8">
        <MainCampaign collection={firstCollection}/>
        <CollectionTitle collection={firstCollection}/>
      </div>

      <div className="col-span-4 flex flex-col gap-8">
        <AtelierCard />
        <CampaignDescription />
        <ServiceCard service={firstService}/>
      </div>
    </section>
  );
}

export default Collections;
