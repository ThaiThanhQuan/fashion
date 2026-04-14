import Image from "next/image";
import { ArtistMockData } from "../../data";

function ArtisanList() {
  return (
    <div className="py-(--padding-y) px-(--padding-x) bg-[#f6f3f2]">
      <h2 className="text-5xl font-bold tracking-tighter uppercase mb-6">
        Đội Ngũ Nghệ Nhân
      </h2>
      <div className="max-w-2xl mb-24">
        <p className="text-[#5f5f5f] font-light leading-relaxed">
          Mỗi bộ trang phục tại Digital Couture là thành quả của hàng trăm giờ
          lao động miệt mài, được thực hiện bởi những nghệ nhân có trên 20 năm
          kinh nghiệm trong ngành may mặc cao cấp.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-10 [&>div:nth-child(even)]:mt-24">
        {ArtistMockData.map((item) => (
          <div key={item.id} className="flex gap-10">
            <div className="relative aspect-3/4 w-full">
              <Image
                src={item.thumbnail}
                fill
                alt=""
                className="object-cover "
              />
            </div>
            <div className="pt-8">
              <span className="text-(--primary-color) text-xs font-bold tracking-widest uppercase">
                {item.feature}
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4">{item.name}</h3>
              <p className="text-[#5f5f5f] text-sm font-light leading-loose">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtisanList;
