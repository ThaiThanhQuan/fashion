import Link from "next/link";
import { ProductMockData } from "../../../../data";

function CategoryFilter() {
  // 1. Đếm số lượng sản phẩm cho mỗi danh mục
  const categoryCounts = ProductMockData.reduce(
    (acc, item) => {
      const name = item.category_product;
      // Nếu đã có tên này thì +1, nếu chưa có thì gán bằng 1
      acc[name] = (acc[name] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  // 2. Lấy danh sách tên danh mục duy nhất (không trùng lặp)
  const uniqueCategoryNames = Object.keys(categoryCounts);

  return (
    <div className="">
      <h3 className="text-xs font-headline font-bold uppercase tracking-[0.2em] mb-6 text-[#323233]">
        Danh mục
      </h3>

      <ul className="flex flex-col space-y-4 text-sm font-body">
        {uniqueCategoryNames.map((name, index) => (
          <li key={index}>
            <Link
              href={"#"}
              className="text-on-surface hover:text-[#5f5e5e] transition-colors uppercase"
            >
              {name}
              <span className="text-xs text-[#5f5f5f66] ml-1">
                ({categoryCounts[name]}) {/* Hiển thị số lượng đã đếm */}
              </span>
            </Link>
          </li>
        ))}

        <li className="cursor-not-allowed opacity-35 text-xs uppercase tracking-widest pt-2">
          Sản Phẩm Lưu Trữ
        </li>
      </ul>
    </div>
  );
}
export default CategoryFilter;
