// src/pages/DashboardLayout.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <Topbar />

        {/* Nested Route Content (DashboardHome, Khata, etc.) */}
        <div className="p-6">
          <Outlet /> {/* 👈 This is where Khata or any nested page will load */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
