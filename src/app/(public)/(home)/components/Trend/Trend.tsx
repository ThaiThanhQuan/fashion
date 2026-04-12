import TrendProduct from "./components/TrendProduct/TrendProduct";
import { TrendMockData } from "./data";

function Trend() {
  return (
    <div className=" py-(--padding-y) bg-[#f6f3f2]">
      <div className="container">
        <div className="mb-20">
          <h2 className="text-5xl font-extrabold tracking-tighter uppercase">
            Xu Hướng
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 px-(--padding-width)">
        {TrendMockData.map((item) => (
          <TrendProduct key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Trend;
