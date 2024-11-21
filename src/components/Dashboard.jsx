import React from "react";
import StockChart from "./StockChart";
import BannerCarousel from "./BannerCarousel";
import StockTrade from "./StockTrade";

const Dashboard = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>Simulador de Trading</h1>
      <BannerCarousel />
      <StockChart />
      <StockTrade />
    </div>
  );
};

export default Dashboard;
