import CheckoutSteps from "./components/CheckoutSteps/CheckoutSteps";
import CheckoutSummary from "./components/CheckoutSummary/CheckoutSummary";
import ShippingForm from "./components/ShippingForm/ShippingForm";

function CheckOutPage() {
  return (
    <div className="grid grid-cols-2 gap-16 container py-12">
      <div className="space-y-12">
        <CheckoutSteps />
        <ShippingForm />
      </div>
      <CheckoutSummary />
    </div>
  );
}

export default CheckOutPage;
