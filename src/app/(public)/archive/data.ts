import { images } from "@/src/assets/images";
import { StaticImageData } from "next/image";

export interface ICollectionItem {
  id: number;
  title: string;
  year: number;
  season: string;
  category: string;
  price: number;
  desc: string;
  gallery: string | StaticImageData[];
  thumbnail: string | StaticImageData;
}

export const COLLECTIONS_DATA: ICollectionItem[] = [
  {
    id: 1,
    title: "Brutalist Beauty",
    year: 2024,
    season: "Xuân/Hè",
    category: "Couture",
    price: 15000000,
    thumbnail: images.collection1,
    gallery: [images.collection2, images.collection3, images.collection4],
    desc: "Thiết kế đầm dạ hội đính kết thủ công tỉ mỉ trong hơn 200 giờ.",
  },
  {
    id: 2,
    title: "Midnight Silhouette",
    year: 2024,
    season: "Thu/Đông",
    category: "Couture",
    price: 32000000,
    thumbnail: images.collection5,
    gallery: [images.collection6, images.collection4],
    desc: "Sự kết hợp hoàn mỹ giữa nhung lụa Ý và kỹ thuật dựng form corset kiến trúc, tôn vinh đường nét cơ thể.",
  },
  {
    id: 3,
    title: "The Urban Tailor",
    year: 2024,
    season: "Xuân/Hè",
    category: "Ready-to-wear",
    price: 4500000,
    thumbnail: images.collection4,
    gallery: [images.collection3, images.collection1],
    desc: "Tái định nghĩa phong cách công sở với áo Blazer oversized cắt may theo chuẩn Bespoke, thoải mái nhưng vẫn quyền lực.",
  },
  {
    id: 4,
    title: "Ethereal Drape",
    year: 2023,
    season: "Xuân/Hè",
    category: "Couture",
    price: 18500000,
    thumbnail: images.collection1,
    gallery: [images.collection5, images.collection3],
    desc: "Kỹ thuật draping bậc thầy trên chất liệu lụa Chiffon cao cấp, tạo hiệu ứng chuyển động tựa như mây trời.",
  },
  {
    id: 5,
    title: "Heritage Weave",
    year: 2023,
    season: "Thu/Đông",
    category: "Ready-to-wear",
    price: 6800000,
    thumbnail: images.collection5,
    gallery: [images.collection2],
    desc: "Sử dụng chất liệu Tweed dệt tay truyền thống kết hợp với các chi tiết kim loại hiện đại, mang lại vẻ ngoài vượt thời gian.",
  },
  {
    id: 6,
    title: "Avant-Garde Structure",
    year: 2022,
    season: "Thu/Đông",
    category: "Couture",
    price: 45000000,
    thumbnail: images.collection3,
    gallery: [images.collection2, images.collection1, images.collection3],
    desc: "Tác phẩm nghệ thuật mang tính thể nghiệm với cấu trúc 3D phức tạp, dành cho những cá tính thời trang táo bạo.",
  },
];

// Data cho các nút Filter (Để map ra thanh menu như ảnh)
export const FILTER_OPTIONS = {
  years: ["Tất cả", 2024, 2023, 2022, 2021, 2020],
  seasons: ["Xuân/Hè", "Thu/Đông"],
  categories: ["Couture", "Ready-to-wear"],
};
