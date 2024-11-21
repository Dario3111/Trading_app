import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const generateRandomPrice = (currentPrice) => {
  const change = (Math.random() - 0.5) * 2; // Fluctuación de -1 a +1
  return parseFloat(Math.max(currentPrice + change, 0).toFixed(2)); // Precio positivo
};

const StockTrade = () => {
  const [price, setPrice] = useState(100); // Precio de la acción
  const [data, setData] = useState([]);
  const [wallet, setWallet] = useState(100000); // Saldo inicial del wallet
  const [shares, setShares] = useState(0); // Número de acciones compradas

  useEffect(() => {
    const interval = setInterval(() => {
      const newPrice = generateRandomPrice(price);
      const time = new Date().toLocaleTimeString();

      setData((prev) => [...prev.slice(-20), { time, price: newPrice }]);
      setPrice(newPrice);
    }, 1000); // Actualizar cada segundo

    return () => clearInterval(interval);
  }, [price]);

  const handleBuy = () => {
    if (wallet >= price) {
      setWallet(wallet - price); // Deduct price from wallet
      setShares(shares + 1); // Increment shares
    }
  };

  const handleSell = () => {
    if (shares > 0) {
      setWallet(wallet + price); // Add price to wallet
      setShares(shares - 1); // Decrease shares
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Simulador de Compras y Ventas</h2>
      <div>
        <p>Precio de la acción: ${price}</p>
        <p>Balance en el Wallet: {wallet.toFixed(2)} Tokens</p>
        <p>Acciones en posesión: {shares}</p>
      </div>

      <div>
        <button onClick={handleBuy}>Comprar 1 Acción</button>
        <button onClick={handleSell}>Vender 1 Acción</button>
      </div>

      <h3>Gráfico de Precio</h3>
      <LineChart width={500} height={300} data={data}>
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
      </LineChart>

      <h4>Historial del Wallet</h4>
      <p>
        Si compras acciones y el precio sube, ¡ganarás más tokens! Si vendes y
        el precio baja, perderás valor en tu wallet.
      </p>
    </div>
  );
};

export default StockTrade;
