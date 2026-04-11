import Image from "next/image";
import FooterBrand from "./components/FooterBrand/FooterBrand";
import { images } from "@/src/assets/images";
import FooterNav from "./components/FooterNav/FooterNav";
import FooterPolicy from "./components/FooterPolicy/FooterPolicy";

function Footer() {
  return (
    <footer className="py-20 px-(--padding-width) bg-[#f5f5f4]">
      <div className="flex justify-between ">
        <FooterBrand />

        <Image
          src={images.gucci}
          alt="Gucci Logo"
          width={300}
          height={300}
          className="object-contain"
        />

        <FooterNav />
      </div>
      <FooterPolicy />
    </footer>
  );
}

export default Footer;
