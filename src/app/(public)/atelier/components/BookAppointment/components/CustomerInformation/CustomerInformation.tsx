"use client";
import { useState } from "react";
import { ArtistMockData } from "../../../ArtisanList/data";
import { CategoryServiceMockData } from "../../../../data";

function CustomerInformation() {
  const [selectedId, setSelectedId] = useState(ArtistMockData[0]?.id);

  return (
    <div>
      <h2 className="text-4xl font-bold tracking-tighter uppercase mb-12">
        Thông Tin Khách Hàng
      </h2>

      <form action="" className="">
        <input
          className="w-full bg-transparent border-0 border-b outline-none border-[#b2b2b14d] py-4 text-[#323233] placeholder-[#c7c9c4] transition-all font-light"
          type="text"
          placeholder="Họ tên"
        />
        <div className="grid grid-cols-2 gap-8 mt-8">
          <input
            className="w-full bg-transparent border-0 border-b outline-none border-[#b2b2b14d] py-4 text-[#323233] placeholder-[#c7c9c4] transition-all font-light"
            type="Email"
            placeholder="Email"
          />
          <input
            className="w-full bg-transparent border-0 border-b outline-none border-[#b2b2b14d] py-4 text-[#323233] placeholder-[#c7c9c4] transition-all font-light"
            type="tel"
            placeholder="Số điện thoại"
          />
        </div>

        <div className="mt-8">
          <label
            htmlFor="service-select"
            className="text-xs uppercase tracking-widest font-bold block mb-4"
          >
            Chọn Dịch vụ
          </label>

          <div className="relative">
            <select
              id="service-select"
              className="w-full bg-transparent border border-stone-200 py-3 px-4 text-xs uppercase tracking-widest focus:outline-none focus:border-stone-500 appearance-none cursor-pointer transition-colors duration-300"
            >
              <option value="" className="text-stone-400">
                -- Chọn dịch vụ của bạn --
              </option>
              {CategoryServiceMockData.map((item) => (
                <option key={item.id} value={item.id} className="py-2">
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-8">
          <span className="text-xs uppercase tracking-widest font-bold block mb-4">
            Chọn Chuyên Gia
          </span>

          <div className="flex gap-2">
            {ArtistMockData.map((item) => {
              const isSelected = selectedId === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`flex flex-col flex-1 text-center cursor-pointer border py-4 p-4 transition-all 
                    ${isSelected ? "border-(--primary-color) bg-[#f0ede8]" : "hover:bg-[#f6f3f2]"}
                    `}
                >
                  <span className="text-sm font-medium block">
                    Nghệ nhân {item.name}
                  </span>
                  <span className="text-[10px] text-[#5f5f5f] block uppercase tracking-tighter mt-1">
                    {item.feature}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          <textarea
            className="w-full bg-transparent border-0 border-b border-[#b2b2b14d] py-4 text-[#323233] outline-none placeholder-[#c7c9c4] transition-all font-light resize-none"
            placeholder="Yêu cầu đặc biệt (Số đo sơ bộ, mong muốn thiết kế...)"
            rows={4}
          ></textarea>

          <button
            className="w-full bg-primary text-[#faf7f6] py-6 text-sm uppercase tracking-[0.3em] font-bold hover:bg-[#535252] transition-all mt-8 cursor-pointer"
            type="submit"
          >
            Xác Nhận Đặt Lịch
          </button>
        </div>
      </form>
    </div>
  );
}

export default CustomerInformation;
