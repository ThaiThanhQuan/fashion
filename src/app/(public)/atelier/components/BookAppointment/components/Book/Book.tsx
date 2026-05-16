"use client";
import { Calendar } from "@/components/ui/calendar";
import { vi } from "date-fns/locale";

const TIME_SLOTS = ["09:00 AM", "11:00 AM", "08:00 PM", "04:00 PM"];

interface IProps {
    date: Date | undefined;
    time: string;
    onDateChange: (date: Date | undefined) => void;
    onTimeChange: (time: string) => void;
}

function Book({ date, time, onDateChange, onTimeChange }: IProps) {
  return (
    <div className="flex flex-col">
      <h2 className="mb-12 text-4xl font-bold tracking-tighter uppercase">
        lên lịch hẹn
      </h2>

      <div className="mb-8 ">
        <Calendar
          mode="single"
          selected={date}
          onSelect={onDateChange}
          disabled={{ before: new Date() }}
          className="bg-[#f0eded] text-center text-sm p-5 w-[50%] cursor-pointer"
          locale={vi}
          captionLayout="dropdown"
        />
      </div>
      <div>
        <h3 className="block mb-4 text-xs font-bold tracking-widest uppercase">
          Thời Gian Khả Dụng
        </h3>

        <div className="grid grid-cols-2 gap-3 ">
          {TIME_SLOTS.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => onTimeChange(slot)}
              className={`py-2 border transition-all duration-300 text-sm font-medium cursor-pointer 
                ${
                  time === slot
                    ? "bg-[#5f5e5e] text-white border-[#5f5e5e]"
                    : "bg-white text-[#323233] border-gray-200 hover:bg-[#eae8e7]"
                }`}
            >
              {slot}
            </button>
          ))}
        </div>

        {date && time && (
          <p className="mt-6 text-xs italic text-gray-500">
            Bạn đã chọn: {date.toLocaleDateString("vi-VN")} lúc {time}
          </p>
        )}
      </div>
    </div>
  );
}

export default Book;
