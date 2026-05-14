import { IArtist, IService } from "@/src/types";
import Book from "./components/Book/Book";
import CustomerInformation from "./components/CustomerInformation/CustomerInformation";

interface IProps {
  services: IService[]
  artists: IArtist[]
}

function BookAppointment({services, artists}: IProps) {

  return (
    <div className="py-(--padding-y) px-(--padding-x)">
      <div className="grid grid-cols-2 gap-12">
        <Book />
        <CustomerInformation 
            services={services}
            artists={artists}
        />
      </div>
    </div>
  );
}

export default BookAppointment;
