import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const BannerCarousel = () => {
  const banners = [
    { title: "Promoción Especial", description: "Bonos al 10% anual" },
    { title: "Mercado Cripto", description: "BTC sube un 5% hoy" },
    { title: "Top Acciones", description: "AAPL, TSLA y AMZN lideran" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ margin: "20px auto", width: "80%" }}>
      {" "}
      {/* Añadido para centrar el slider */}
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} style={{ padding: 20, backgroundColor: "#f5f5f5" }}>
            <h3>{banner.title}</h3>
            <p>{banner.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;
