import { IArtist } from "@/src/types";
import ArtistItem from "./components/ArtistItem/ArtistItem";

interface IProps {
  artists: IArtist[]
}

function ArtisanList({artists}: IProps) {
  console.log('artist:' ,artists)
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

      <div className="grid grid-cols-12 gap-10 [&>div:nth-child(even)]:mt-24">
        {artists.map((artist) => (
          <ArtistItem key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
}

export default ArtisanList;
