"use client";

import { ISeason } from "@/src/types";

interface IProps {
    seasons: ISeason[];
    value?: string;
    onFilter: (seasonId?: string) => void;
}

function SeasonFilter({ seasons, value, onFilter }: IProps) {
    return (
        <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#5f5f5f] mb-4 block">
                Mùa
            </p>

            <div className="flex gap-6">
                <button
                    type="button"
                    onClick={() => onFilter(undefined)}
                    className={`text-sm font-medium transition-colors duration-300 ${
                        !value
                            ? "text-(--primary-color)"
                            : "text-[#323233] hover:text-(--primary-color)/70"
                    }`}
                >
                    Tất cả
                </button>

                {seasons.map((season) => (
                    <button
                        type="button"
                        key={season.id}
                        onClick={() => onFilter(season.id)}
                        className={`text-sm font-medium transition-colors duration-300 ${
                            value === season.id
                                ? "text-(--primary-color)"
                                : "text-[#323233] hover:text-(--primary-color)/70"
                        }`}
                    >
                        {season.name}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SeasonFilter;