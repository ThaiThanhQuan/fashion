import AddressList from "./component/AddressList/AddressList";
import CoverageSection from "./component/CoverageSection/CoverageSection";
import AddressHeader from "./component/AddressHeader/AddressHeader";

function AddressPage() {
  return (
    <div className="p-16 bg-[#fcf9f8]">
      <AddressHeader />
      <div className="mb-5">
        <AddressList />
      </div>
      <CoverageSection />
    </div>
  );
}

export default AddressPage;
