import AtelierCard from "./components/AtelierCard/AtelierCard";
import CampaignDescription from "./components/CampaignDescription/CampaignDescription";
import CollectionTitle from "./components/CollectionTitle/CollectionTitle";
import MainCampaign from "./components/MainCampaign/MainCampaign";
import ServiceCard from "./components/ServiceCard/ServiceCard";

function Collections() {
  return (
    <section className="grid grid-cols-12 py-(--padding-y) container">
      <div className="col-span-8">
        <MainCampaign />
        <CollectionTitle />
      </div>

      <div className="col-span-4 flex flex-col gap-8">
        <AtelierCard />
        <CampaignDescription />
        <ServiceCard />
      </div>
    </section>
  );
}

export default Collections;
