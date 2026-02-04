'use client';

import Navbar from '@/components/sections/Navbar';
import AiImageDemo from '@/components/sections/AiImageDemo';
import Footer from '@/components/sections/Footer';

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-mesh relative overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
      
      {/* Background Blobs for extra depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zelly-pink/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zelly-blue/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <Navbar />
      <div className="relative z-10 pt-24 pb-12">
        <AiImageDemo />
      </div>

      <Footer />
    </main>
  );
}
