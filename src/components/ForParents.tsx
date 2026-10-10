import React, { useState } from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, HelpCircle } from 'lucide-react';

interface ForParentsProps {
  onOpenEnquiry: (subject?: string) => void;
}

export const ForParents: React.FC<ForParentsProps> = ({ onOpenEnquiry }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const parentInsights = [
    {
      step: '01',
      title: 'Clearer Progress',
      summary: 'Objective feedback on syllabus coverage, mock test scores, and qualitative growth without confusing jargon.',
      deepDive: 'Weekly lesson recaps delivered with concrete next actions. You always know what topics are consolidated and what needs reinforcement before mock terms.'
    },
    {
      step: '02',
      title: 'Personalised Support',
      summary: "Every child learns at a unique tempo. We adjust pacing and focus areas as your child's confidence blossoms.",
      deepDive: 'Rather than rigid rote drills, our tutors adapt explanations to your child’s cognitive style—turning math apprehension or essay hesitation into genuine pride.'
    },
    {
      step: '03',
      title: 'Open Communication',
      summary: 'Direct access to lesson recaps, upcoming target milestones, and open dialogues before critical school exam terms.',
      deepDive: 'Quarterly review check-ins, straightforward diagnostic assessments, and responsive tutor messages keep your family aligned and free of anxiety.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-[#0D2038]/5" id="parents">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0D2038] via-[#142944] to-[#081424] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          {/* Compass Star Watermark Background Motif */}
          <div className="absolute -right-16 -bottom-16 w-96 h-96 opacity-10 pointer-events-none text-[#DFB15B]">
            <svg fill="currentColor" viewBox="0 0 100 100">
              <polygon points="50 0, 62 38, 100 50, 62 62, 50 100, 38 62, 0 50, 38 38" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C18A2D] mb-3">
              Partnership In Education
            </p>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
              Know where your child stands.
            </h2>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-10 font-normal">
              Understand what your child is doing well, where they need targeted support, and what comes next. No guesswork, just clear guidance.
            </p>
          </div>

          {/* 3 Pillars Grid for Parents */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10 pt-4">
            {parentInsights.map((insight, idx) => (
              <div
                key={insight.step}
                onClick={() => setActiveTab(idx)}
                className={`rounded-2xl p-6 border transition-all duration-300 cursor-pointer ${
                  activeTab === idx
                    ? 'bg-white/15 border-[#C18A2D] shadow-lg ring-1 ring-[#C18A2D]'
                    : 'bg-white/10 border-white/15 hover:bg-white/15'
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-[#C18A2D]/30 text-[#DFB15B] flex items-center justify-center font-bold text-lg mb-4">
                  {insight.step}
                </div>
                <h3 className="font-serif-title text-xl font-bold mb-2 text-white">
                  {insight.title}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed mb-3">
                  {insight.summary}
                </p>
                {activeTab === idx && (
                  <p className="text-xs text-[#DFB15B] pt-2 border-t border-white/10 leading-normal">
                    {insight.deepDive}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Action Strip */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
            <div>
              <p className="font-semibold text-white">Want to discuss your child's specific academic goals?</p>
              <p className="text-sm text-white/70">Our academic advisors provide transparent recommendations.</p>
            </div>
            <button
              type="button"
              onClick={() => onOpenEnquiry('Parent Consultation')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C18A2D] hover:bg-[#A87522] text-white font-semibold px-6 py-3 rounded-full text-sm shadow transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer shrink-0"
            >
              <span>Enquire About Tutoring</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
