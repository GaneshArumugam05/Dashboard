import React, { useState } from "react";

function DataTable({ rows }) {
  const rowsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(rows.length / rowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentRows = rows.slice(startIndex, startIndex + rowsPerPage);

  // Status Color Function
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-200";
      case "inactive":
        return "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200";
      default:
        return "bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200";
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 mt-8 overflow-x-auto">

      {/* Table */}
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">Status</th>
            <th className="text-left p-2">Value</th>
          </tr>
        </thead>

        <tbody>
          {currentRows.map((row) => (
            <tr key={row.id} className="border-b dark:border-gray-700">
              <td className="p-2">{row.name}</td>

              {/* Status with color badge */}
              <td className="p-2">
                <span className={`px-3 py-1 text-sm rounded-full font-medium ${getStatusColor(row.status)}`}>
                  {row.status}
                </span>
              </td>

              <td className="p-2">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        
        {/* Prev Button */}
        <button
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 disabled:opacity-40"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {/* Page Indicator */}
        <span className="text-sm text-gray-600 dark:text-gray-300">
          Page {currentPage} of {totalPages}
        </span>

        {/* Next Button */}
        <button
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 disabled:opacity-40"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>

      </div>
    </div>
  );
}

export default DataTable;
