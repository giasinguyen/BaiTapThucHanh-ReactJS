import React from "react";
import Logo from "../../assets/Lab_05/Logo.png";
import Squares from "../../assets/Lab_05/Squares1.png";
import Group1 from "../../assets/Lab_05/Group1.png";
import Groups from "../../assets/Lab_05/Groups.png";
import Project from "../../assets/Lab_05/Folder.png";
import Analytics from "../../assets/Lab_05/Analytics.png";
import Chat from "../../assets/Lab_05/Chat.png";
import Code from "../../assets/Lab_05/Code.png";

const Sidebar = () => {
    return (
        <aside className="w-1/5 bg-white p-6 shadow-md">
            <img src={Logo} alt="Logo" />
            <nav className="mt-6 space-y-4">
                <div className="flex font-bold items-center mt-5 p-3 bg-pink-500 text-white rounded-xl">
                    <img src={Squares} alt="Dashboard icon" />
                    <a href="#" className="block font-semibold text-white">Dashboard</a>
                </div>
                <div className="flex font-bold items-center mt-5 p-3">
                    <img src={Project} alt="Projects icon" />
                    <a href="#" className="block text-gray-700">Projects</a>
                </div>
                <div className="flex font-bold items-center mt-5 p-3">
                    <img src={Groups} alt="Teams icon" />
                    <a href="#" className="block text-gray-700">Teams</a>
                </div>
                <div className="flex font-bold items-center mt-5 p-3">
                    <img src={Analytics} alt="Analytics icon" />
                    <a href="#" className="block text-gray-700">Analytics</a>
                </div>
                <div className="flex font-bold items-center mt-5 p-3">
                    <img src={Chat} alt="Messages icon" />
                    <a href="#" className="block text-gray-700">Messages</a>
                </div>
                <div className="flex font-bold items-center mt-5 p-3">
                    <img src={Code} alt="Integrations icon" />
                    <a href="#" className="block text-gray-700">Integrations</a>
                </div>
                <img src={Group1} alt="Group banner" />
            </nav>
        </aside>
    );
};

export default Sidebar;