"use client";

import { useRouter } from "next/navigation";

function SearchBar() {
  const router = useRouter();

  return (
    <div className="relative group">
      <input
        type="search"
        placeholder="SEARCH"
        onFocus={() => router.push("/product")}
        className="w-48 h-8 border-b border-gray-300 focus:border-black outline-none text-[11px] tracking-[0.2em] transition-all placeholder:text-gray-400"
      />
    </div>
  );
}

export default SearchBar;