import React from "react";
import Squares from "../../assets/Lab_05/Squares1.png";
import Search from "../../assets/Lab_05/Search.png";
import Ring from "../../assets/Lab_05/Ring.png";
import Question from "../../assets/Lab_05/Questions.png";
import Avatar1 from "../../assets/Lab_05/Avatar1.png";

const Header = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold text-pink-500">Dashboard</h2>
      <div className="absolute right-0 flex items-center">
        <div className="relative w-60">
          <input
            type="text"
            className="w-full pl-3 pr-10 py-2 bg-gray-200 rounded-xl"
            placeholder="Search..."
          />
          <img
            src={Search}
            alt="Search icon"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4"
          />
        </div>
        <div className="flex items-center ml-4">
          <img
            src={Ring}
            alt="Notification icon"
            className="h-6 w-6 mx-2 cursor-pointer"
          />
          <img
            src={Question}
            alt="Help icon"
            className="h-6 w-6 mx-2 cursor-pointer"
          />
          <img
            src={Avatar1}
            alt="Profile icon"
            className="h-8 w-8 ml-2 cursor-pointer rounded-full"
          />
        </div>
      </div>
      <div className="flex font-bold items-center mt-5">
        <img src={Squares} alt="Overview icon" />
        <h3>Overview</h3>
      </div>
    </div>
  );
};

export default Header;
