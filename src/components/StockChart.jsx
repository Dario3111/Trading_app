import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const generateRandomPrice = (currentPrice) => {
  const change = (Math.random() - 0.5) * 10;
  return parseFloat(Math.max(currentPrice + change, 0).toFixed(2));
};

const StockChart = () => {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      const newPrice = generateRandomPrice(price);
      setData((prev) => [...prev.slice(-20), { time, price: newPrice }]);
      setPrice(newPrice);
    }, 1000);

    return () => clearInterval(interval);
  }, [price]);

  return (
    <div>
      <h2>Precio de la Acción</h2>
      <LineChart width={600} height={400} data={data}>
        <Line
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          strokeWidth={2}
        />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default StockChart;
