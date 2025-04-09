import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Lab_05/Logo.png";
import Squares from "../assets/Lab_05/Squares1.png";
import Group1 from "../assets/Lab_05/Group1.png";
import Groups from "../assets/Lab_05/Groups.png";
import Project from "../assets/Lab_05/Folder.png";
import Analytics from "../assets/Lab_05/Analytics.png";
import Chat from "../assets/Lab_05/Chat.png";
import Code from "../assets/Lab_05/Code.png";
import Search from "../assets/Lab_05/Search.png";
import Ring from "../assets/Lab_05/Ring.png";
import Question from "../assets/Lab_05/Questions.png";
import Avatar1 from "../assets/Lab_05/Avatar1.png";
const Dashboard = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            <aside className="w-1/5 bg-white p-6 shadow-md">
                <img src={Logo} alt="" />
                <nav className="mt-6 space-y-4">
                    <div className="flex font-bold items-center mt-5 p-3 bg-pink-500 text-white rounded-xl">
                        <img src={Squares} alt="" />
                        <a href="#" className="block font-semibold text-white">Dashboard</a>
                    </div>
                    <div className="flex font-bold items-center mt-5 p-3">
                        <img src={Project} alt="" />
                        <a href="#" className="block text-gray-700">Projects</a>
                    </div>
                    <div className="flex font-bold items-center mt-5 p-3">
                        <img src={Groups} alt="" />
                        <a href="#" className="block text-gray-700">Teams</a>
                    </div>
                    <div className="flex font-bold items-center mt-5 p-3">
                        <img src={Analytics} alt="" />
                        <a href="#" className="block text-gray-700">Analytics</a>
                    </div>
                    <div className="flex font-bold items-center mt-5 p-3">
                        <img src={Chat} alt="" />
                        <a href="#" className="block text-gray-700">Messages</a>
                    </div>
                    <div className="flex font-bold items-center mt-5 p-3">
                        <img src={Code} alt="" />
                        <a href="#" className="block text-gray-700">Integrations</a>
                    </div>
                    <img src={Group1} alt="" />
                </nav>
            </aside>

            <main className="flex-1 p-6 bg-white">
                <div>
                    <h2 className="text-4xl font-semibold text-pink-500">Dashboard</h2>
                    <div className="absolute bg-gray-200 rounded-xl right-0 w-80 h-8 flex items-center">
                        <input type="text" className="pl-8 pr-4 py-1 w-full rounded-md" placeholder="Search.." />
                        <img src={Search} alt="" className="absolute right-0 mr-2" />
                        <img src={Ring} alt="" className="ml-2" />
                        <img src={Question} alt="" className="ml-2" />
                        <img src={Avatar1} alt="" className="ml-2" />
                    </div>
                    <div className="flex font-bold items-center mt-5">
                        <img src={Squares} alt="" />
                        <h3>Overview</h3>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 my-6">
                    <div className="p-4 bg-pink-100 rounded-lg shadow">
                        <p className="text-gray-500">Turnover</p>
                        <h3 className="text-2xl font-bold">$92,405</h3>
                        <br />
                        <p className="text-1xl"><span className="text-green-500">5.39%</span> period of change</p>
                    </div>
                    <div className="p-4 bg-blue-100 rounded-lg shadow">
                        <p className="text-gray-500">Profit</p>
                        <h3 className="text-2xl font-bold">$32,218</h3>
                        <br />
                        <p className="text-1xl"><span className="text-green-500">5.39%</span> period of change</p>
                    </div>
                    <div className="p-4 bg-green-100 rounded-lg shadow">
                        <p className="text-gray-500">New Customers</p>
                        <h3 className="text-2xl font-bold">298</h3>
                        <br />
                        <p className="text-1xl"><span className="text-green-500">5.39%</span> period of change</p>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-700 mb-4">Detailed Report</h3>
                    <table className="w-full text-left border-collapse">
                        <thead>

                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;