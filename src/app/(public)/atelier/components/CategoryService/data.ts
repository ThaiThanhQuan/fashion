import { images } from "@/src/assets/images";
import { StaticImageData } from "next/image";

export interface ICategoryServiceItem {
  id: string;
  title: string;
  desc: string;
  label: string;
  price?: number;
  thumbnail: string | StaticImageData;
}

export const CategoryServiceMockData: ICategoryServiceItem[] = [
  {
    id: "1",
    title: "Đo May Thủ Công",
    desc: "Trải nghiệm may đo hoàn toàn cá nhân hóa, từ khâu chọn vải thượng hạng đến giai đoạn hoàn thiện tinh xảo nhất.",
    label: "Khởi Điểm",
    price: 15000000,
    thumbnail: images.category1,
  },
  {
    id: "2",
    title: "Tư Vấn Phong Cách Cá Nhân",
    desc: "Xây dựng tủ đồ vượt thời gian với sự hướng dẫn của các chuyên gia định hình phong cách hàng đầu của chúng tôi.",
    label: "Mỗi Buổi",
    price: 5000000,
    thumbnail: images.category2,
  },
  {
    id: "3",
    title: "Phục Chế Trang Phục Lưu Trữ",
    desc: "Hồi sinh những món đồ di sản với kỹ thuật bảo tồn chuyên sâu, giữ trọn giá trị lịch sử và thẩm mỹ của trang phục.",
    label: "Định Giá Riêng",
    thumbnail: images.category3,
  },
];
