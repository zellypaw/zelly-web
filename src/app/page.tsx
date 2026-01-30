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
      <footer className="bg-white border-t border-zelly-border py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-zelly-text-tertiary text-sm">
              © 2026 Zelly Team. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-zelly-text-tertiary hover:text-zelly-text-primary text-sm transition-colors">
                개인정보처리방침
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
