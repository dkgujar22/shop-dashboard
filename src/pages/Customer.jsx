import React, { useContext, useState } from "react";
import { ShopContext } from "../context/Contextprovider";


const Customers = () => {
  const {customersList, setCustomersList}=useContext(ShopContext);
  const [newCustomer, setNewCustomer] = useState({ name: "", city: "" });
  const [editIndex, setEditIndex] = useState(null);
  const [editCustomer, setEditCustomer] = useState({ name: "", city: "" });

  // Add a new customer
  const handleAddCustomer = () => {
    if (newCustomer.name && newCustomer.city) {

      const newcustwithId={
        id:Date.now(),
        name:newCustomer.name,
        city:newCustomer.city,
        credit:''        // transaction:[]
      }
      setCustomersList([...customersList, newcustwithId]);
      setNewCustomer({ name: "", city: "" });
    }
  };

  // Start inline editing
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditCustomer(customersList[index]);
  };

  // Save updated customer
  const handleSave = (index) => {
    const updatedList = [...customersList];
    updatedList[index] = editCustomer;
    setCustomersList(updatedList);
    setEditIndex(null);
  };

  // Cancel editing
  const handleCancel = () => {
    setEditIndex(null);
    setEditCustomer({ name: "", city: "" });
  };

  // Delete a customer
  const handleDelete = (index) => {
    const updatedList = customersList.filter((_, i) => i !== index);
    setCustomersList(updatedList);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">👥 Customers</h1>

      {/* Add New Customer Section */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Customer Name"
          value={newCustomer.name}
          onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
          className="border p-2 rounded w-1/3"
        />
        <input
          type="text"
          placeholder="City"
          value={newCustomer.city}
          onChange={(e) => setNewCustomer({ ...newCustomer, city: e.target.value })}
          className="border p-2 rounded w-1/3"
        />
        <button
          onClick={handleAddCustomer}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {/* Display Customer List */}
      <ul className="bg-white shadow rounded p-4">
        {customersList.length === 0 ? (
          <p className="text-gray-500">No customers added yet.</p>
        ) : (
          customersList.map((cust, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b py-2"
            >
              {/* If this row is being edited */}
              {editIndex === index ? (
                <div className="flex w-full justify-between items-center">
                  <div className="flex gap-2 w-2/3">
                    <input
                      type="text"
                      value={editCustomer.name}
                      onChange={(e) =>
                        setEditCustomer({ ...editCustomer, name: e.target.value })
                      }
                      className="border p-2 rounded w-1/2"
                    />
                    <input
                      type="text"
                      value={editCustomer.city}
                      onChange={(e) =>
                        setEditCustomer({ ...editCustomer, city: e.target.value })
                      }
                      className="border p-2 rounded w-1/2"
                    />
                  </div>
                  <div className="space-x-2">
                    <button
                      onClick={() => handleSave(index)}
                      className="bg-green-600 text-white px-3 py-1 rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="bg-gray-400 text-white px-3 py-1 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                // Normal row view
                <div className="flex justify-between items-center w-full">
                  <div>
                    <strong>{cust.name}</strong> — {cust.city}
                  </div>
                  <div className="space-x-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Customers;
