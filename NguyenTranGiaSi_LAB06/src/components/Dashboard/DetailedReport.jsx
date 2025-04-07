import React, { useState, useEffect } from "react";
import axios from "axios";



const DetailedReport = () => {
    const [dataTable, setDataTable] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
  
    useEffect(() => {
      axios
        .get("https://67f3b75dcbef97f40d2bc520.mockapi.io/DataGiaSi")
        .then((response) => {
          setDataTable(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data", error);
        });
    }, []);
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = dataTable.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(dataTable.length / itemsPerPage);
  
    const handlePrev = () => {
      setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
    };
  
    const handleNext = () => {
      setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
    };
  
    const handleImport = () => {
      console.log("Import data");
    };
  
    const handleExport = () => {
      console.log("Export data");
    };
  
    const handleEdit = (item) => {
      console.log("Edit", item);
    };
  
    const handleAdd = (item) => {
      console.log("Add", item);
    };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-700">Detailed Report</h3>
        <div>
          <button
            onClick={handleImport}
            className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded mr-2"
          >
            Import
          </button>
          <button
            onClick={handleExport}
            className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded"
          >
            Export
          </button>
        </div>
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b p-2">
              <input type="checkbox" />
            </th>
            <th className="border-b p-2">Customer Name</th>
            <th className="border-b p-2">Company</th>
            <th className="border-b p-2">Order Value</th>
            <th className="border-b p-2">Order Date</th>
            <th className="border-b p-2">Status</th>
            <th className="border-b p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td className="border-b p-2">
                <input type="checkbox" />
              </td>
              <td className="border-b p-2">{item.customerName}</td>
              <td className="border-b p-2">{item.company}</td>
              <td className="border-b p-2">{item.orderValue}</td>
              <td className="border-b p-2">{item.orderDate}</td>
              <td className="border-b p-2">{item.status}</td>
              <td className="border-b p-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleAdd(item)}
                  className="bg-purple-500 hover:bg-purple-600 text-white py-1 px-3 rounded"
                >
                  Thêm
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-1 px-3 rounded-l"
        >
          Prev
        </button>
        <span className="py-1 px-3 bg-gray-200 text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-1 px-3 rounded-r"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DetailedReport;
