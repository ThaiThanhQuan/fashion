"use client";

import ActionIcons from "./components/ActionIcons/ActionIcons";
import SearchBar from "./components/SearchBar/SearchBar";
import UserDropdown from "./components/UserDropdown/UserDropdown";

function Actions() {
  return (
    <div className="flex items-center gap-6">
      <SearchBar />

      <div className="flex items-center gap-5 text-gray-700">
        <ActionIcons />
        <UserDropdown />
      </div>
    </div>
  );
}

export default Actions;