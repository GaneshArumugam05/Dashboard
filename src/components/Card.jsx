import React from "react";
function Card({ title, value, icon, trend }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex items-center gap-4 min-w-[150px] mobile:px-2">
      <div className="rounded-lg bg-gray-100 dark:bg-gray-700 p-2">{icon}</div>
      <div>
        <div className="text-gray-500 text-sm">{title}</div>
        <div className="text-2xl font-bold dark:text-white">{value}</div>
        <div className={`text-xs ${trend > 0 ? "text-green-500" : "text-red-500"}`}>
          {trend > 0 ? "+" : ""}
          {trend}%
        </div>
      </div>
    </div>
  );
}
export default Card;
