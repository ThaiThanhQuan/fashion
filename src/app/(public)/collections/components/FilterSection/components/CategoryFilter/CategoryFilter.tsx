import Link from "next/link";
import { FilterMockData } from "../../data";

function CategoryFilter() {
  return (
    <div className="">
      <h3 className="text-xs font-headline font-bold uppercase tracking-[0.2em] mb-6 text-on-[#323233]">
        Danh mục
      </h3>

      <ul className="flex flex-col space-y-4 text-sm font-body">
        {FilterMockData.map((item) => (
          <li key={item.id}>
            <Link
              href={"#"}
              className=" text-on-surface hover:text-(--primary-color) "
            >
              {item.title}
              <span className="text-xs text-[#5f5f5f66] ml-1">
                ({item.quantity})
              </span>
            </Link>
          </li>
        ))}

        <li className="cursor-not-allowed opacity-35">Sản Phẩm Lưu Trữ</li>
      </ul>
    </div>
  );
}

export default CategoryFilter;
