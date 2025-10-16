import React from "react";
import { Home, Users, ShoppingBag, DollarSign, LogOut, Book } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-blue-700 text-white w-64 h-screen p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-8 tracking-wide">ShopOwner</h1>

        <nav className="space-y-4">
          <Link
            to="/"
            className="flex items-center gap-3 p-2 hover:bg-blue-600 rounded-lg transition"
          >
            <Home size={20} /> Dashboard
          </Link>

          <Link
            to="/customers"
            className="flex items-center gap-3 p-2 hover:bg-blue-600 rounded-lg transition"
          >
            <Users size={20} /> Customers
          </Link>
          <Link
            to="/sales"
            className="flex items-center gap-3 p-2 hover:bg-blue-600 rounded-lg transition"
          >
            <DollarSign size={20} /> Sales
          </Link>
          <Link
            to="/khata"
            className="flex items-center gap-3 p-2 hover:bg-blue-600 rounded-lg transition"
          >
            <Book size={20} /> Khata
          </Link>
        </nav>
      </div>

      <button className="flex items-center gap-2 text-red-200 hover:text-white hover:bg-red-600 p-2 rounded-lg transition">
        <LogOut size={20} /> Logout
      </button>
    </div>
  );
};

export default Sidebar;
