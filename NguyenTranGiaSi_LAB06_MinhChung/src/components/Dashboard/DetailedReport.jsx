/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../../Modal/Modal";
import DataTable from "react-data-table-component";

const DetailedReport = () => {
  const [dataTable, setDataTable] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItemId, setCurrentItemId] = useState(null);
  const [modalMode, setModalMode] = useState("edit");
  const [selectedRows, setSelectedRows] = useState([]);
  
  const fetchData = () => {
    console.log("Fetching data from API...");
    setLoading(true);
    axios
      .get("https://67f3b75dcbef97f40d2bc520.mockapi.io/DataGiaSi")
      .then((response) => {
        console.log("Data fetched successfully:", response.data);
        setDataTable(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleImport = () => {
    console.log("Import data");
  };

  const handleExport = () => {
    console.log("Export data");
  };

  const handleEdit = (row) => {
    console.log("Edit item:", row);
    setCurrentItemId(row.id);
    setModalMode("edit");
    setIsModalOpen(true);
  };

  const handleSaveEdit = (updatedItem) => {
    console.log("Saving item:", updatedItem);

    if (modalMode === "edit") {
      const updatedData = dataTable.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      );
      setDataTable(updatedData);
    } else {
      const newData = [updatedItem, ...dataTable];
      setDataTable(newData);
    }
  };

  const handleAdd = () => {
    console.log("Open add user modal");
    setModalMode("add");
    setCurrentItemId(null);
    setIsModalOpen(true);
  };

  const StatusBadge = ({ status }) => (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium 
        ${
          status === "Completed"
            ? "bg-green-100 text-green-800"
            : status === "Pending"
            ? "bg-yellow-100 text-yellow-800"
            : status === "Processing"
            ? "bg-blue-100 text-blue-800"
            : "bg-red-100 text-red-800"
        }`}
    >
      {status}
    </span>
  );

  const columns = [
    {
      name: "Customer Name",
      selector: row => row.customerName,
      sortable: true,
    },
    {
      name: "Company",
      selector: row => row.company,
      sortable: true,
    },
    {
      name: "Order Value",
      selector: row => row.orderValue,
      sortable: true,
    },
    {
      name: "Order Date",
      selector: row => row.orderDate,
      sortable: true,
    },
    {
      name: "Status",
      cell: row => <StatusBadge status={row.status} />,
      sortable: true,
    },
    {
      name: "Action",
      cell: row => (
        <button
          onClick={() => handleEdit(row)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded mr-2"
        >
          Edit
        </button>
      ),
      button: true,
    },
  ];

  const customStyles = {
    headRow: {
      style: {
        backgroundColor: '#f9fafb',
        borderBottom: '1px solid #e5e7eb',
      },
    },
    headCells: {
      style: {
        fontSize: '0.875rem',
        fontWeight: '600',
        color: '#374151',
        padding: '0.75rem',
      },
    },
    rows: {
      style: {
        fontSize: '0.875rem',
        backgroundColor: 'white',
        minHeight: '48px',
        '&:not(:last-of-type)': {
          borderBottom: '1px solid #e5e7eb',
        },
      },
      highlightOnHoverStyle: {
        backgroundColor: '#f9fafb',
      },
    },
    pagination: {
      style: {
        fontSize: '0.875rem',
        minHeight: '56px',
        borderTopWidth: '1px',
        borderColor: '#e5e7eb',
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md relative">
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
            className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded mr-2"
          >
            Export
          </button>
          <button
            onClick={handleAdd}
            className="bg-pink-500 hover:bg-pink-600 text-white py-1 px-3 rounded"
          >
            Add User
          </button>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={dataTable}
        pagination
        selectableRows
        progressPending={loading}
        progressComponent={<div className="p-4">Loading data...</div>}
        onSelectedRowsChange={(state) => setSelectedRows(state.selectedRows)}
        customStyles={customStyles}
        highlightOnHover
        pointerOnHover
        responsive
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        itemId={currentItemId}
        onSave={handleSaveEdit}
        mode={modalMode}
      />
    </div>
  );
};

export default DetailedReport;