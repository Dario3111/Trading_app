import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import DebitCard from "./DebitCard"; // Importar el componente de la tarjeta
import { FaShoppingCart, FaMoneyBillAlt } from "react-icons/fa"; // Iconos de react-icons

const generateRandomPrice = (currentPrice) => {
  const change = (Math.random() - 0.5) * 350; // Fluctuación de -175 a +175
  return parseFloat(Math.max(currentPrice + change, 0).toFixed(2)); // Precio positivo
};

const StockTrade = () => {
  const [price, setPrice] = useState(100); // Precio de la acción
  const [data, setData] = useState([]);
  const [wallet, setWallet] = useState(100000); // Saldo inicial del wallet
  const [shares, setShares] = useState(0); // Número de acciones compradas
  const [initialWallet, setInitialWallet] = useState(100000); // Saldo inicial del wallet

  useEffect(() => {
    const interval = setInterval(() => {
      const newPrice = generateRandomPrice(price);
      const time = new Date().toLocaleTimeString();
      setData((prev) => [...prev.slice(-20), { time, price: newPrice }]);
      setPrice(newPrice);
    }, 2000); // Actualizar cada segundo

    return () => clearInterval(interval);
  }, [price]);

  // Función para manejar la compra de acciones
  const handleBuy = () => {
    if (wallet >= price) {
      setWallet(wallet - price); // Deduct price from wallet
      setShares(shares + 1); // Increment shares
    }
  };

  // Función para manejar la venta de acciones
  const handleSell = () => {
    if (shares > 0) {
      setWallet(wallet + price); // Añadir el precio de la acción vendida al wallet
      setShares(shares - 1); // Decrementar acciones
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

      <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-800 p-4 rounded-lg mb-6">
        <p className="text-lg text-green-400">
          <strong>Precio de la acción:</strong> ${price}
        </p>
        <p className="text-lg text-gray-300">
          <strong>Wallet:</strong> {wallet.toFixed(2)} Tokens
        </p>
        <p className="text-lg text-gray-300">
          <strong>Acciones:</strong> {shares}
        </p>
      </div>

      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={handleBuy}
          className="px-6 py-2 bg-transparent border-2 border-green-500 hover:bg-green-500 text-white font-bold rounded-lg shadow-lg transition duration-300"
        >
          <FaShoppingCart className="text-2xl" />
        </button>
        <button
          onClick={handleSell}
          className="px-6 py-2 bg-transparent border-2 border-red-500 hover:bg-red-500 text-white font-bold rounded-lg shadow-lg transition duration-300"
        >
          <FaMoneyBillAlt className="text-2xl" />
        </button>
      </div>

      <h4 className="text-lg font-medium text-gray-300 mt-6">
        Historial del Wallet
      </h4>
      <p className="text-gray-400">
        Compra cuando el precio esté bajo y vende cuando suba para obtener
        ganancias. ¡Administra tu saldo sabiamente!
      </p>

      <DebitCard wallet={wallet} initialWallet={initialWallet} />
    </div>
  );
};

export default StockTrade;
