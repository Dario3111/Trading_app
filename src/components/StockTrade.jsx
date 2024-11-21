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

const generateRandomPrice = (currentPrice) => {
  const change = (Math.random() - 0.5) * 2; // Fluctuación de -1 a +1
  return parseFloat(Math.max(currentPrice + change, 0).toFixed(2)); // Precio positivo
};

const StockTrade = () => {
  const [price, setPrice] = useState(100); // Precio de la acción
  const [data, setData] = useState([]);
  const [wallet, setWallet] = useState(100000); // Saldo inicial del wallet
  const [shares, setShares] = useState(0); // Número de acciones compradas
  const [gain, setGain] = useState(0); // Ganancia total

  useEffect(() => {
    const interval = setInterval(() => {
      const newPrice = generateRandomPrice(price);
      const time = new Date().toLocaleTimeString();
      setData((prev) => [...prev.slice(-20), { time, price: newPrice }]);
      setPrice(newPrice);
    }, 1000); // Actualizar cada segundo

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
      const newGain = price * shares - wallet; // Calcular ganancia
      setWallet(wallet + price); // Añadir el precio de la acción vendida al wallet
      setShares(shares - 1); // Decrementar acciones
      setGain(newGain); // Establecer la ganancia
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: "1200px", margin: "auto" }}>
      <h2>Simulador de Compras y Ventas</h2>
      <div>
        <p>Precio de la acción: ${price}</p>
        <p>Balance en el Wallet: {wallet.toFixed(2)} Tokens</p>
        <p>Acciones en posesión: {shares}</p>
      </div>

      <div>
        <button
          onClick={handleBuy}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Comprar 1 Acción
        </button>
        <button
          onClick={handleSell}
          style={{
            padding: "10px 20px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Vender 1 Acción
        </button>
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

      {/* Agregar el componente de la tarjeta de débito al Dashboard */}
      <DebitCard wallet={wallet} initialWallet={100000} />
    </div>
  );
};

export default StockTrade;
