import { images } from "@/src/assets/images";

export interface IFooterNavItem {
  id: string;
  title: string;
  label1: string;
  label2: string;
  label3?: string;
  href?: string;
}

export const FooterNavMockData: IFooterNavItem[] = [
  {
    id: "1",
    title: "studio",
    label1: "Sự bền vững",
    label2: "Vận chuyển",
    label3: "Đổi trả",
  },
  {
    id: "2",
    title: "Kết nối",
    label1: "Instagram",
    label2: "Facebook",
    label3: "Liên hệ",
  },
  {
    id: "3",
    title: "Pháp lý",
    label1: "Bảo mật",
    label2: "Điều khoản",
  },
];
