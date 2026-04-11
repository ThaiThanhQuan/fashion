import NewArrivalsProduct from "./components/NewArrivalsProduct/NewArrivalsProduct";
import NewArrivalsTitle from "./components/NewArrivalsTitle/NewArrivalsTitle";
import { NewArrivalsMockData } from "./data";

function NewArrivals() {
  return (
    <div className="py-18">
      <NewArrivalsTitle />
      <div className="grid grid-cols-3 gap-8 px-12">
        {NewArrivalsMockData.map((item) => (
          <NewArrivalsProduct key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default NewArrivals;
