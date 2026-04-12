"use client";
import { Calendar } from "@/components/ui/calendar";
import { vi } from "date-fns/locale";
import { useState } from "react";

const TIME_SLOTS = ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"];

function Book() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string>("");
  return (
    <div className="flex flex-col">
      <h2 className="text-4xl font-bold tracking-tighter uppercase mb-12">
        lên lịch hẹn
      </h2>

      <div className="mb-8 ">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          // Vô hiệu hóa: những ngày trước hôm nay
          disabled={{ before: new Date() }}
          className="bg-[#f0eded] text-center text-sm p-5 w-[50%] cursor-pointer"
          locale={vi}
          captionLayout="dropdown"
        />
      </div>
      <div>
        <h3 className="text-xs uppercase tracking-widest font-bold block mb-4">
          Thời Gian Khả Dụng
        </h3>

        <div className="grid grid-cols-2 gap-3 ">
          {TIME_SLOTS.map((slot) => (
            <button
              key={slot}
              onClick={() => setTime(slot)}
              className={`py-4 border transition-all duration-300 text-sm font-medium cursor-pointer 
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
          <p className="mt-6 text-xs text-gray-500 italic">
            Bạn đã chọn: {date.toLocaleDateString("vi-VN")} lúc {time}
          </p>
        )}
      </div>
    </div>
  );
}

export default Book;
