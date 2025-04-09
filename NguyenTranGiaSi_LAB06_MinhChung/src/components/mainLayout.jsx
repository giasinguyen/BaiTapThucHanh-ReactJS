import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Dashboard/Sidebar";
import Header from "./Dashboard/Header";

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 bg-white">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;