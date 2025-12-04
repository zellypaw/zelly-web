'use client';

import InteractiveDemo from '@/components/sections/InteractiveDemo';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import Emotional from '@/components/sections/Emotional';
import LeadForm from '@/components/sections/LeadForm';

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <InteractiveDemo />
      <Navbar />
      <div id="hero-section">
        <Hero />
      </div>
      <Problem />
      <Solution />
      <Emotional />
      <LeadForm />
      
      {/* Footer */}
      <footer className="bg-secondary-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4 font-display">ZELLY</h3>
          <p className="text-secondary-400 text-sm mb-4">
            AI로 정리하는 반려동물 성장 앨범
          </p>
          <p className="text-secondary-500 text-xs">
            © 2024 Zelly. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
