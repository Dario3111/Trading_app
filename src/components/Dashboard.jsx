import React, { useState } from "react";
import BannerCarousel from "./BannerCarousel";
import StockChart from "./StockChart";
import StockTrade from "./StockTrade";
import StockButtons from "./StockButtons";
import DebitCard from "./DebitCard";
import VoiceAssistButton from "./VoiceAssistButton";
import NewsPage from "./NewsPage";

const Dashboard = () => {
  const [stocks] = useState([
    { name: "NVDA", logo: "🌿", basePrice: 120 },
    { name: "TSLA", logo: "🚗", basePrice: 870 },
    { name: "AAPL", logo: "🍎", basePrice: 3200 },
    { name: "AMZN", logo: "📦", basePrice: 300 },
    { name: "MSFT", logo: "🖥️", basePrice: 250 },
    { name: "INTC", logo: "💾", basePrice: 1 },
    { name: "ITX", logo: "👗", basePrice: 25 },
    { name: "GLD", logo: "🏦", basePrice: 1800 },
  ]);

  const [selectedStock, setSelectedStock] = useState(stocks[0]);
  const [wallet, setWallet] = useState(100000);

  const updateSelectedStock = (stockName) => {
    const stock = stocks.find((s) => s.name === stockName);
    setSelectedStock(stock);
  };

  return (
    <div style={{ padding: 20, maxWidth: "1200px", margin: "auto" }}>
      <h1>Simulador de Trading</h1>
      <VoiceAssistButton text="Bienvenidos al simulador de trading" />
      <BannerCarousel />
      <StockChart />
      <StockTrade
        selectedStock={selectedStock}
        wallet={wallet}
        setWallet={setWallet}
      />
      <DebitCard wallet={wallet} />
      <StockButtons stocks={stocks} updateSelectedStock={updateSelectedStock} />
      <NewsPage />
    </div>
  );
};

export default Dashboard;
