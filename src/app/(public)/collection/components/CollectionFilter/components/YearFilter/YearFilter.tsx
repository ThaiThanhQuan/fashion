"use client";

interface IProps {
    years: string[];
    value?: string;
    onFilter: (year?: string) => void;
}

function YearFilter({ value, onFilter, years }: IProps) {
    return (
        <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#5f5f5f] mb-4 block">
                Năm
            </p>

            <div className="flex gap-6">
                {years.map((year, index) => (
                    <button
                        type="button"
                        key={index}
                        onClick={() =>
                            onFilter(year === "Tất cả" ? undefined : year)
                        }
                        className={`text-sm font-medium transition-colors duration-300 ${
                            (year === "Tất cả" && !value) || value === year
                                ? "text-(--primary-color)"
                                : "text-[#323233] hover:text-(--primary-color)/70"
                        }`}
                    >
                        {year}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default YearFilter;