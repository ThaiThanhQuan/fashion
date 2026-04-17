import { images } from "@/src/assets/images";
import { StaticImageData } from "next/image";
import { IArtistItem } from "./components/ArtisanList/data";

export interface IServiceStep {
  no: string;
  title: string;
  content: string;
}

export interface IInvestmentItem {
  item: string;
  price: string;
}

export interface ITimelineItem {
  label: string;
  value: string;
}

export interface ICategoryServiceItem {
  id: string;
  title: string;
  slug: string;
  desc: string;
  detailedDesc?: string;
  label: string;
  price?: number;
  thumbnail: string | StaticImageData;

  quote?: string;
  highlights?: string[];
  steps?: IServiceStep[];
  investment?: IInvestmentItem[];
  timeline?: ITimelineItem[];

  artist: IArtistItem;
}

export const CategoryServiceMockData: ICategoryServiceItem[] = [
  {
    id: "1",
    title: "Đo May Thủ Công",
    slug: "do-may-thu-cong",
    desc: "Kỹ nghệ may đo thủ công thuần túy, nơi mỗi đường kim mũi chỉ là một lời tuyên ngôn về phong thái và sự hoàn mỹ tuyệt đối.",
    label: "Khởi Điểm",
    price: 15000000,
    thumbnail: images.category1,
    // Thêm câu Quote từ ảnh
    quote:
      "Một bộ suit đẹp không chỉ để mặc, mà để kể câu chuyện về người đàn ông bên trong nó.",
    // Thêm nội dung chi tiết (ảnh 2)
    detailedDesc:
      "Chúng tôi từ chối sự can thiệp của máy móc công nghiệp. Từng chi tiết nhỏ nhất như khuy áo được khâu tay thủ công (Milanese buttonhole), hay lớp lót vải canh (canvas) được dựng tỉ mỉ để tạo nên cấu trúc áo hoàn hảo theo thời gian.",
    highlights: [
      "50+ Giờ làm việc thủ công",
      "Khâu tay Milanese buttonhole",
      "Lớp lót vải canh (canvas) dựng tỉ mỉ",
    ],

    // Thêm Quy trình (ảnh 3)
    steps: [
      {
        no: "01",
        title: "Tư vấn & Chất liệu",
        content:
          "Gặp gỡ chuyên gia để chọn lựa trong hơn 3,000 mẫu vải cao cấp và thảo luận về phom dáng.",
      },
      {
        no: "02",
        title: "Lấy số đo",
        content:
          "Hơn 30 thông số hình thể được ghi lại tỉ mỉ để tạo ra bản rập (paper pattern) độc nhất.",
      },
      {
        no: "03",
        title: "Buổi thử đầu tiên",
        content:
          "Thử áo 'basted fit' với khung vải thô để tinh chỉnh sự cân đối trước khi hoàn thiện.",
      },
      {
        no: "04",
        title: "Hoàn thiện",
        content:
          "Tỉ mỉ khâu tay những chi tiết cuối cùng và bàn giao tác phẩm sau 4-6 tuần.",
      },
    ],

    // Thêm Chi phí & Thời gian (ảnh 5)
    investment: [
      { item: "Lounge Suit (2-piece)", price: "Từ 45.000.000đ" },
      { item: "Three-piece Suit", price: "Từ 58.000.000đ" },
      { item: "Bespoke Shirt", price: "Từ 6.500.000đ" },
      { item: "Overcoat", price: "Từ 75.000.000đ" },
    ],
    timeline: [
      { label: "Sản xuất tiêu chuẩn", value: "6 - 8 Tuần" },
      { label: "Số buổi thử áo", value: "3 - 4 Lần" },
      { label: "Lưu trữ bản rập", value: "Trọn đời" },
    ],

    artist: {
      id: "1",
      name: "Master Antonio V.",
      feature: "Nghệ Nhân Trưởng",
      experience: "40 năm kinh nghiệm",
      expertise: "Soft Neapolitan Shoulder",
      desc: "Với hơn 40 năm kinh nghiệm tại các nhà may danh tiếng ở Naples, Antonio mang đến sự pha trộn hoàn hảo giữa truyền thống Ý và tinh thần hiện đại. Ông trực tiếp giám sát từng bộ Bespoke tại Atelier.",
      thumbnail: images.collection,
    },
  },
  {
    id: "2",
    title: "Tư Vấn Phong Cách Cá Nhân",
    slug: "tu-van-phong-cach-ca-nhan",
    desc: "Xây dựng tủ đồ vượt thời gian với sự hướng dẫn của các chuyên gia định hình phong cách hàng đầu của chúng tôi.",
    label: "Mỗi Buổi",
    price: 5000000,
    thumbnail: images.category2,
    artist: {
      id: "2",
      name: "Thái Thanh Quân",
      feature: "Haute Couture Expert",
      desc: "Nghệ nhân đứng sau những bộ váy dạ hội lộng lẫy, nổi tiếng với khả năng xử lý các chất liệu lụa và ren cực khó.",
      thumbnail: images.collection,
    },
  },
  {
    id: "3",
    title: "Phục Chế Trang Phục Lưu Trữ",
    slug: "phuc-che-trang-phuc-luu-tru",
    desc: "Hồi sinh những món đồ di sản với kỹ thuật bảo tồn chuyên sâu, giữ trọn giá trị lịch sử và thẩm mỹ của trang phục.",
    label: "Định Giá Riêng",
    thumbnail: images.category3,
    artist: {
      id: "1",
      name: "Quân Thái",
      feature: "Master Tailor",
      desc: "Chuyên gia về cấu trúc suit nam và kỹ thuật dựng form truyền thống từ các xưởng may danh tiếng tại Florence.",
      thumbnail: images.brand,
    },
  },
];
