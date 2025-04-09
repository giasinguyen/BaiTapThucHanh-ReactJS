import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import Header from "../components/Dashboard/Header";
const ProjectsPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 bg-white">
        <Header />
        <div className="mt-4">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Projects</h3>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;