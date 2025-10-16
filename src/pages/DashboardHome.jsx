import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/Contextprovider";

const DashboardHome = () => {
  const {customersList}=useContext(ShopContext)
  const [getcredit,setGetcredit]=useState(0);

  const gettotalcredit=customersList.reduce((sum,t)=>sum+t.credit,0)

  useEffect(()=>{
    setGetcredit(gettotalcredit)
  },[getcredit])
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Welcome back, <span className="text-blue-600">Admin</span>
      </h1>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-gray-600 text-sm">Total Credit</h3>
          <p className="text-2xl font-bold mt-2 text-blue-700">{getcredit} rupees</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-gray-600 text-sm">Customers</h3>
          <p className="text-2xl font-bold mt-2 text-green-600">{customersList.length}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-gray-600 text-sm">Products</h3>
          <p className="text-2xl font-bold mt-2 text-orange-600">78</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-gray-600 text-sm">Pending Orders</h3>
          <p className="text-2xl font-bold mt-2 text-red-600">5</p>
        </div>
      </div>

      {/* Chart and Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow h-80 flex justify-center items-center text-gray-500">
          📊 Sales Graph Coming Soon
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="pb-2">Customer</th>
                <th className="pb-2">Product</th>
                <th className="pb-2">Amount</th>
                <th className="pb-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b text-sm">
                <td className="py-2">Ali Khan</td>
                <td>Shirt</td>
                <td>$40</td>
                <td className="text-green-600 font-medium">Completed</td>
              </tr>
              <tr className="border-b text-sm">
                <td className="py-2">Sara Ahmed</td>
                <td>Shoes</td>
                <td>$120</td>
                <td className="text-yellow-600 font-medium">Pending</td>
              </tr>
              <tr className="text-sm">
                <td className="py-2">Bilal</td>
                <td>Watch</td>
                <td>$90</td>
                <td className="text-red-600 font-medium">Cancelled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
