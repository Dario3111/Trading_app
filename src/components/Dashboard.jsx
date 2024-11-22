import React from "react";
import StockChart from "./StockChart";
import BannerCarousel from "./BannerCarousel";
import StockTrade from "./StockTrade";
import DebitCard from "./DebitCard";
import StockButtons from "./StockButtons";

const Dashboard = () => {
  return (
    <div style={{ padding: 20, maxWidth: "1200px", margin: "auto" }}>
      <h1>Simulador de Trading</h1>
      <BannerCarousel />
      <StockChart />
      <StockTrade />
      <StockButtons />
    </div>
  );
};

export default Dashboard;
