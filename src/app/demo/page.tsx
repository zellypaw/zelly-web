'use client';

import Navbar from '@/components/sections/Navbar';
import AiImageDemo from '@/components/sections/AiImageDemo';

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
