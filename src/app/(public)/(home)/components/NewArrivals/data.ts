import { images } from "@/src/assets/images";
import { StaticImageData } from "next/image";

export interface INewArrivalItem {
  id: string;
  title: string;
  label: string;
  thumbnail: string | StaticImageData;
}

export const NewArrivalsMockData: INewArrivalItem[] = [
  {
    id: "1",
    title: "Váy Dạ Hội Điêu Khắc",
    label: "Đặt trước ngay",
    thumbnail: images.vay,
  },
  {
    id: "2",
    title: "Áo Cổ Lọ Tech-Jersey",
    label: "Đang có sẵn",
    thumbnail: images.colo,
  },
  {
    id: "3",
    title: "Áo Trench Coat Cách Tân",
    label: "Phiên bản giới hạn",
    thumbnail: images.coat,
  },
];
