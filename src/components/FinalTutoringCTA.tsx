import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FinalTutoringCTAProps {
  onOpenEnquiry: () => void;
}

export const FinalTutoringCTA: React.FC<FinalTutoringCTAProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="py-20 lg:py-24 bg-[#FCF9F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0D2038] via-[#142B49] to-[#0D2038] rounded-3xl p-8 sm:p-14 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">
          {/* Subtle star glow */}
          <div className="absolute top-0 right-1/3 w-64 h-64 bg-[#DFB15B]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-xl text-center md:text-left relative z-10">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C18A2D] mb-2">
              Their Next Chapter Starts Here
            </p>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
              Give your child the support to go further.
            </h2>
            <p className="text-white/80 text-sm sm:text-base font-normal">
              Explore personalised tutoring and exam preparation with AnnGillette. Enquire today to secure optimal term availability.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto relative z-10">
            <button
              type="button"
              onClick={onOpenEnquiry}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C18A2D] hover:bg-[#A87522] active:scale-[0.98] text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-md transition-all text-center cursor-pointer"
            >
              <span>Enquire About Tutoring</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#waitlist"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all text-center"
            >
              Get Updates on Our Platform
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
