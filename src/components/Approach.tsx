import React, { useState } from 'react';
import { GraduationCap, ClipboardCheck, BarChart3, Star, ChevronDown, Check } from 'lucide-react';

interface Pillar {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

export const Approach: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string | null>(null);

  const pillars: Pillar[] = [
    {
      id: 'pillar-1',
      icon: <GraduationCap className="w-7 h-7 text-[#C18A2D]" />,
      title: 'Learn with expert support',
      description: "Personalised 1:1 tutoring tailored to each student's learning pace, natural strengths and immediate challenges.",
      details: [
        'Diagnostic assessment to pinpoint knowledge gaps',
        'Direct 1:1 attention without classroom distractions',
        'DBS-verified subject specialists with teaching pedigrees'
      ]
    },
    {
      id: 'pillar-2',
      icon: <ClipboardCheck className="w-7 h-7 text-[#C18A2D]" />,
      title: 'Practise with purpose',
      description: 'Targeted homework, curriculum-aligned revision, and deliberate exam-style question practice to build retention.',
      details: [
        'Curated question banks aligned to specific exam boards',
        'Step-by-step model answers and mark-scheme breakdowns',
        'Spaced repetition techniques for enduring memory'
      ]
    },
    {
      id: 'pillar-3',
      icon: <BarChart3 className="w-7 h-7 text-[#C18A2D]" />,
      title: 'See the progress',
      description: 'Clear feedback and regular structured updates for parents and students so results are measured and evident.',
      details: [
        'Objective weekly tracking of topic mastery',
        'Transparent parent dashboard and summary notes',
        'Confidence tracking alongside test score milestones'
      ]
    },
    {
      id: 'pillar-4',
      icon: <Star className="w-7 h-7 text-[#C18A2D] fill-[#C18A2D]/20" />,
      title: "Prepare for what's next",
      description: "Cultivate critical thinking, self-discipline and test stamina for 11+, GCSEs, A Levels and university admission.",
      details: [
        'Timed mock examination simulations',
        'Stress management and exam hall composure strategies',
        'Independent study frameworks that last through university'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white border-y border-[#0D2038]/5" id="approach">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C18A2D] mb-3">
            The Ann Gillette Approach
          </p>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-[#0D2038] leading-tight mb-4">
            More than a lesson. A path to progress.
          </h2>
          <p className="text-base sm:text-lg text-[#677484] leading-relaxed">
            We combine expert teaching with purposeful practice and clear feedback to help students build understanding, confidence and independence.
          </p>
        </div>

        {/* Four Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => {
            const isExpanded = activePillar === pillar.id;

            return (
              <div
                key={pillar.id}
                className={`bg-[#FCF9F3] rounded-3xl p-7 border transition-all duration-300 flex flex-col group cursor-pointer ${
                  isExpanded
                    ? 'border-[#C18A2D] shadow-lg bg-white ring-2 ring-[#C18A2D]/10'
                    : 'border-[#0D2038]/5 shadow-sm hover:shadow-md hover:border-[#C18A2D]/40 hover:-translate-y-1'
                }`}
                onClick={() => setActivePillar(isExpanded ? null : pillar.id)}
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#C18A2D]/20 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 group-hover:border-[#C18A2D] transition-all">
                  {pillar.icon}
                </div>

                <h3 className="font-serif-title text-xl text-[#0D2038] font-bold mb-3">
                  {pillar.title}
                </h3>

                <p className="text-sm text-[#677484] leading-relaxed mb-4">
                  {pillar.description}
                </p>

                {/* Interactive Expandable Insight */}
                <div className="mt-auto pt-3 border-t border-[#0D2038]/5">
                  <button
                    type="button"
                    className="inline-flex items-center justify-between w-full text-xs font-bold text-[#C18A2D] group-hover:text-[#A87522] focus:outline-none"
                  >
                    <span>{isExpanded ? 'Hide methodology' : 'See how it works'}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="mt-3 space-y-2 pt-2 border-t border-dashed border-[#C18A2D]/20">
                      {pillar.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#0D2038]">
                          <Check className="w-3.5 h-3.5 text-[#C18A2D] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
