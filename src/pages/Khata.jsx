import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/Contextprovider";

const Khata = () => {
  const { customersList, setCustomersList } = useContext(ShopContext);
  const [searchname, setsearchname] = useState("");
  const [filtercustlist, setFiltercustlist] = useState(customersList);
  const [openkhata, setOpenKhata] = useState(false);
  const [khatacust, setkhataCust] = useState(null);
  const [amountdesc, setAmountdesc] = useState({ amount: "", desc: "" });
  const [formtype, setFormtype] = useState("");

  useEffect(() => {
    if (searchname.trim() === "") {
      setFiltercustlist(customersList);
    } else {
      const updatelist = customersList.filter((c) =>
        c.name.toLowerCase().includes(searchname.toLowerCase())
      );
      setFiltercustlist(updatelist);
      if (openkhata) {
        setOpenKhata(false);
        setkhataCust(null);
      }
    }
  }, [searchname, customersList]);

  const handleKhata = (customer) => {
    setOpenKhata(true);
    setkhataCust(customer);
  };

  const handlemenediye = () => setFormtype("diye");
  const handlemeneliye = () => setFormtype("liye");

  const handleSave = () => {
    if (!amountdesc.amount || !amountdesc.desc)
      return alert("Please enter both amount and description");

    const newTransaction = {
      amount: amountdesc.amount,
      desc: amountdesc.desc,
      type: formtype,
      date: new Date().toLocaleString(),
    };

    setCustomersList((prev) => {
      const updated = prev.map((cust) => {
        if (cust.id === khatacust.id) {
          const transactions = [...(cust.transactions || []), newTransaction];
          const totaldiye = transactions
            .filter((c) => c.type === "diye")
            .reduce((sum, t) => sum + Number(t.amount), 0);
          const totalliye = transactions
            .filter((c) => c.type === "liye")
            .reduce((sum, t) => sum + Number(t.amount), 0);
          const totalcredit = totaldiye - totalliye;

          return {
            ...cust,
            transactions,
            credit: totalcredit,
          };
        }
        return cust;
      });

      const updatedCust = updated.find((c) => c.id === khatacust.id);
      setkhataCust(updatedCust);
      return updated;
    });

    setAmountdesc({ amount: "", desc: "" });
    setFormtype("");
  };

  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center md:text-left">
        📒 Khata (Customer Credit Record)
      </h1>

      <input
        type="search"
        placeholder="Search customer by name"
        value={searchname}
        onChange={(e) => setsearchname(e.target.value)}
        className="border p-2 rounded w-full md:w-1/2 mb-4"
      />

      {openkhata && khatacust ? (
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2 text-center md:text-left">
            Customer Khata
          </h2>

          <div className="space-y-1 mb-4">
            <p>
              <strong>Name:</strong> {khatacust.name}
            </p>
            <p>
              <strong>City:</strong> {khatacust.city}
            </p>
            <p>
              <strong>Credit:</strong> {khatacust.credit || 0}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-3">
            <button
              onClick={handlemeneliye}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              Mene Liye
            </button>
            <button
              onClick={handlemenediye}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Mene Diye
            </button>
            <button
              onClick={() => setOpenKhata(false)}
              className="bg-yellow-500 text-black px-3 py-1 rounded"
            >
              Close Khata
            </button>
          </div>

          {formtype && (
            <div className="flex flex-col md:flex-row items-center gap-2 mb-4">
              <input
                type="number"
                placeholder="Enter amount"
                value={amountdesc.amount}
                onChange={(e) =>
                  setAmountdesc({ ...amountdesc, amount: e.target.value })
                }
                className="border p-2 rounded w-full md:w-1/3"
              />
              <input
                type="text"
                placeholder="Enter description"
                value={amountdesc.desc}
                onChange={(e) =>
                  setAmountdesc({ ...amountdesc, desc: e.target.value })
                }
                className="border p-2 rounded w-full md:w-1/2"
              />
              <button
                onClick={handleSave}
                className="bg-black text-white px-3 py-2 rounded w-full md:w-auto"
              >
                Save
              </button>
            </div>
          )}

          <div>
            <h3 className="font-bold text-lg mb-2">Transaction History</h3>
            {khatacust.transactions && khatacust.transactions.length > 0 ? (
              <div className="space-y-2">
                {khatacust.transactions.map((t, i) => (
                  <div
                    key={i}
                    className={`${
                      t.type === "diye" ? "bg-red-500" : "bg-green-500"
                    } text-white p-2 rounded`}
                  >
                    <strong>Amount:</strong> {t.amount} |{" "}
                    <strong>Desc:</strong> {t.desc} |{" "}
                    <strong>Date:</strong> {t.date}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No transactions yet</p>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          {filtercustlist.length === 0 ? (
            <p className="text-gray-500 text-center">
              No matching customers found.
            </p>
          ) : (
            filtercustlist.map((elem, i) => (
              <div
                key={i}
                className="bg-white shadow rounded p-3 flex justify-between items-center"
              >
                <div>
                  <strong>{elem.name}</strong> — {elem.city}
                </div>
                <button
                  onClick={() => handleKhata(elem)}
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Open Khata
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Khata;
