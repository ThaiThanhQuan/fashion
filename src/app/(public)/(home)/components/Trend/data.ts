import { images } from "@/src/assets/images";
import { StaticImageData } from "next/image";

export interface ITrendProductItem {
  id: string;
  title: string;
  description: string;
  price: number;
  thumbnail: string | StaticImageData;
}

export const TrendMockData: ITrendProductItem[] = [
  {
    id: "1",
    title: "Blazer Kiến trúc",
    description: "Áo khoác / Xám Đậm",
    price: 850,
    thumbnail: images.blazer,
  },
  {
    id: "2",
    title: "Giày Cao Gót Lụa",
    description: "Giày dép / Kem",
    price: 620,
    thumbnail: images.giay,
  },
  {
    id: "3",
    title: "Áo Len Sát Nách Màu Yến Mạch",
    description: "Đồ dệt kim / Tự nhiên",
    price: 340,
    thumbnail: images.len,
  },
  {
    id: "4",
    title: "Túi Tote Nhộng",
    description: "Phụ kiện / Đen Onyx",
    price: 1200,
    thumbnail: images.bag,
  },
];
