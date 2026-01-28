import React from 'react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Card({ icon, title, description }: CardProps) {
  return (
    <div 
      className="bg-white rounded-3xl p-8 md:p-10 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-secondary-100"
    >
      <div className="mb-6">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-secondary-900 mb-4">
        {title}
      </h3>
      <p className="text-secondary-700 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
