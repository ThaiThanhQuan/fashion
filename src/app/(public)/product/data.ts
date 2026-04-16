import { images } from "@/src/assets/images";
import { StaticImageData } from "next/image";

export interface IProductItem {
  id: string;
  slug: string;
  title: string;
  label: string;
  desc: string;
  price: number;
  category_product: string;
  thumbnail: string | StaticImageData;
  gallery: string[] | StaticImageData[];
}

export const ProductMockData: IProductItem[] = [
  {
    id: "1",
    title: "Blazer Len Cấu Trúc",
    slug: "blazer-len-cau-truc",
    category_product: "outerwear",
    label: "Than Chì / Len Thô",
    desc: "Thiết kế blazer cấu trúc sắc nét mang lại vẻ ngoài thanh lịch và quyền lực. Chất liệu len thô cao cấp giúp giữ form hoàn hảo, phù hợp cho cả môi trường công sở lẫn những dịp quan trọng.",
    price: 1240,
    thumbnail: images.collection1,
    gallery: [
      images.collection1,
      images.collection6,
      images.collection5,
      images.collection4,
    ],
  },
  {
    id: "2",
    title: "Váy Lụa Mềm Mại",
    slug: "vay-lua-mem-mai",
    category_product: "dress",
    label: "Ngọc Trai / Lụa Mulberry",
    desc: "Chiếc váy lụa Mulberry cao cấp với độ rũ tự nhiên, tạo cảm giác nhẹ nhàng và sang trọng. Từng chuyển động đều tôn lên nét nữ tính tinh tế và cuốn hút.",
    price: 2800,
    thumbnail: images.collection2,
    gallery: [
      images.collection2,
      images.collection2,
      images.collection3,
      images.collection4,
    ],
  },
  {
    id: "3",
    title: "Quần Tây Thiết Kế Dáng Ôm",
    slug: "quan-tay-thiet-ke-dang-om",
    category_product: "pants",
    label: "Đen Obsidian / Twill",
    desc: "Phom dáng ôm gọn gàng giúp tôn lên đường nét cơ thể, kết hợp cùng chất liệu twill bền đẹp. Lựa chọn lý tưởng cho phong cách hiện đại và chuyên nghiệp.",
    price: 890,
    thumbnail: images.collection3,
    gallery: [
      images.collection3,
      images.collection2,
      images.collection3,
      images.collection4,
    ],
  },
  {
    id: "4",
    title: "Áo Khoác Trench Điêu Khắc",
    slug: "ao-khoac-trench-dieu-khac",
    category_product: "outerwear",
    label: "Cát Sa Mạc / Gabardine",
    desc: "Thiết kế trench coat mang cảm hứng điêu khắc, tạo nên vẻ ngoài mạnh mẽ và đầy khí chất. Chất liệu gabardine chống gió tốt, phù hợp cho những ngày thời tiết chuyển mùa.",
    price: 3450,
    thumbnail: images.collection4,
    gallery: [
      images.collection4,
      images.collection2,
      images.collection3,
      images.collection4,
    ],
  },
  {
    id: "5",
    title: "Áo Vest Len Tối Giản",
    slug: "ao-vest-len-toi-gian",
    category_product: "outerwear",
    label: "Xanh Olive Đậm / Cashmere",
    desc: "Chiếc vest tối giản với chất liệu cashmere mềm mại, mang lại cảm giác ấm áp và tinh tế. Phù hợp cho phong cách layering hiện đại và sang trọng.",
    price: 420,
    thumbnail: images.collection5,
    gallery: [
      images.collection5,
      images.collection2,
      images.collection3,
      images.collection4,
    ],
  },
  {
    id: "6",
    title: "Quần Palazzo",
    slug: "quan-palazzo",
    category_product: "pants",
    label: "Ngà Voi / Hỗn Hợp Linen",
    desc: "Quần palazzo ống rộng với chất liệu linen thoáng mát, tạo sự thoải mái tối đa khi mặc. Thiết kế bay bổng giúp tôn lên vẻ thanh lịch và thời thượng.",
    price: 1100,
    thumbnail: images.collection6,
    gallery: [
      images.collection6,
      images.collection2,
      images.collection3,
      images.collection4,
    ],
  },
];
