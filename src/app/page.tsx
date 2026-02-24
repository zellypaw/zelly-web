import { Metadata } from 'next';
import EventBanner from '@/components/sections/EventBanner';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import Emotional from '@/components/sections/Emotional';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function LandingPage() {
  return (
    <main className="bg-white min-h-full">
      <div className="snap-start snap-always h-0" /> {/* Invisible anchor for the very top */}
      <EventBanner />
      
      <div className="relative md:sticky md:top-0 z-50 md:h-0">
        <Navbar />
      </div>

      <Hero />
      
      <Problem />
      <Solution />
      <Emotional />
      
      <div className="snap-start snap-always bg-zelly-bg-primary">
        <Footer />
      </div>
    </main>
  );
}
