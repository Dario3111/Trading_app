import React from "react";
import { FaChartLine } from "react-icons/fa";

const TrendingTopics = ({ onSelect }) => {
  const topics = [
    {
      name: "Apple trade",
      icon: <img src="/assets/apple.jpeg" alt="Apple" className="h-6 w-6" />,
    },
    {
      name: "Tesla trade",
      icon: <img src="/assets/tesla.png" alt="Tesla" className="h-6 w-6" />,
    },
    {
      name: "Bolsa de valores",
      icon: <FaChartLine className="h-6 w-6" />,
    },
  ];

  return (
    <div className="flex gap-4 my-4">
      {topics.map((topic, index) => (
        <button
          key={index}
          onClick={() => onSelect(topic.name)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
        >
          {topic.icon}
          {topic.name}
        </button>
      ))}
    </div>
  );
};

export default TrendingTopics;
