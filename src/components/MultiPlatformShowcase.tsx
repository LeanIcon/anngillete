import React from 'react';
import { ArrowRight, Monitor, Smartphone, Check } from 'lucide-react';

interface MultiPlatformShowcaseProps {
  onJoinWaitlist: () => void;
}

export const MultiPlatformShowcase: React.FC<MultiPlatformShowcaseProps> = ({ onJoinWaitlist }) => {
  return (
    <section className="py-20 bg-white border-b border-[#0D2038]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C18A2D] mb-3">
            Multi-Platform Design
          </p>
          <h2 className="font-serif-title text-3xl sm:text-4xl text-[#0D2038] mb-3">
            Your learning journey, wherever you are.
          </h2>
          <p className="text-[#677484] text-base leading-relaxed">
            An upcoming digital experience designed to connect tutoring, independent practice and progress in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Web App Panel */}
          <div className="bg-[#FCF9F3] rounded-3xl p-8 border border-[#0D2038]/10 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C18A2D] bg-[#C18A2D]/10 px-3 py-1 rounded-full">
                  In Development
                </span>
                <span className="text-xs text-[#677484] flex items-center gap-1 font-semibold">
                  <Monitor className="w-3.5 h-3.5" />
                  Browser &amp; Desktop
                </span>
              </div>
              <h3 className="font-serif-title text-2xl font-bold text-[#0D2038] mb-2">
                AnnGillette Web App
              </h3>
              <p className="text-sm text-[#677484] leading-relaxed mb-6">
                For students, parents and tutors to access in-depth revision modules, comprehensive performance analytics, and structured session recaps.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-[#0D2038]/5 shadow-inner">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#677484] pb-3 border-b border-gray-100">
                <span className="font-semibold text-[#0D2038]">Features:</span>
                <span>Deep analysis</span>
                <span>•</span>
                <span>Exam banks</span>
                <span>•</span>
                <span>Homework upload</span>
              </div>
              <div className="pt-3 flex items-center justify-between text-xs font-medium text-[#0D2038]">
                <span>Available soon across Mac, PC &amp; Tablets</span>
                <button
                  type="button"
                  onClick={onJoinWaitlist}
                  className="text-[#C18A2D] font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Get Notified</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile App Panel */}
          <div className="bg-[#FCF9F3] rounded-3xl p-8 border border-[#0D2038]/10 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C18A2D] bg-[#C18A2D]/10 px-3 py-1 rounded-full">
                  In Development
                </span>
                <span className="text-xs text-[#677484] flex items-center gap-1 font-semibold">
                  <Smartphone className="w-3.5 h-3.5" />
                  iOS &amp; Android
                </span>
              </div>
              <h3 className="font-serif-title text-2xl font-bold text-[#0D2038] mb-2">
                AnnGillette Mobile App
              </h3>
              <p className="text-sm text-[#677484] leading-relaxed mb-6">
                Fast, focused 10-minute daily practice sessions, flash revision cards, and push reminders for upcoming tutoring schedules.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-[#0D2038]/5 shadow-inner">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#677484] pb-3 border-b border-gray-100">
                <span className="font-semibold text-[#0D2038]">Features:</span>
                <span>Daily streaks</span>
                <span>•</span>
                <span>Quick quizzes</span>
                <span>•</span>
                <span>Tutor chat</span>
              </div>
              <div className="pt-3 flex items-center justify-between text-xs font-medium text-[#0D2038]">
                <span>Early iOS and Android test flights</span>
                <button
                  type="button"
                  onClick={onJoinWaitlist}
                  className="text-[#C18A2D] font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Request Invite</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
