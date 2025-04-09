import React, { useState } from "react";

const dataTable = [
  {
    id: 1,
    customerName: "Elizabeth Lee",
    company: "AvatarSystems",
    orderValue: "$359",
    orderDate: "10/07/2023",
    status: "New",
  },
  {
    id: 2,
    customerName: "Carlos Garcia",
    company: "SmoozeShift",
    orderValue: "$747",
    orderDate: "24/07/2023",
    status: "New",
  },
  {
    id: 3,
    customerName: "Elizabeth Bailey",
    company: "Prime Time Telecom",
    orderValue: "$564",
    orderDate: "08/08/2023",
    status: "In-progress",
  },
  {
    id: 4,
    customerName: "Ryan Brown",
    company: "OmniTech Corporation",
    orderValue: "$541",
    orderDate: "31/08/2023",
    status: "In-progress",
  },
  {
    id: 5,
    customerName: "Ryan Young",
    company: "DataStream Inc.",
    orderValue: "$769",
    orderDate: "01/05/2023",
    status: "Completed",
  },
  {
    id: 6,
    customerName: "Hailey Adams",
    company: "FlowRush",
    orderValue: "$922",
    orderDate: "10/06/2023",
    status: "Completed",
  },
  {
    id: 7,
    customerName: "Elizabeth Lee",
    company: "AvatarSystems",
    orderValue: "$359",
    orderDate: "10/07/2023",
    status: "New",
  },
  {
    id: 8,
    customerName: "Carlos Garcia",
    company: "SmoozeShift",
    orderValue: "$747",
    orderDate: "24/07/2023",
    status: "New",
  },
  {
    id: 9,
    customerName: "Elizabeth Bailey",
    company: "Prime Time Telecom",
    orderValue: "$564",
    orderDate: "08/08/2023",
    status: "In-progress",
  },
  {
    id: 10,
    customerName: "Ryan Brown",
    company: "OmniTech Corporation",
    orderValue: "$541",
    orderDate: "31/08/2023",
    status: "In-progress",
  },
  {
    id: 11,
    customerName: "Ryan Young",
    company: "DataStream Inc.",
    orderValue: "$769",
    orderDate: "01/05/2023",
    status: "Completed",
  },
  {
    id: 12,
    customerName: "Hailey Adams",
    company: "FlowRush",
    orderValue: "$922",
    orderDate: "10/06/2023",
    status: "Completed",
  },
];

const DetailedReport = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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