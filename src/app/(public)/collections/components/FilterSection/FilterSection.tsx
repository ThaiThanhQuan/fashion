import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import PriceRange from "./components/PriceRange/PriceRange";
import SizeSelector from "./components/SizeSelector/SizeSelector";

function FilterSection() {
  return (
    <>
      <CategoryFilter />
      <PriceRange />
      <SizeSelector />
    </>
  );
}

export default FilterSection;
