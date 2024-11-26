import React, { useState } from "react";
import { Star } from "lucide-react";

const TradingReviewComponent = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    rating: 0,
    username: "",
    comment: "",
  });

  const handleRatingChange = (newRating) => {
    setFormData((prev) => ({ ...prev, rating: newRating }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.comment || formData.rating === 0) {
      alert("Por favor, complete todos los campos");
      return;
    }

    const newReview = {
      ...formData,
      id: Date.now(),
      date: new Date().toLocaleDateString(),
    };

    setReviews([...reviews, newReview]);
    setFormData({ rating: 0, username: "", comment: "" });
  };

  const StarRating = ({ rating, onRatingChange }) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`cursor-pointer ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300 hover:text-yellow-200"
            } w-6 h-6`}
            onClick={() => onRatingChange(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Valoraciones de Trading
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            Tu Calificación
          </label>
          <StarRating
            rating={formData.rating}
            onRatingChange={handleRatingChange}
          />
        </div>

        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Tu nombre de usuario"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleInputChange}
          placeholder="Escribe tu opinión sobre la plataforma de trading"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-md 
                     hover:bg-blue-700 transition-colors 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Enviar Valoración
        </button>
      </form>

      {/* Sección de Reviews Previas */}
      {reviews.length > 0 && (
        <div className="mt-8 border-t pt-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Valoraciones Anteriores
          </h3>
          {reviews.map((review) => (
            <div key={review.id} className="border-b py-4 last:border-b-0">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-800 dark:text-white">
                  {review.username}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {review.date}
                </span>
              </div>
              <div className="flex items-center space-x-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TradingReviewComponent;
