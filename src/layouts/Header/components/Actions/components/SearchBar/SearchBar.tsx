"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && query.trim()) {
          router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      }
  };


  return (
    <div className="relative group">
      <input
        type="search"
        value={query ?? ""}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="SEARCH"
        className="w-48 h-8 border-b border-gray-300 focus:border-black outline-none text-[11px] tracking-[0.2em] transition-all placeholder:text-gray-400"
      />
    </div>
  );
}

export default SearchBar;