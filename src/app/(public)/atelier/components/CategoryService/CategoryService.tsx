import CategoryServiceHeader from "./components/CategoryServiceHeader/CategoryServiceHeader";
import CategoryServiceItem from "./components/CategoryServiceItem/CategoryServiceItem";
import { IService } from "@/src/types";

interface IProps{
  services: IService[]
}

function CategoryService({services}: IProps) {
  return (
    <div className="py-(--padding-y) px-(--padding-x) bg-[#f6f3f2]">
      <CategoryServiceHeader />

      <div className="grid grid-cols-3 gap-12 [&>div:nth-child(3n-1)]:translate-y-12">
        {services.map((service) => (
          <CategoryServiceItem key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default CategoryService;
