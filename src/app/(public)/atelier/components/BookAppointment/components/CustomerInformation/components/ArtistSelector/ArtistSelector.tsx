import { IArtist } from "@/src/types";

interface IProps {
    artists: IArtist[];
    selected: string;
    onSelect: (id: string) => void;
}

export default function ArtistSelector({ artists, selected, onSelect }: IProps) {
    return (
        <div className="mt-8">
            <span className="block mb-4 text-xs font-bold tracking-widest uppercase">
                Chọn Chuyên Gia
            </span>
            <div className="flex gap-2">
                {artists.map((artist) => (
                    <div
                        key={artist.id}
                        onClick={() => onSelect(artist.id)}
                        className={`flex flex-col flex-1 text-center cursor-pointer border py-4 p-4 transition-all
                            ${selected === artist.id
                                ? "border-[#5f5e5e] bg-[#f6f3f2]"
                                : "hover:bg-[#f6f3f2]"
                            }`}
                    >
                        <span className="block text-sm font-medium">
                            Nghệ nhân {artist.name}
                        </span>
                        <span className="text-[10px] text-[#5f5f5f] block uppercase tracking-tighter mt-1">
                            {artist.feature}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}