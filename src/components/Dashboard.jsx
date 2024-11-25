import React from "react";
import StockChart from "./StockChart";
import BannerCarousel from "./BannerCarousel";
import StockTrade from "./StockTrade";
import DebitCard from "./DebitCard";
import TradingViewWidget from "./TradingViewWidget";

const Dashboard = () => {
  return (
    <div style={{ padding: 20, maxWidth: "1200px", margin: "auto" }}>
      <h1>Simulador de Trading</h1>
      <BannerCarousel />
      <StockChart />
      <StockTrade /> {/* Aquí integras el componente de StockTrade */}
      <TradingViewWidget />
    </div>
  );
};

export default Dashboard;
