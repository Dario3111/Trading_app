import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="my-8 mx-auto w-4/5">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div
            key={index}
            className="p-6 bg-black bg-opacity-80 border border-green-500 rounded-xl text-center shadow-lg"
          >
            <h3 className="text-2xl font-extrabold text-white mb-4">
              {banner.title}
            </h3>
            <p className="text-green-400 text-lg">{banner.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;
