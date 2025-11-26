// DashboardHome.jsx
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import ChartBar from '../components/ChartBar';
import ChartPie from '../components/ChartPie';
import ChartLine from '../components/ChartLine';
import BentoGrid from '../components/BentoGrid';
import DataTable from '../components/DataTable';
import { FaUsers, FaShoppingCart, FaMoneyBill, FaBook } from 'react-icons/fa';

const iconMap = { FaUsers, FaShoppingCart, FaMoneyBill, FaBook };

const DashboardHome = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return <div className="p-6 text-gray-500 dark:text-gray-300">Loading...</div>;

  return (
    <div className="p-6 space-y-6">
      <BentoGrid>
        {data.cards.map((card, idx) => (
          <Card
            key={idx}
            title={card.title}
            value={card.value}
            icon={React.createElement(iconMap[card.icon])}
            trend={card.trend}
          />
        ))}
      </BentoGrid>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ChartBar data={data.barChart} />
        <ChartPie data={data.pieChart} />
        <ChartLine data={data.lineChart} />
      </div>
      <DataTable rows={data.table} />
    </div>
  );
};

export default DashboardHome;
