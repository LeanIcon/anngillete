import React from 'react';
import { ArrowRight, Users, TrendingUp, Star, CheckCircle2, Sparkles } from 'lucide-react';
import { HERO_IMAGE_URL } from '../data/content';

interface HeroProps {
  onOpenEnquiry: (subject?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24" id="hero">
      {/* Subtle Background Glow Circles */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#DFB15B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#EAF4FA] rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-8 text-left z-10">
            <div className="space-y-4">
              <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl text-[#0D2038] leading-[1.12] tracking-tight">
                Build confidence.<br />
                Unlock potential.<br />
                <span className="italic font-normal text-[#C18A2D]">Go further.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#677484] max-w-xl leading-relaxed pt-2 font-normal">
                Expert tutoring, personalised exam preparation and progress you can see. Tailored 1:1 academic guidance designed for student independence.
              </p>
            </div>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-1">
              <button
                type="button"
                onClick={() => onOpenEnquiry()}
                className="inline-flex items-center justify-center gap-2.5 bg-[#C18A2D] hover:bg-[#A87522] active:scale-[0.98] text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Enquire About Tutoring</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#approach"
                className="inline-flex items-center justify-center border-2 border-[#0D2038]/20 hover:border-[#0D2038] text-[#0D2038] font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-200 hover:bg-[#0D2038]/5"
              >
                Explore Our Approach
              </a>
            </div>

            {/* Value Props Row Matching Prototype */}
            <div className="pt-6 border-t border-[#0D2038]/10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {/* Prop 1 */}
              <div className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-white/60 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#C18A2D]/10 flex items-center justify-center shrink-0 text-[#C18A2D]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-[#0D2038] leading-tight">Personalised</p>
                  <p className="text-xs text-[#677484]">1:1 tutoring</p>
                </div>
              </div>

              {/* Prop 2 */}
              <div className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-white/60 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#C18A2D]/10 flex items-center justify-center shrink-0 text-[#C18A2D]">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-[#0D2038] leading-tight">Focused exam</p>
                  <p className="text-xs text-[#677484]">preparation</p>
                </div>
              </div>

              {/* Prop 3 */}
              <div className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-white/60 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#C18A2D]/10 flex items-center justify-center shrink-0 text-[#C18A2D]">
                  <Star className="w-5 h-5 fill-[#C18A2D]/30" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-[#0D2038] leading-tight">Ongoing</p>
                  <p className="text-xs text-[#677484]">progress support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Right Column Visual Component */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Decorative Golden Star Elements */}
              <div className="absolute -top-6 -right-4 w-12 h-12 text-[#DFB15B] animate-pulse pointer-events-none drop-shadow-sm">
                <svg fill="currentColor" viewBox="0 0 100 100">
                  <polygon points="50 0, 62 38, 100 50, 62 62, 50 100, 38 62, 0 50, 38 38" />
                </svg>
              </div>
              <div className="absolute top-1/4 -left-6 w-8 h-8 text-[#DFB15B]/50 pointer-events-none">
                <svg fill="currentColor" viewBox="0 0 100 100">
                  <polygon points="50 0, 62 38, 100 50, 62 62, 50 100, 38 62, 0 50, 38 38" />
                </svg>
              </div>

              {/* Main Hero Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-[#0D2038]/10 group">
                <img
                  src={HERO_IMAGE_URL}
                  alt="Young student smiling confidently while studying"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2038]/70 via-transparent to-transparent pointer-events-none" />

                {/* Floating Badge on Image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-white/60 flex items-center gap-3 transform transition-transform duration-300 group-hover:translate-y-[-2px]">
                  <div className="w-10 h-10 rounded-full bg-[#C18A2D] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#C18A2D]">
                      Inspiring Academic Growth
                    </p>
                    <p className="text-sm font-bold text-[#0D2038]">
                      Personalised 1:1 Mentorship
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
