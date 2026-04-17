import CategoryServiceHeader from "./components/CategoryServiceHeader/CategoryServiceHeader";
import CategoryServiceItem from "./components/CategoryServiceItem/CategoryServiceItem";
import { CategoryServiceMockData } from "../../data";

function CategoryService() {
  return (
    <div className="py-(--padding-y) px-(--padding-x) bg-[#f6f3f2]">
      <CategoryServiceHeader />

      <div className="grid grid-cols-3 gap-12 [&>div:nth-child(3n-1)]:translate-y-12">
        {CategoryServiceMockData.map((item) => (
          <CategoryServiceItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CategoryService;
