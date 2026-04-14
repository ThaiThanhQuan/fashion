import { images } from "@/src/assets/images";
import { StaticImageData } from "next/image";

interface GalleryItem {
  src: string | StaticImageData;
  label: string; // Tên hiển thị (VD: "Cận cảnh đính kết")
  alt: string; // Mô tả cho SEO và Accessibility
  price: string;
}

export interface ICollectionItem {
  id: number;
  title: string;
  year: number;
  season: string;
  category: string;
  price: number;
  author: string;
  author_img: string | StaticImageData;
  design_ideas: string[];
  desc: string;
  slug: string;
  gallery: GalleryItem[];
  thumbnail: string | StaticImageData;
}

export const COLLECTIONS_DATA: ICollectionItem[] = [
  {
    id: 1,
    title: "Brutalist Beauty",
    slug: "brutalist-beauty",
    year: 2024,
    season: "Xuân/Hè",
    category: "Couture",
    price: 15000000,
    thumbnail: images.collection1,
    gallery: [
      {
        src: images.collection1,
        label: "Toàn cảnh mặt trước",
        alt: "Brutalist Beauty full look front",
        price: "15,000,000",
      },
      {
        src: images.collection2,
        label: "Chi tiết đính kết pha lê",
        alt: "Hand-stitched crystal details close-up",
        price: "15,000,000",
      },
      {
        src: images.collection3,
        label: "Góc nghiêng 45 độ",
        alt: "Side view silhouette",
        price: "15,000,000",
      },
      {
        src: images.collection4,
        label: "Cận cảnh bề mặt chất liệu",
        alt: "Fabric texture and beadwork",
        price: "15,000,000",
      },
      {
        src: images.collection5,
        label: "Phom dáng vai kiến trúc",
        alt: "Architectural shoulder structure",
        price: "15,000,000",
      },
    ],
    desc: "Mẫu đầm dạ hội mang tính biểu tượng với kỹ thuật đính kết thủ công pha lê và hạt cườm siêu nhỏ trong suốt hơn 200 giờ làm việc liên tục.",
    author: "Alexandre Vu",
    author_img: images.collection,
    design_ideas: [
      "Lấy cảm hứng từ kiến trúc Brutalism...",
      "Sự kết hợp táo bạo giữa cắt xẻ và đính kết...",
    ],
  },
  {
    id: 2,
    title: "Midnight Silhouette",
    slug: "midnight-silhouette",
    year: 2024,
    season: "Thu/Đông",
    category: "Couture",
    price: 32000000,
    thumbnail: images.collection5,
    gallery: [
      {
        src: images.collection5,
        label: "Toàn cảnh Midnight Silhouette",
        alt: "Full midnight velvet gown",
        price: "32,000,000",
      },
      {
        src: images.collection6,
        label: "Chi tiết Corset định hình",
        alt: "Internal corset construction detail",
        price: "32,000,000",
      },
      {
        src: images.collection4,
        label: "Độ bóng của nhung lụa Ý",
        alt: "Italian silk velvet sheen close-up",
        price: "32,000,000",
      },
      {
        src: images.collection2,
        label: "Góc nhìn từ phía sau",
        alt: "Back view with hidden zipper",
        price: "32,000,000",
      },
      {
        src: images.collection1,
        label: "Chuyển động của tà váy",
        alt: "Gown movement on runway",
        price: "32,000,000",
      },
    ],
    desc: "Sự kết hợp hoàn mỹ giữa chất liệu nhung lụa Ý cao cấp và kỹ thuật dựng form corset kiến trúc đỉnh cao.",
    author: "Elena Tran",
    author_img: images.collection,
    design_ideas: [
      "Khai thác vẻ đẹp huyền bí của màn đêm...",
      "Ứng dụng kỹ thuật dựng khung xương corset Pháp...",
    ],
  },
  {
    id: 3,
    title: "The Urban Tailor",
    slug: "the-urban-tailor",
    year: 2024,
    season: "Xuân/Hè",
    category: "Ready-to-wear",
    price: 4500000,
    thumbnail: images.collection4,
    gallery: [
      {
        src: images.collection4,
        label: "Oversized Blazer Look",
        alt: "Modern urban blazer full look",
        price: "4,500,000",
      },
      {
        src: images.collection3,
        label: "Chi tiết ve áo chuẩn Bespoke",
        alt: "Lapel tailoring detail",
        price: "32,000,000",
      },
      {
        src: images.collection1,
        label: "Túi ẩn thông minh",
        alt: "Hidden pocket construction",
        price: "32,000,000",
      },
      {
        src: images.collection2,
        label: "Chất liệu len thoáng khí",
        alt: "Breathable wool fabric texture",
        price: "32,000,000",
      },
      {
        src: images.collection6,
        label: "Phối đồ phong cách Menswear",
        alt: "Menswear style for women",
        price: "32,000,000",
      },
    ],
    desc: "Tái định nghĩa phong cách công sở hiện đại với thiết kế áo Blazer oversized được cắt may chuẩn xác.",
    author: "Minh Pham",
    author_img: images.collection,
    design_ideas: [
      "Giao thoa giữa menswear cổ điển và tự do hiện đại...",
      "Tập trung vào cấu trúc vai và công năng...",
    ],
  },
  {
    id: 4,
    title: "Ethereal Drape",
    slug: "ethereal-drape",
    year: 2023,
    season: "Xuân/Hè",
    category: "Couture",
    price: 18500000,
    thumbnail: images.collection1,
    gallery: [
      {
        src: images.collection1,
        label: "Vẻ đẹp thoát tục",
        alt: "Ethereal chiffon gown full view",
        price: "18,500,000",
      },
      {
        src: images.collection5,
        label: "Kỹ thuật Draping thủ công",
        alt: "Hand-draping silk chiffon detail",
        price: "32,000,000",
      },
      {
        src: images.collection3,
        label: "Hiệu ứng xếp lớp layer",
        alt: "Multi-layer silk layering effect",
        price: "32,000,000",
      },
      {
        src: images.collection2,
        label: "Độ xuyên thấu tinh tế",
        alt: "Sheer fabric artistic detail",
        price: "32,000,000",
      },
      {
        src: images.collection6,
        label: "Góc chụp nghệ thuật",
        alt: "Editorial artistic shot",
        price: "32,000,000",
      },
    ],
    desc: "Sử dụng kỹ thuật draping bậc thầy trực tiếp trên mannequin với chất liệu lụa Chiffon tơ tằm cao cấp.",
    author: "Julianne Le",
    author_img: images.brand,
    design_ideas: [
      "Mô phỏng sự chuyển động của dòng chảy...",
      "Khai thác đặc tính xuyên thấu của lụa...",
    ],
  },
  {
    id: 5,
    title: "Heritage Weave",
    slug: "heritage-weave",
    year: 2023,
    season: "Thu/Đông",
    category: "Ready-to-wear",
    price: 6800000,
    thumbnail: images.collection5,
    gallery: [
      {
        src: images.collection5,
        label: "Chất liệu Tweed di sản",
        alt: "Heritage tweed jacket look",
        price: "6,800,000",
      },
      {
        src: images.collection2,
        label: "Bề mặt vải dệt tay",
        alt: "Hand-woven textile texture",
        price: "32,000,000",
      },
      {
        src: images.collection1,
        label: "Chi tiết nút kim loại hiện đại",
        alt: "Modern metallic button detail",
        price: "32,000,000",
      },
      {
        src: images.collection3,
        label: "Giao thoa văn hóa",
        alt: "Cultural heritage meets street style",
        price: "32,000,000",
      },
      {
        src: images.collection4,
        label: "Form dáng trẻ trung",
        alt: "Youthful silhouette view",
        price: "32,000,000",
      },
    ],
    desc: "Sự kết hợp độc đáo giữa chất liệu Tweed dệt tay truyền thống và các chi tiết kim loại hiện đại.",
    author: "Quoc Nguyen",
    author_img: images.brand,
    design_ideas: [
      "Tôn vinh bàn tay nghệ nhân làng nghề...",
      "Tạo tương phản giữa kim loại và vải dệt...",
    ],
  },
  {
    id: 6,
    title: "Avant-Garde Structure",
    slug: "avant-garde-structure",
    year: 2022,
    season: "Thu/Đông",
    category: "Couture",
    price: 45000000,
    thumbnail: images.collection3,
    gallery: [
      {
        src: images.collection3,
        label: "Cấu trúc không gian 3D",
        alt: "3D structural avant-garde piece",
        price: "45,000,000",
      },
      {
        src: images.collection2,
        label: "Vải kỹ thuật công nghệ mới",
        alt: "High-tech fabric close-up",
        price: "45,000,000",
      },
      {
        src: images.collection1,
        label: "Góc nhìn vị lai (Futuristic)",
        alt: "Futuristic fashion silhouette",
        price: "45,000,000",
      },
      {
        src: images.collection6,
        label: "Thử nghiệm hình khối",
        alt: "Geometric shape experimentation",
        price: "45,000,000",
      },
      {
        src: images.collection5,
        label: "Chi tiết dựng form cứng",
        alt: "Rigid structure construction detail",
        price: "45,000,000",
      },
    ],
    desc: "Một tác phẩm nghệ thuật mang tính thể nghiệm cao với cấu trúc không gian 3D phức tạp.",
    author: "Victor Hoang",
    author_img: images.brand,
    design_ideas: [
      "Phá bỏ quy chuẩn phom dáng truyền thống...",
      "Ứng dụng công nghệ in 3D và vải bóng...",
    ],
  },
];

// Data cho các nút Filter (Để map ra thanh menu như ảnh)
export const FILTER_OPTIONS = {
  years: ["Tất cả", 2024, 2023, 2022, 2021, 2020],
  seasons: ["Xuân/Hè", "Thu/Đông"],
  categories: ["Couture", "Ready-to-wear"],
};
