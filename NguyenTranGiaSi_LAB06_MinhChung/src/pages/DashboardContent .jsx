import React, { useState, useEffect } from "react";
import axios from "axios";
import OverviewCards from "../components/Dashboard/OverviewCards";
import DetailedReport from "../components/Dashboard/DetailedReport";

const DashboardContent = () => {
  const [overviewData, setOverviewData] = useState({
    turnover: { value: 0, change: 0 },
    profit: { value: 0, change: 0 },
    newCustomers: { value: 0, change: 0 }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://67f3b75dcbef97f40d2bc520.mockapi.io/overview');
        setOverviewData(response.data[0]);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load overview data");
        setLoading(false);
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
    <>
      <OverviewCards 
        data={overviewData} 
        loading={loading} 
        error={error} 
        formatCurrency={formatCurrency} 
      />
      <DetailedReport />
    </>
  );
};

export default DashboardContent;