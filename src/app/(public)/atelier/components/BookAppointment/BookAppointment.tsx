import Book from "./components/Book/Book";
import CustomerInformation from "./components/CustomerInformation/CustomerInformation";

function BookAppointment() {
  return (
    <div className="py-(--padding-y) px-(--padding-x)">
      <div className="grid grid-cols-2 gap-12">
        <Book />
        <CustomerInformation />
      </div>
    </div>
  );
}

export default BookAppointment;
