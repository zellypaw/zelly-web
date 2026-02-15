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
        <div className="h-screen flex flex-col snap-start">
          <Navbar />
          <Hero />
        </div>
        <div className="snap-start">
          <Problem />
        </div>
        <div className="snap-start">
          <Solution />
        </div>
        <div className="snap-start">
          <Emotional />
        </div>
        <div className="snap-start bg-zelly-bg-primary">
          <Footer />
        </div>
      </div>
    </main>
  );
}
