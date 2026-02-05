'use client';

import Navbar from '@/components/sections/Navbar';

export default function SurveyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Tally Survey Embed Container */}
      <div className="pt-[60px] h-screen w-full">
        <iframe 
          data-tally-src="https://tally.so/r/WORAGk?transparentBackground=1"
          width="100%" 
          height="100%" 
          frameBorder="0" 
          marginHeight={0} 
          marginWidth={0} 
          title="ZELLY 수요조사"
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Script to handle Tally embedding if needed (Tally often works best with their loader script) */}
      <script async src="https://tally.so/widgets/embed.js"></script>
    </main>
  );
}
