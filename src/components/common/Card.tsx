import React from 'react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Card({ icon, title, description }: CardProps) {
  return (
    <div 
      className="bg-zelly-bg-secondary rounded-3xl p-8 md:p-10 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-zelly-border"
    >
      <div className="mb-6">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-zelly-text-primary mb-4">
        {title}
      </h3>
      <p className="text-zelly-text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
}
