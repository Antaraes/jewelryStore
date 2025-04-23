import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="feature-card bg-white p-8 rounded-lg shadow-md text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-900 mb-6 mx-auto">
        <div className="feature-icon w-8 h-8">{icon}</div>
      </div>
      <h3 className="text-xl font-medium mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
