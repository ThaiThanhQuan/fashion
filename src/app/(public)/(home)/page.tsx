import GoToTop from "@/src/components/GoToTop/GoToTop";
import Collections from "./components/CollectionPreview/CollectionPreview";
import Hero from "./components/Hero/Hero";
import Newsletter from "./components/Newsletter/Newsletter";
import Trend from "./components/Trend/Trend";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Collections />
      <Trend />
      <Newsletter />
      <GoToTop />
    </>
  );
}
