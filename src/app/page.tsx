'use client';

import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import Emotional from '@/components/sections/Emotional';
import LeadForm from '@/components/sections/LeadForm';

export default function LandingPage() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth bg-white">
      <Navbar />
      
      <Hero />
      <Problem />
      <Solution />
      <Emotional />
      <LeadForm />
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-zelly-pink mb-4">ZELLY</h3>
              <p className="text-slate-400 text-sm">
                AI로 더 즐거워지는 반려동물 평생 앨범
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-500 text-xs">
              © 2026 Zelly Team. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
