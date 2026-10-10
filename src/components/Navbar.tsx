import React, { useState } from 'react';
import { ArrowRight, Menu, X, Sparkles } from 'lucide-react';
import { LOGO_URL } from '../data/content';

interface NavbarProps {
  onOpenEnquiry: (subject?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FCF9F3]/95 backdrop-blur-md border-b border-[#0D2038]/10 transition-all duration-300">
      <nav aria-label="Main Navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C18A2D] rounded-lg p-1"
        >
          <img
            src={LOGO_URL}
            alt="AnnGillette Tutoring & Learning"
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-[#0D2038]">
          <a
            href="#hero"
            className="relative text-[#C18A2D] hover:text-[#A87522] transition-colors py-2"
          >
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C18A2D] rounded-full"></span>
          </a>
          <a href="#approach" className="hover:text-[#C18A2D] transition-colors py-2">
            Our Approach
          </a>
          <a href="#subjects" className="hover:text-[#C18A2D] transition-colors py-2">
            Subjects &amp; Exams
          </a>
          <a href="#parents" className="hover:text-[#C18A2D] transition-colors py-2">
            For Parents
          </a>
          <a
            href="#platform"
            className="hover:text-[#C18A2D] transition-colors py-2 flex items-center gap-1.5"
          >
            Learning Platform
            <span className="bg-[#DFB15B]/20 text-[#8C5D0D] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
              Soon
            </span>
          </a>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center space-x-3 sm:space-x-4">
          <a
            href="#waitlist"
            className="text-xs md:text-sm font-semibold text-[#0D2038] hover:text-[#C18A2D] transition-colors px-2 py-2"
          >
            Join Waitlist
          </a>
          <button
            type="button"
            onClick={() => onOpenEnquiry()}
            className="inline-flex items-center justify-center gap-2 bg-[#C18A2D] hover:bg-[#A87522] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Enquire About Tutoring</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => onOpenEnquiry()}
            className="bg-[#C18A2D] text-white text-xs font-semibold px-3 py-2 rounded-full"
          >
            Enquire
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0D2038] hover:text-[#C18A2D] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FCF9F3] border-b border-[#0D2038]/10 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#C18A2D] font-bold text-base"
          >
            Home
          </a>
          <a
            href="#approach"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#0D2038] font-semibold text-base"
          >
            Our Approach
          </a>
          <a
            href="#subjects"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#0D2038] font-semibold text-base"
          >
            Subjects &amp; Exams
          </a>
          <a
            href="#parents"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#0D2038] font-semibold text-base"
          >
            For Parents
          </a>
          <a
            href="#platform"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between py-2 text-[#0D2038] font-semibold text-base"
          >
            <span>Learning Platform</span>
            <span className="bg-[#DFB15B]/20 text-[#8C5D0D] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
              Soon
            </span>
          </a>
          <a
            href="#waitlist"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#C18A2D] font-semibold text-base"
          >
            Early Access Waitlist
          </a>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#C18A2D] hover:bg-[#A87522] text-white font-semibold py-3 rounded-full text-sm shadow"
            >
              <span>Enquire About Tutoring</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
