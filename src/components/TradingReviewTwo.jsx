import React, { useState } from "react";

const TradingReviewTwo = () => {
  const [rating, setRating] = useState(0);
  const [activeSection, setActiveSection] = useState("review");
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([
    {
      id: 1,
      username: "TraderPro23",
      rating: 4,
      text: "Excelente plataforma, interfaces intuitivas y ejecución rápida de trades.",
      date: "2024-03-15",
      likes: 42,
    },
    {
      id: 2,
      username: "CryptoNinja",
      rating: 5,
      text: "Los mejores gráficos y herramientas de análisis técnico del mercado.",
      date: "2024-03-10",
      likes: 78,
    },
  ]);

  const submitReview = () => {
    if (rating === 0 || review.trim() === "") {
      alert("Por favor, selecciona una calificación y escribe tu comentario");
      return;
    }

    const newReview = {
      id: Date.now(),
      username: "TraderActual",
      rating,
      text: review,
      date: new Date().toISOString().split("T")[0],
      likes: 0,
    };

    setReviews([newReview, ...reviews]);
    setReview("");
    setRating(0);
  };

  const renderRatingStars = (count) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={index < count ? "#fbbf24" : "none"}
        stroke={index < count ? "#fbbf24" : "#6b7280"}
        strokeWidth="2"
        className="inline-block"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ));
  };

  return (
    <div className="bg-[#121220] text-white min-h-screen max-w-full overflow-x-hidden">
      {/* Header */}
      <div className="bg-[#1e1e2f] p-4 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4ade80"
            strokeWidth="2"
            className="text-green-400"
          >
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
            <polyline points="17 6 23 6 23 12"></polyline>
          </svg>
          <h1 className="text-xl font-bold">Trading Reviews</h1>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="2"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="2"
          >
            <path d="M3 3v18h18"></path>
            <path d="M18 15l-5-5-5 5"></path>
          </svg>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex bg-[#1e1e2f] mt-2">
        <button
          onClick={() => setActiveSection("review")}
          className={`
            w-1/2 py-3 text-center font-semibold text-sm sm:text-base
            ${
              activeSection === "review"
                ? "bg-green-600 text-white"
                : "bg-[#2c2c3e] text-gray-400"
            }
          `}
        >
          Escribir Review
        </button>
        <button
          onClick={() => setActiveSection("community")}
          className={`
            w-1/2 py-3 text-center font-semibold text-sm sm:text-base
            ${
              activeSection === "community"
                ? "bg-green-600 text-white"
                : "bg-[#2c2c3e] text-gray-400"
            }
          `}
        >
          Reviews Comunidad
        </button>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {activeSection === "review" && (
          <div className="p-4 space-y-4">
            {/* Rating Selection */}
            <div className="bg-[#1e1e2f] rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-3">
                Califica tu Experiencia
              </h2>
              <div className="flex justify-between">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => setRating(num)}
                    className={`
                      w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center
                      transition-all duration-300 text-sm sm:text-base
                      ${
                        rating >= num
                          ? "bg-green-600 text-white scale-110"
                          : "bg-[#2c2c3e] text-gray-400 hover:bg-[#3c3c4e]"
                      }
                    `}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Review Input */}
            <div className="bg-[#1e1e2f] rounded-lg p-4">
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Escribe tu opinión detallada sobre la plataforma..."
                className="
                  w-full bg-[#2c2c3e] rounded-lg p-3 
                  text-white placeholder-gray-500
                  focus:ring-2 focus:ring-green-600
                  border-none resize-none text-sm sm:text-base
                "
                rows={4}
              />
              <button
                onClick={submitReview}
                className="
                  w-full mt-3 py-3 bg-green-600 
                  text-white rounded-lg 
                  flex items-center justify-center
                  hover:bg-green-700 transition-colors text-sm sm:text-base
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mr-2"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 11 22 2"></polygon>
                </svg>
                Enviar Review
              </button>
            </div>
          </div>
        )}

        {activeSection === "community" && (
          <div className="p-4 space-y-4">
            {reviews.map((reviewItem) => (
              <div
                key={reviewItem.id}
                className="bg-[#1e1e2f] rounded-lg p-4 space-y-3"
              >
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-8 h-8 bg-green-600 rounded-full 
                      flex items-center justify-center text-white font-bold"
                    >
                      {reviewItem.username[0]}
                    </div>
                    <span className="font-semibold text-sm sm:text-base">
                      {reviewItem.username}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-400">
                    {reviewItem.date}
                  </span>
                </div>

                <div className="flex items-center space-x-1">
                  {renderRatingStars(reviewItem.rating)}
                </div>

                <p className="text-gray-300 text-sm sm:text-base">
                  {reviewItem.text}
                </p>

                <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                  <button
                    className="
                    flex items-center text-gray-400 
                    hover:text-green-500 transition-colors text-sm
                  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="mr-1"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    {reviewItem.likes} Me gusta
                  </button>
                  <button
                    className="
                    bg-[#2c2c3e] text-gray-400 
                    px-3 py-1 rounded-full
                    hover:bg-green-600 hover:text-white
                    transition-colors text-sm
                  "
                  >
                    Responder
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TradingReviewTwo;
