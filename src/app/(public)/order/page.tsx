import OrderContent from "./components/OrderContent/OrderContent";
import OrderSummary from "./components/OrderSummary/OrderSummary";

function OrderPage() {
  return (
    <div className="grid grid-cols-12 gap-10 pt-2.5 container pb-(--padding-y)">
      <div className=" col-span-8">
        <OrderContent />
      </div>
      <div className="col-span-4">
        <OrderSummary />
      </div>
    </div>
  );
}

export default OrderPage;
