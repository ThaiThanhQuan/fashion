import { IArtist } from "@/src/types";

interface IProps {
  artists: IArtist[]
};

export default function ArtistSelector({ artists}: IProps) {
  return (
    <div className="mt-8">
      <span className="text-xs uppercase tracking-widest font-bold block mb-4">
        Chọn Chuyên Gia
      </span>

      <div className="flex gap-2">
        {artists.map((artist) => {
          return (
            <div
              key={artist.id}
              className={`flex flex-col flex-1 text-center cursor-pointer border py-4 p-4 transition-all
                 "hover:bg-[#f6f3f2]"
              }`}
            >
              <span className="text-sm font-medium block">
                Nghệ nhân {artist.name}
              </span>
              <span className="text-[10px] text-[#5f5f5f] block uppercase tracking-tighter mt-1">
                {artist.feature}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}