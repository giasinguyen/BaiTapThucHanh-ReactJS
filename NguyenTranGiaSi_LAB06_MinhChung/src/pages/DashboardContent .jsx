import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Dashboard/Sidebar";
import Header from "../components/Dashboard/Header";
import OverviewCards from "../components/Dashboard/OverviewCards";
import DetailedReport from "../components/Dashboard/DetailedReport";

const DashboardContent = () => {
  const [overviewData, setOverviewData] = useState({
    turnover: { value: 0, change: 0 },
    profit: { value: 0, change: 0 },
    newCustomers: { value: 0, change: 0 }
  });
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://67f3b75dcbef97f40d2bc520.mockapi.io/overview');
        setOverviewData(response.data[0]);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 bg-white">
        <Header />
        <OverviewCards 
          data={overviewData} 
          formatCurrency={formatCurrency} 
        />
        <DetailedReport />
      </main>
    </div>
  );
};

export default DashboardContent;