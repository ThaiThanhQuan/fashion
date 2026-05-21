'use client'
import { IArtist, IService } from "@/src/types";
import Book from "./components/Book/Book";
import CustomerInformation from "./components/CustomerInformation/CustomerInformation";
import { useState } from "react";

interface IProps {
  services: IService[]
  artists: IArtist[]
}

function BookAppointment({services, artists}: IProps) {

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState('');

  return (
    <div className="py-(--padding-y) px-(--padding-x)">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
         <Book
              date={date}
              time={time}
              onDateChange={setDate}
              onTimeChange={setTime}
          />
        <CustomerInformation 
            services={services}
            artists={artists}
            date={date}
            time={time}
        />
      </div>
    </div>
  );
}

export default BookAppointment;
