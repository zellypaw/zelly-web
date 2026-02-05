/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { Mail, MapPin, Copy, Check } from 'lucide-react';
import Script from 'next/script';
import SubPageHeader from '@/components/SubPageHeader';

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
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID || ''}&submodules=geocoder`}
        onLoad={() => {
          if (window.naver && window.naver.maps) {
            const mapOptions = {
              center: new window.naver.maps.LatLng(37.7302, 127.0458),
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
      <SubPageHeader />

      <main className="pt-20 sm:pt-32 pb-12 px-6 sm:px-8 lg:px-10 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-16 items-stretch">
          {/* Contact Info */}
          <div className="lg:col-span-2 pt-1 pl-2 lg:pl-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 tracking-tight">Contact us</h1>
            <p className="text-zelly-text-secondary text-base md:text-lg mb-6 md:mb-12 leading-relaxed">
              Zelly 팀에게 궁금한 점이 있으신가요?<br />
              무엇이든 편하게 문의해 주세요.
            </p>

            <div className="space-y-4 md:space-y-8">
              <div className="group">
                <div className="flex items-center gap-3 text-zelly-pink mb-2">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm font-bold uppercase tracking-wider">Email</span>
                </div>
                <a 
                  href="mailto:zellypaw@gmail.com" 
                  className="text-base md:text-lg text-zelly-text-secondary hover:text-zelly-pink transition-colors leading-relaxed"
                >
                  zellypaw@gmail.com
                </a>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 text-zelly-pink mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-bold uppercase tracking-wider">Office</span>
                </div>
                <p className="text-base md:text-lg text-zelly-text-secondary leading-relaxed mb-2 md:mb-4">
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
            <div className="aspect-square md:aspect-auto lg:h-full bg-slate-100 rounded-2xl md:rounded-[2rem] overflow-hidden border border-zelly-border shadow-2xl shadow-black/5 relative">
              <div id="map" className="w-full h-full min-h-[400px]"></div>
              
              {/* Overlay for small guide */}
              <div className="absolute top-4 left-4 right-4 lg:right-auto lg:max-w-xs bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/20 shadow-lg pointer-events-none z-10">
                <p className="text-[10px] md:text-xs text-zelly-pink font-bold uppercase mb-0.5 md:mb-1 text-center lg:text-left">Location</p>
                <p className="text-xs md:text-sm font-semibold text-zelly-text-primary text-center lg:text-left lg:whitespace-nowrap">
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
      maps: any;
    };
  }
}
