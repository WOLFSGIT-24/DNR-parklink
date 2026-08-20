import React from "react";
import { ArrowRight, Download, MapPin } from "lucide-react";

interface HeroProps {
  onOpenEnquiry: () => void;
  onRequestDownload?: () => void;
}

export default function Hero({ onOpenEnquiry, onRequestDownload }: HeroProps) {
  return (
    <section
      id="overview"
      className="relative w-full min-h-0 lg:min-h-screen pt-[72px] sm:pt-[80px] bg-marble flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-0 md:px-12 w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-6 lg:py-20 relative z-10">
        {/* Left Side: Primary Image */}
        <div className="w-full lg:w-1/2 relative mb-4 lg:mb-0">
          <div className="relative shadow-2xl bg-white p-2 sm:p-3 z-10">
            <img
              src="/hero-bg.png"
              alt="DNR Parklink tower"
              className="w-full h-[58vh] sm:h-auto sm:aspect-[3/4.4] object-cover object-bottom"
            />
            {/* Highlight Box (Mobile overlay) */}
            <div className="lg:hidden absolute bottom-0 translate-y-[65%] left-1/2 -translate-x-1/2 w-[88%] max-w-[290px] bg-navy-primary text-white py-3 px-4 shadow-2xl z-20 rounded-sm border border-white/10 text-center flex flex-col items-center justify-center">
              <div className="font-body text-[16px] font-bold tracking-wider text-champagne uppercase">
                8.35 ACRES
              </div>
              <div className="text-[9px] text-white/70 font-semibold font-body leading-tight mt-0.5 uppercase tracking-widest">
                Expansive Residential Community
              </div>
            </div>
          </div>

          <div className="lg:hidden mt-16 mx-4 p-4 bg-white rounded-lg border border-navy-primary/10 shadow-lg flex items-center justify-between text-left">
            <div className="space-y-1 pr-2">
              <div className="text-[13px] font-extrabold text-[#5c4a41] uppercase tracking-wider font-body">
                Premium 2.5 & 3 BHK Homes
              </div>
              <div className="text-[14px] font-extrabold text-[#5c4a41]/70 uppercase tracking-tight font-body leading-none py-0.5">
                784 Residences
              </div>
            </div>

            <div className="h-8 w-[1px] bg-charcoal/20 mx-4" />

            <div className="flex items-center gap-1.5 font-body shrink-0">
              <MapPin className="h-4 w-4 text-[#5c4a41] shrink-0" />
              <span className="text-[16px] font-bold text-[#5c4a41]/80 uppercase tracking-widest">
                Hennur - Baglur
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left relative z-20 px-6 md:px-0">
          <div className="flex flex-row items-start justify-between w-full gap-4 mb-6">
            <div className="flex-1">
              <span className="font-body text-[10px] sm:text-xs font-bold tracking-widest text-navy-primary/60 uppercase mb-4 block animate-fade-in">
                DNR PARKLINK • HENNUR – BAGALUR MAIN ROAD
              </span>
              <h1 className="hidden sm:block font-display text-[25px] sm:text-5xl md:text-5xl text-navy-primary font-bold tracking-tight leading-[1.15] mb-2 animate-fade-in">
                Your First Premium Home Should Never Be a Compromise.
              </h1>
              <p className="hidden lg:block font-body text-lg text-navy-primary/80 mb-2 animate-fade-in delay-100 leading-relaxed max-w-xl">
                Introducing DNR Parklink — an expansive residential community spread across 8.35 acres, featuring 784 thoughtfully designed residences, 70% open spaces and a lavish 40,000 sq. ft. clubhouse. Experience spacious homes, well-ventilated interiors, lush landscaping and a thoughtfully planned lifestyle in North Bengaluru.
              </p>
            </div>
          </div>

          {/* Highlights Box (Desktop) */}
          <div className="hidden lg:block mt-6 bg-navy-primary text-white py-4 px-5 relative transform hover:-translate-y-1 transition-transform duration-300 w-full max-w-[280px] shadow-2xl animate-slide-up delay-300 mb-8 rounded-sm border border-white/5">
            <div className="font-display text-3xl font-bold mb-1 text-champagne leading-tight">
              8.35 ACRES
            </div>
            <div className="text-[10px] text-champagne uppercase tracking-widest font-extrabold mb-0.5">
              Expansive Residential Community
            </div>
            <div className="border-t border-white/10 pt-2 mt-2">
              <div className="font-display text-xl font-bold tracking-wider text-white/90 uppercase">
                40,000 SQ. FT.
              </div>
              <div className="text-[9px] text-white/70 font-bold tracking-widest font-body uppercase mt-0.5">
                Clubhouse & Amenities
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-400 w-full sm:w-auto relative z-30">
            <button
              onClick={onOpenEnquiry}
              className="flex items-center justify-center gap-2 bg-navy-dark text-white font-body text-xs font-bold tracking-widest uppercase px-8 py-4.5 hover:bg-navy-primary transition-colors shadow-lg w-full sm:w-auto rounded-sm"
            >
              BOOK A SITE VISIT
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Secondary Tilted Image (Bottom Right) */}
          <div className="hidden xl:block absolute -right-20 -bottom-16 w-56 h-64 transform rotate-6 shadow-2xl bg-white p-2.5 z-10 hover:rotate-2 transition-transform duration-700 pointer-events-none">
            <img
              src="/kidsplay.png"
              alt="Kids playing at DNR Parklink"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
