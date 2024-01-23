import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div id="analytics" className="w-full bg-white py-16 px-4">
      <div className="max-w-[1224px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={Laptop} alt="Laptop" className="w-full h-auto" />
        <div className="text-left">
          <p className="text-[#00df9a] text-xl font-bold">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Manage Data Analytics Centrally
          </h1>
          <p className="text-gray-500 mt-4">
            Centralized data analytics consolidates and oversees data processes
            from a central platform, streamlining collection, storage, and
            analysis. This approach fosters better decision-making,
            collaboration, and security, enabling organizations to derive
            maximum value from their data. It promotes a data-driven culture,
            fostering innovation and a competitive advantage.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded font-medium my-6 mx-auto px-3 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
