import { images } from "@/src/assets/images";
import { StaticImageData } from "next/image";

export interface ICollectionsItem {
  id: string;
  title: string;
  description: string;
  price: number;
  thumbnail: string | StaticImageData;
}

export const CollectionsMockData: ICollectionsItem[] = [
  {
    id: "1",
    title: "Blazer Len Cấu Trúc",
    description: "Than Chì / Len Thô",
    price: 1240,
    thumbnail: images.collection1,
  },
  {
    id: "2",
    title: "Váy Lụa Mềm Mại",
    description: "Ngọc Trai / Lụa Mulberry",
    price: 2800,
    thumbnail: images.collection2,
  },
  {
    id: "3",
    title: "Quần Tây Thiết Kế Dáng Ôm",
    description: "Đen Obsidian / Twill",
    price: 890,
    thumbnail: images.collection3,
  },
  {
    id: "4",
    title: "Áo Khoác Trench Điêu Khắc",
    description: "Cát Sa Mạc / Gabardine",
    price: 3450,
    thumbnail: images.collection4,
  },
  {
    id: "5",
    title: "Áo Vest Len Tối Giản",
    description: "Xanh Olive Đậm / Cashmere",
    price: 420,
    thumbnail: images.collection5,
  },
  {
    id: "6",
    title: "Quần Palazzo",
    description: "Ngà Voi / Hỗn Hợp Linen",
    price: 1100,
    thumbnail: images.collection6,
  },
];
