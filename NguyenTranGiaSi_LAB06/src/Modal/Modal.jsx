import React, { useEffect, useState } from "react";
import axios from "axios";

const Modal = ({ isOpen, onClose, itemId, onSave }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    company: "",
    orderValue: "",
    orderDate: "",
    status: "",
  });

  useEffect(() => {
    if (isOpen && itemId) {
      console.log("Fetching item with ID:", itemId);

      axios
        .get("https://67f3b75dcbef97f40d2bc520.mockapi.io/DataGiaSi")
        .then((response) => {
          console.log("Fetched all data, finding item with ID:", itemId);
          const item = response.data.find((item) => item.id === itemId);

          if (item) {
            setFormData(item);
          } else {
            console.error("Item not found in data");
          }
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
        });
    }
  }, [isOpen, itemId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();

    // axios.put(`https://67f3b75dcbef97f40d2bc520.mockapi.io/DataGiaSi/${itemId}`, formData)
    //   .then(response => {
    //     console.log("Update success:", response.data);
    //     onSave(response.data);
    //     onClose();
    //   })
    //   .catch(err => {
    //     console.error("Error updating data:", err);
    //     setError("Failed to update data");
    //   });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-20">
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b p-4 flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-800">Edit Customer</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Customer Name
                </label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName || ""}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company || ""}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Order Value
                </label>
                <input
                  type="text"
                  name="orderValue"
                  value={formData.orderValue || ""}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Order Date
                </label>
                <input
                  type="date"
                  name="orderDate"
                  value={formData.orderDate || ""}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status || ""}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Select Status</option>
                  <option value="Completed">Completed</option>
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm bg-pink-500 text-white rounded-md hover:bg-pink-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
};

export default Modal;
