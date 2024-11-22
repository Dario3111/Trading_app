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
  const change = (Math.random() - 0.5) * 20; // Cambios pequeños en el precio
  return parseFloat(Math.max(currentPrice + change, 1).toFixed(2));
};

const StockTrade = ({ selectedStock, wallet, setWallet }) => {
  const [price, setPrice] = useState(selectedStock.basePrice);
  const [data, setData] = useState([]);
  const [shares, setShares] = useState(0);

  useEffect(() => {
    setPrice(selectedStock.basePrice);
    setShares(0);
    setData([]);
  }, [selectedStock]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPrice = generateRandomPrice(price);
      const time = new Date().toLocaleTimeString();
      setData((prev) => [...prev.slice(-20), { time, price: newPrice }]);
      setPrice(newPrice);
    }, 2000);

    return () => clearInterval(interval);
  }, [price]);

  const handleBuy = () => {
    if (wallet >= price) {
      setWallet(wallet - price);
      setShares(shares + 1);
    }
  };

  const handleSell = () => {
    if (shares > 0) {
      setWallet(wallet + price);
      setShares(shares - 1);
    }
  };

  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-900 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Simulador de Trading
      </h2>

      <h3 className="text-xl font-semibold text-white mb-4">
        Gráfico de Precio
      </h3>
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid stroke="#555" strokeDasharray="3 3" />
          <XAxis dataKey="time" tick={{ fill: "#ccc" }} />
          <YAxis tick={{ fill: "#ccc" }} />
          <Tooltip contentStyle={{ backgroundColor: "#222", border: "none" }} />
          <Line type="monotone" dataKey="price" stroke="#00FF00" dot={false} />
        </LineChart>
      </div>

      <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg mb-6">
        <p className="text-lg text-gray-300">
          <strong>Precio de la acción:</strong> ${price}
        </p>
        <p className="text-lg text-gray-300">
          <strong>Wallet:</strong> {wallet.toFixed(2)} Tokens
        </p>
        <p className="text-lg text-gray-300 flex items-center">
          <strong>Acciones:</strong>{" "}
          <span className="ml-2 text-xl">
            {selectedStock.logo} {shares}
          </span>
        </p>
      </div>

      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={handleBuy}
          className="px-6 py-2 bg-transparent border-2 border-green-500 hover:bg-green-500 text-white font-bold rounded-lg shadow-lg transition duration-300"
        >
          Comprar
        </button>
        <button
          onClick={handleSell}
          className="px-6 py-2 bg-transparent border-2 border-red-500 hover:bg-red-500 text-white font-bold rounded-lg shadow-lg transition duration-300"
        >
          Vender
        </button>
      </div>
    </div>
  );
};

export default StockTrade;
