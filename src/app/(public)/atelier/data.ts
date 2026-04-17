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
  price?: number;
}

export interface ITimelineItem {
  label: string;
  value: string;
}

export interface ICategoryServiceItem {
  id: string;
  title: string;
  sub_title: string;
  slug: string;
  desc: string;
  detailedDesc: string;
  label: string;
  price: number;
  thumbnail: string | StaticImageData;

  feature_value: string;
  feature_label: string;

  quote: string;
  highlights: string[];
  steps: IServiceStep[];
  investment: IInvestmentItem[];
  timeline: ITimelineItem[];

  artist: IArtistItem;
}

export const CategoryServiceMockData: ICategoryServiceItem[] = [
  {
    id: "1",
    title: "Đo May Thủ Công",
    sub_title: "Bespoke Tailoring",
    feature_value: "50+",
    feature_label:
      "Giờ làm việc thủ công miệt mài cho mỗi bộ trang phục độc bản.",
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
      { item: "Lounge Suit (2-piece)", price: 45000 },
      { item: "Three-piece Suit", price: 58000 },
      { item: "Bespoke Shirt", price: 65000 },
      { item: "Overcoat", price: 750000 },
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
    sub_title: "Personal Styling",
    feature_value: "10+",
    feature_label: "Giờ phân tích và định hình phong cách cá nhân chuyên sâu.",
    slug: "tu-van-phong-cach-ca-nhan",
    desc: "Xây dựng tủ đồ vượt thời gian với sự hướng dẫn của các chuyên gia định hình phong cách hàng đầu của chúng tôi.",
    label: "Mỗi Buổi",
    price: 5000000,
    thumbnail: images.category2,

    quote:
      "Phong cách không phải là thứ bạn mặc, mà là cách bạn kể câu chuyện của chính mình.",

    detailedDesc:
      "Dịch vụ tư vấn phong cách cá nhân tập trung vào việc khám phá bản sắc riêng của mỗi khách hàng. Từ phân tích hình thể, màu sắc phù hợp cho đến xây dựng wardrobe capsule, chúng tôi giúp bạn tối ưu hoá tủ đồ mà vẫn giữ được dấu ấn cá nhân.",

    highlights: [
      "Phân tích hình thể & màu sắc cá nhân",
      "Xây dựng wardrobe capsule",
      "Định hướng phong cách dài hạn",
    ],

    steps: [
      {
        no: "01",
        title: "Khảo sát cá nhân",
        content:
          "Tìm hiểu phong cách sống, môi trường làm việc và gu thẩm mỹ của khách hàng.",
      },
      {
        no: "02",
        title: "Phân tích & định hình",
        content:
          "Đánh giá hình thể, tone da và đề xuất phong cách phù hợp nhất.",
      },
      {
        no: "03",
        title: "Xây dựng tủ đồ",
        content:
          "Đề xuất danh sách trang phục thiết yếu và cách phối đồ linh hoạt.",
      },
      {
        no: "04",
        title: "Theo dõi & tinh chỉnh",
        content:
          "Đồng hành cùng khách hàng để điều chỉnh phong cách theo thời gian.",
      },
    ],

    investment: [
      { item: "Buổi tư vấn cơ bản", price: 500000 },
      { item: "Gói 3 buổi chuyên sâu", price: 1350000 },
      { item: "Wardrobe Audit tại nhà", price: 8000000 },
    ],

    timeline: [
      { label: "Thời lượng mỗi buổi", value: "2 - 3 Giờ" },
      { label: "Số buổi khuyến nghị", value: "2 - 4 Buổi" },
      { label: "Hỗ trợ sau tư vấn", value: "30 Ngày" },
    ],

    artist: {
      id: "2",
      name: "Thái Thanh Quân",
      feature: "Haute Couture Expert",
      experience: "12 năm kinh nghiệm",
      expertise: "Personal Styling & Wardrobe Design",
      desc: "Nghệ nhân đứng sau những bộ váy dạ hội lộng lẫy, nổi tiếng với khả năng xử lý các chất liệu lụa và ren cực khó.",
      thumbnail: images.collection,
    },
  },
  {
    id: "3",
    title: "Phục Chế Trang Phục Lưu Trữ",
    sub_title: "Garment Restoration",
    feature_value: "100+",
    feature_label:
      "Giờ phục chế thủ công để hồi sinh từng chi tiết nguyên bản.",
    slug: "phuc-che-trang-phuc-luu-tru",
    desc: "Hồi sinh những món đồ di sản với kỹ thuật bảo tồn chuyên sâu, giữ trọn giá trị lịch sử và thẩm mỹ của trang phục.",
    label: "Định Giá Riêng",
    thumbnail: images.category3,
    price: 5000000,
    quote:
      "Mỗi vết sờn đều mang ký ức, và nhiệm vụ của chúng tôi là giữ cho ký ức ấy sống mãi.",

    detailedDesc:
      "Dịch vụ phục chế tập trung vào việc bảo tồn nguyên bản cấu trúc và chất liệu của trang phục. Chúng tôi sử dụng các kỹ thuật thủ công truyền thống kết hợp với kiến thức hiện đại để đảm bảo mỗi chi tiết được phục hồi một cách chính xác và tinh tế nhất.",

    highlights: [
      "Phục hồi cấu trúc nguyên bản",
      "Sửa chữa bằng kỹ thuật thủ công",
      "Bảo tồn chất liệu quý hiếm",
    ],

    steps: [
      {
        no: "01",
        title: "Thẩm định",
        content:
          "Đánh giá tình trạng trang phục và xác định phương án phục chế phù hợp.",
      },
      {
        no: "02",
        title: "Lập kế hoạch",
        content:
          "Xây dựng quy trình phục chế chi tiết dựa trên chất liệu và cấu trúc.",
      },
      {
        no: "03",
        title: "Thực hiện phục chế",
        content:
          "Tiến hành sửa chữa, gia cố và tái tạo các chi tiết bị hư hỏng.",
      },
      {
        no: "04",
        title: "Hoàn thiện & bảo quản",
        content:
          "Hoàn thiện sản phẩm và hướng dẫn khách hàng cách bảo quản lâu dài.",
      },
    ],

    investment: [
      { item: "Phục chế cơ bản", price: 1000000 },
      { item: "Phục chế chuyên sâu", price: 2500000 },
      { item: "Phục chế di sản cao cấp" },
    ],

    timeline: [
      { label: "Thời gian xử lý", value: "4 - 10 Tuần" },
      { label: "Mức độ can thiệp", value: "Tuỳ tình trạng" },
      { label: "Bảo hành phục chế", value: "12 Tháng" },
    ],

    artist: {
      id: "1",
      name: "Quân Thái",
      feature: "Master Tailor",
      experience: "20 năm kinh nghiệm",
      expertise: "Traditional Suit Structure",
      desc: "Chuyên gia về cấu trúc suit nam và kỹ thuật dựng form truyền thống từ các xưởng may danh tiếng tại Florence.",
      thumbnail: images.brand,
    },
  },
];
