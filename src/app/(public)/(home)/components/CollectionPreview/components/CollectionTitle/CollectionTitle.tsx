import Link from "next/link";

function CollectionTitle() {
  return (
    <div className="flex items-center justify-between gap-4 mt-8">
      <div>
        <span className="text-[12px] text-(--primary-color) mb-2 font-medium uppercase tracking-[0.3em]">
          Chiến dịch 01
        </span>
        <h3 className="text-[36px] font-bold ">Xuân/Hè 2026</h3>
      </div>

      <div>
        <Link
          href="/collections"
          className="font-light tracking-widest uppercase text-[12px] pb-1 border-b border-[#323233]/20 hover:border-black"
        >
          Khám phá
        </Link>
      </div>
    </div>
  );
}

export default CollectionTitle;
