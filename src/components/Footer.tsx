import React from "react";
import { projectSnapshot } from "../data";

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export default function Footer({ onOpenPrivacy, onOpenTerms }: FooterProps = {}) {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-navy-primary text-white border-t border-white/10 py-10 relative overflow-hidden font-body">
      {/* Radial warm lighting backdrop overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(254,214,91,0.02),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-8">
          
          {/* Left Column: Logo & Address */}
          <div className="md:col-span-5 space-y-6">
            <img
              src="/combo-logo.png"
              alt="DNR Group Logo"
              className="max-h-12 w-auto object-contain brightness-0 invert"
            />
            <div className="space-y-2 text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm">
              <p>DNR Parklink by DNR Group</p>
              <p>Hennur Bagalur Main Rd (New Airport Rd)<br />Chikkagubbi Village, Bengaluru<br />Karnataka 560077</p>
              <p className="italic text-gold/80 pt-2">Rooted in convenience. Blossoming in value.</p>
            </div>
          </div>

          {/* Middle Column: Navigate */}
          <div className="md:col-span-3 space-y-4">
            <span className="font-body text-[10px] font-bold text-gold uppercase tracking-[0.2em] block">
              Navigate
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/60">
              {[
                { label: "Overview", id: "overview" },
                { label: "Master Plan", id: "floor-plans" },
                { label: "Amenities", id: "amenities" },
                { label: "Location", id: "location" },
                { label: "Enquire", id: "lead-capture-section" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollTo(link.id)}
                    className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: CTA & Contact */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="font-display text-xl sm:text-2xl text-white font-medium leading-snug">
              Begin your journey to <br />
              <span className="italic text-gold">uncompromised living.</span>
            </h3>

            <div className="space-y-2">
              <span className="font-body text-[10px] font-bold text-gold uppercase tracking-[0.2em] block">
                Contact
              </span>
              <p className="text-sm font-bold text-white tracking-wider">
                <a href="tel:07019448585" className="hover:text-gold transition-colors">07019448585</a>
              </p>
              <p className="text-sm font-bold text-white tracking-wider mt-1">
                <a href="mailto:Hello@therealconnect.co.in" className="hover:text-gold transition-colors">Hello@therealconnect.co.in</a>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleScrollTo("lead-capture-section")}
                className="border border-gold/40 text-gold font-body text-[10px] font-bold tracking-widest uppercase px-6 py-3.5 hover:bg-gold hover:text-navy-dark transition-all rounded-sm cursor-pointer"
              >
                Book a Private Tour
              </button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] bg-white/10 w-full mb-6" />

        {/* Legal & Compliance bottom section */}
        <div className="space-y-8 text-xs text-white/50 leading-relaxed">
          
          {/* Legal & Compliance copy */}
          <div className="space-y-3">
            <details className="group cursor-pointer">
              <summary className="font-body text-[10px] font-bold text-gold uppercase tracking-[0.2em] flex items-center gap-2 focus:outline-none">
                Compliance & Legal Disclaimer
                <svg className="w-3 h-3 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="pt-3">
                <p className="max-w-full text-[10px] text-white/40 leading-relaxed text-justify">
                  Disclaimer: The images, renders, floor plans, and other details shown herein are only indicative and for representational purposes. The Promoter / Developer reserves the right to change any or all of these in the interest of the development, as per applicable provisions of law. Artist's impressions are used to illustrate amenities, specifications, lifestyle imagery, and other details. A tolerance of +/- 3% is possible in the unit areas on account of design and construction variances. All brands, fittings, and fixtures shown are subject to final decision of the project architect and developer. This electronic / printed material does not constitute an offer and/or contract of any type between the Developer and the recipient. No booking or allotment shall be deemed to have been made on the basis of this electronic / printed material. Any purchaser / lessee of this development shall be governed by the terms and conditions of the agreement for sale / lease entered into between the parties, and no details mentioned in this material shall in any way govern such transactions unless as may be otherwise expressly provided in the agreement for sale / lease by the Developer. The Developer does not warrant or assume any liability or responsibility for the accuracy or completeness of any information contained herein. DNR Parklink is registered under the Real Estate (Regulation and Development) Act, 2016. RERA Registration No: <strong className="text-white/60">{projectSnapshot.rera}</strong>. You are required to verify all the details — including area, amenities, services, terms of sales and payments, and other relevant terms — independently with the Developer's authorised sales team only, by physically visiting the project site and the authorised website of RERA Karnataka at <a href="https://rera.karnataka.gov.in/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/80">rera.karnataka.gov.in</a>. You are requested NOT to visit any unauthorised or unverified website, broker (online / offline) to receive any information about DNR Parklink or its sister concerns. This website is operated by The Real Connect, an authorised channel sales partner for DNR Parklink. Marketing and sales support is provided solely in an authorised capacity. The Real Connect and its associates shall not be liable for any misrepresentation or discrepancies arising from information shared through unofficial or unauthorised channels.
                </p>
              </div>
            </details>
          </div>

          {/* Privacy & copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-white/5 text-[11px]">
            <div>
              <p>© {new Date().getFullYear()} DNR Group. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={(e) => { e.preventDefault(); onOpenPrivacy?.(); }}
                className="hover:text-white underline cursor-pointer focus:outline-none"
              >
                Privacy Policy
              </button>
              <span>|</span>
              <button 
                onClick={(e) => { e.preventDefault(); onOpenTerms?.(); }}
                className="hover:text-white underline cursor-pointer focus:outline-none"
              >
                Terms & Conditions
              </button>
            </div>
          </div>

          {/* Authorized Sales Partner Branding */}
          <div className="pt-4 border-t border-white/5 space-y-1">
            <span className="font-body text-[10px] font-bold text-gold uppercase tracking-[0.2em] block mb-1">
              Authorized Sales Partner
            </span>

            <p className="text-[11px] text-white/60">
              This website is operated by an authorized marketing partner for DNR Group.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
