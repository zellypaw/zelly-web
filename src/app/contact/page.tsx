'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Mail, MapPin, Copy, Check } from 'lucide-react';
import Script from 'next/script';

export default function ContactPage() {
  const [copied, setCopied] = React.useState(false);
  const address = "경기도 의정부시 망월로 18-16 경기창업혁신공간 북부권 305호";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-zelly-text-primary selection:bg-zelly-pink/20">
      {/* Naver Maps Script */}
      {/* Note: In a real production environment, you should replace 'YOUR_CLIENT_ID' with your actual Naver Cloud Client ID */}
      <Script 
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID || 'ncpKeyId'}&submodules=geocoder`}
        onLoad={() => {
          if (window.naver && window.naver.maps) {
            const mapOptions = {
              center: new window.naver.maps.LatLng(37.7302, 127.0458), // Approximate coordinates for the address
              zoom: 16,
              zoomControl: false,
              mapTypeControl: false,
              
            };
            const map = new window.naver.maps.Map('map', mapOptions);
            
            new window.naver.maps.Marker({
              position: new window.naver.maps.LatLng(37.7302, 127.0458),
              map: map,
              icon: {
                content: `
                  <div style="background: #FF1C69; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 10px rgba(255,28,105,0.5);"></div>
                `,
                anchor: new window.naver.maps.Point(6, 6)
              }
            });
          }
        }}
      />

      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-zelly-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <div className="flex-1 flex justify-start">
            <Link 
              href="/" 
              className="flex items-center gap-1 text-zelly-text-secondary hover:text-zelly-text-primary transition-colors group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
              <span className="text-sm font-medium hidden sm:block">돌아가기</span>
            </Link>
          </div>
          
          <div className="flex-shrink-0 flex items-center justify-center">
            <Image 
              src="/assets/ZELLY.svg" 
              alt="ZELLY" 
              width={80} 
              height={24} 
              className="h-6 w-auto"
            />
          </div>

          <div className="flex-1" />
        </div>
      </nav>

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-stretch">
          {/* Contact Info */}
          <div className="lg:col-span-2 pt-1 pl-2 lg:pl-4">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">Contact us</h1>
            <p className="text-zelly-text-secondary text-lg mb-12 leading-relaxed">
              Zelly 팀에게 궁금한 점이 있으신가요?<br />
              무엇이든 편하게 문의해 주세요.
            </p>

            <div className="space-y-8">
              <div className="group">
                <div className="flex items-center gap-3 text-zelly-pink mb-2">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm font-bold uppercase tracking-wider">Email</span>
                </div>
                <a 
                  href="mailto:zellypaw@gmail.com" 
                  className="text-lg text-zelly-text-secondary hover:text-zelly-pink transition-colors leading-relaxed"
                >
                  zellypaw@gmail.com
                </a>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 text-zelly-pink mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-bold uppercase tracking-wider">Office</span>
                </div>
                <p className="text-lg text-zelly-text-secondary leading-relaxed mb-4">
                  경기도 의정부시 망월로 18-16<br />
                  경기창업혁신공간 북부권 305호
                </p>
                <button 
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 py-1 text-xs font-medium text-zelly-text-tertiary hover:text-zelly-text-primary transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-500" />
                      <span>복사 완료</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>주소 복사하기</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-3 relative">
            <div className="aspect-square lg:aspect-auto lg:h-full bg-slate-100 rounded-[2rem] overflow-hidden border border-zelly-border shadow-2xl shadow-black/5 relative">
              <div id="map" className="w-full h-full min-h-[400px]"></div>
              
              {/* Overlay for small guide */}
              <div className="absolute top-6 left-6 right-6 lg:right-auto lg:max-w-xs bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg pointer-events-none z-10">
                <p className="text-xs text-zelly-pink font-bold uppercase mb-1 text-center lg:text-left">Location</p>
                <p className="text-sm font-semibold text-zelly-text-primary text-center lg:text-left lg:whitespace-nowrap">
                  경기창업혁신공간 북부권(의정부)
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center border-t border-slate-50">
        <p className="text-slate-400 text-xs tracking-widest uppercase">© 2026 Zelly Team</p>
      </footer>
    </div>
  );
}

declare global {
  interface Window {
    naver: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      maps: any;
    };
  }
}
