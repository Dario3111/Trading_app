import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

// Función para generar fluctuación aleatoria en el precio de la acción
const generateRandomPrice = (currentPrice) => {
  const change = (Math.random() - 0.5) * 10; // Fluctuación de -5 a +5
  return parseFloat(Math.max(currentPrice + change, 0).toFixed(2)); // Precio positivo
};

const StockChart = () => {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState(100); // Precio inicial de la acción

  // useEffect para actualizar los precios cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString(); // Hora actual
      const newPrice = generateRandomPrice(price); // Nuevo precio calculado
      setData((prev) => [...prev.slice(-20), { time, price: newPrice }]); // Mantiene los últimos 20 datos
      setPrice(newPrice); // Actualiza el precio
    }, 1000); // Intervalo de 1 segundo

    return () => clearInterval(interval); // Limpiar intervalo al desmontar el componente
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
