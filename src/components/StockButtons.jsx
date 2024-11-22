import React from "react";

const StockButtons = () => {
  const stocks = [
    { name: "NVDA", change: "-1.38%", color: "text-red-500", logo: "🌿" },
    { name: "TSLA", change: "+3.68%", color: "text-green-500", logo: "🚗" },
    { name: "AAPL", change: "+1.84%", color: "text-green-500", logo: "🍎" },
    { name: "AMZN", change: "-0.43%", color: "text-red-500", logo: "📦" },
    { name: "000", change: "", color: "text-gray-500", logo: "⭕" },
    { name: "MSFT", change: "+0.20%", color: "text-green-500", logo: "🖥️" },
    { name: "INTC", change: "+1.81%", color: "text-green-500", logo: "💾" },
    { name: "VAR1", change: "", color: "text-gray-500", logo: "📉" },
  ];

  const handleStockClick = (stockName) => {
    console.log(`Stock clicked: ${stockName}`);
    // Aquí puedes agregar lógica, como redirigir al simulador o realizar una acción.
  };

  return (
    <div className="bg-black text-white rounded-lg p-4 shadow-md">
      <div className="flex justify-between mb-4">
        <button className="bg-gray-800 px-4 py-2 rounded-lg text-white">
          Acciones
        </button>
        <button className="bg-transparent px-4 py-2 rounded-lg text-gray-400">
          ETF
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {stocks.map((stock, index) => (
          <button
            key={index}
            className="flex flex-col items-center text-center p-2 bg-gray-900 rounded-lg hover:bg-gray-800 transition"
            onClick={() => handleStockClick(stock.name)} // Evento onClick
          >
            <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full mb-2">
              <span className="text-lg">{stock.logo}</span>
            </div>
            <span className="text-sm">{stock.name}</span>
            {stock.change && (
              <span className={`text-xs ${stock.color}`}>{stock.change}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StockButtons;
