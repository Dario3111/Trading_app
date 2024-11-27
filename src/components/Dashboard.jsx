import React from "react";
import StockChart from "./StockChart";
import BannerCarousel from "./BannerCarousel";
import StockTrade from "./StockTrade";
import DebitCard from "./DebitCard";
import TradingViewWidget from "./TradingViewWidget";
import TradingReviewComponent from "./TradingReviewComponent";
import TradingReviewTwo from "./TradingReviewTwo";
import LetterAvatars from "./LetterAvatars";
import ImageAvatars from "./ImageAvatars";

const Dashboard = () => {
  return (
    <div className="p-5 max-w-5xl mx-auto space-y-5">
      <h1 className="text-2xl font-bold">Simulador de Trading</h1>
      <BannerCarousel />
      <StockChart />
      <StockTrade /> {/* Aquí integras el componente de StockTrade */}
      <TradingViewWidget />
      <TradingReviewComponent />
      <TradingReviewTwo />
      <LetterAvatars />
      <ImageAvatars />
    </div>
  );
};

export default Dashboard;
