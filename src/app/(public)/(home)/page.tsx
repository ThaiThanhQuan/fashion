import Collections from "./components/CollectionPreview/CollectionPreview";
import Hero from "./components/Hero/Hero";
import NewArrivals from "./components/NewArrivals/NewArrivals";
import Trend from "./components/Trend/Trend";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Collections />
      <Trend />
      <NewArrivals />
    </>
  );
}
