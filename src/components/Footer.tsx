import React from 'react';
import { LOGO_URL } from '../data/content';

interface FooterProps {
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  return (
    <footer className="bg-[#081424] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Information (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white/95 p-3 rounded-2xl inline-block shadow-sm">
              <img
                src={LOGO_URL}
                alt="AnnGillette Tutoring and Learning"
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              Personalised tutoring and exam preparation. Building confidence, unlocking academic potential and providing paths to measurable progress.
            </p>
            <div className="pt-2 text-xs text-[#DFB15B] font-semibold tracking-wider uppercase">
              Tutoring • Learning • Brighter Futures
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#DFB15B]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#approach" className="hover:text-white transition-colors">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#subjects" className="hover:text-white transition-colors">
                  11+ Preparation
                </a>
              </li>
              <li>
                <a href="#subjects" className="hover:text-white transition-colors">
                  GCSE Tutoring
                </a>
              </li>
              <li>
                <a href="#subjects" className="hover:text-white transition-colors">
                  A Level Tutoring
                </a>
              </li>
            </ul>
          </div>

          {/* Digital Platform Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#DFB15B]">
              Digital Platform
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#platform" className="hover:text-white transition-colors">
                  Platform Overview
                </a>
              </li>
              <li>
                <a href="#platform" className="hover:text-white transition-colors">
                  Web App Experience
                </a>
              </li>
              <li>
                <a href="#platform" className="hover:text-white transition-colors">
                  Mobile App Practice
                </a>
              </li>
              <li>
                <a
                  href="#waitlist"
                  className="hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <span>Join Waitlist</span>
                  <span className="text-[10px] bg-[#DFB15B] text-[#0D2038] px-1.5 py-0.5 rounded font-bold">
                    Open
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Safeguarding & Contact (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#DFB15B]">
              Enquiries &amp; Care
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              All AnnGillette tutors are verified, DBS-checked, and committed to exemplary safeguarding standards.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="text-xs font-bold text-[#DFB15B] hover:text-white underline underline-offset-4 cursor-pointer"
              >
                Make an Enquiry →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer / Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {new Date().getFullYear()} AnnGillette Tutoring. All rights reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-white/80 cursor-pointer">Safeguarding Policy</span>
            <span className="hover:text-white/80 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white/80 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
