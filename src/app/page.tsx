import { Suspense } from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import Emotional from '@/components/sections/Emotional';
import LeadForm from '@/components/sections/LeadForm';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function LandingPage() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth bg-white">
      <Navbar />
      
      <Hero />
      <Problem />
      <Solution />
      <Emotional />
      <div className="snap-start bg-zelly-bg-primary min-h-screen md:h-screen flex flex-col">
        <Suspense>
          <LeadForm />
        </Suspense>
        <Footer />
      </div>
    </main>
  );
}
