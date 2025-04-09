import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Lab_05/Logo.png";
import Squares from "../../assets/Lab_05/Squares1.png";
import Group1 from "../../assets/Lab_05/Group1.png";
import Groups from "../../assets/Lab_05/Groups.png";
import Project from "../../assets/Lab_05/Folder.png";
import Analytics from "../../assets/Lab_05/Analytics.png";
import Chat from "../../assets/Lab_05/Chat.png";
import Code from "../../assets/Lab_05/Code.png";

const Sidebar = () => {
  const getNavLinkClass = ({ isActive }) => {
    return isActive
      ? "flex font-bold items-center mt-5 p-3 bg-pink-500 text-white rounded-xl"
      : "flex font-bold items-center mt-5 p-3 hover:bg-gray-100 rounded-xl";
  };

  return (
    <aside className="w-1/5 bg-white p-6 shadow-md">
      <img src={Logo} alt="Logo" />
      <nav className="mt-6 space-y-4">
        <NavLink to="/" className={getNavLinkClass} end>
          <img src={Squares} alt="Dashboard icon" className="mr-2" />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/projects" className={getNavLinkClass}>
          <img src={Project} alt="Projects icon" className="mr-2" />
          <span>Projects</span>
        </NavLink>

        <NavLink to="/teams" className={getNavLinkClass}>
          <img src={Groups} alt="Teams icon" className="mr-2" />
          <span>Teams</span>
        </NavLink>

        <NavLink to="/analytics" className={getNavLinkClass}>
          <img src={Analytics} alt="Analytics icon" className="mr-2" />
          <span>Analytics</span>
        </NavLink>

        <NavLink to="/messages" className={getNavLinkClass}>
          <img src={Chat} alt="Messages icon" className="mr-2" />
          <span>Messages</span>
        </NavLink>

        <NavLink to="/integrations" className={getNavLinkClass}>
          <img src={Code} alt="Integrations icon" className="mr-2" />
          <span>Integrations</span>
        </NavLink>

        <div className="mt-8">
          <img src={Group1} alt="Group banner" className="w-full" />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;