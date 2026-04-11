import { Handbag, Heart, User } from "lucide-react";

function Actions() {
  return (
    <div className="flex items-center gap-6">
      {/* Search Bar */}
      <div className="relative group">
        <input
          type="search"
          placeholder="SEARCH"
          className="w-48 h-8 border-b border-gray-300 focus:border-black outline-none text-[11px] tracking-[0.2em] transition-all placeholder:text-gray-400"
        />
      </div>

      {/* Icons Group */}
      <div className="flex items-center gap-5 text-gray-700 ">
        <button className="hover:text-black transition-colors cursor-pointer">
          <Heart size={20} strokeWidth={1.5} />
        </button>

        <button className="hover:text-black transition-colors cursor-pointer">
          <Handbag size={20} strokeWidth={1.5} />
        </button>

        <button className="hover:text-black transition-colors cursor-pointer">
          <User size={20} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}

export default Actions;
