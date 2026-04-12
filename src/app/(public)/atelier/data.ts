import { images } from "@/src/assets/images";
import { StaticImageData } from "next/image";

export interface IArtistItem {
  id: string;
  name: string;
  feature: string;
  desc: string;
  thumbnail: string | StaticImageData;
}

export const ArtistMockData: IArtistItem[] = [
  {
    id: "1",
    name: "Quân Thái",
    feature: "Master Tailor",
    desc: "Chuyên gia về cấu trúc suit nam và kỹ thuật dựng form truyền thống từ các xưởng may danh tiếng tại Florence.",
    thumbnail: images.brand,
  },
  {
    id: "2",
    name: "Thái Thanh Quân",
    feature: "Haute Couture Expert",
    desc: "Nghệ nhân đứng sau những bộ váy dạ hội lộng lẫy, nổi tiếng với khả năng xử lý các chất liệu lụa và ren cực khó.",
    thumbnail: images.collection,
  },
];
