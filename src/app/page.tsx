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
    <main className="h-screen flex flex-col bg-white overflow-hidden">
      <div className="flex-1 snap-y snap-mandatory overflow-y-auto">
        <div className="snap-start">
          <EventBanner />
        </div>
        
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>

        <section className="h-screen snap-start">
          <Hero />
        </section>
        
        <Problem />
        <Solution />
        <Emotional />
        
        <div className="snap-start bg-zelly-bg-primary">
          <Footer />
        </div>
      </div>
    </main>
  );
}
