import React from "react";
import { Bell, Search } from "lucide-react";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow px-6 py-3">
      <div className="flex items-center gap-2 border rounded-lg px-3 py-1 w-80">
        <Search className="text-gray-500" size={18} />
        <input
          type="text"
          placeholder="Search here..."
          className="w-full outline-none text-sm"
        />
      </div>

      <div className="flex items-center gap-6">
        <Bell className="text-gray-700 cursor-pointer" size={20} />

        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-semibold">Admin</p>
            <p className="text-xs text-gray-500">Shop Owner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
