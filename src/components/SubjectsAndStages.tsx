import React, { useState } from 'react';
import { ArrowRight, BookOpen, Check, Layers, Award } from 'lucide-react';
import { SUBJECT_STAGES, SubjectStage } from '../data/content';

interface SubjectsAndStagesProps {
  onOpenEnquiry: (stageTitle?: string) => void;
  onSelectStageForDetails: (stage: SubjectStage) => void;
}

export const SubjectsAndStages: React.FC<SubjectsAndStagesProps> = ({
  onOpenEnquiry,
  onSelectStageForDetails
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredStages =
    selectedFilter === 'all'
      ? SUBJECT_STAGES
      : SUBJECT_STAGES.filter((s) => s.id === selectedFilter);

  return (
    <section className="py-20 lg:py-28 bg-[#FCF9F3]" id="subjects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C18A2D] mb-3">
            Support For Every Stage
          </p>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-[#0D2038] leading-tight mb-4">
            Tailored support for each academic stage.
          </h2>
          <p className="text-base text-[#677484]">
            From early secondary entrance exams to pre-university sixth form masterclasses, our structured curricula foster mastery and composure.
          </p>

          {/* Interactive Filter Pills */}
          <div className="mt-6 inline-flex p-1 bg-white rounded-full border border-[#0D2038]/10 shadow-sm">
            <button
              type="button"
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedFilter === 'all'
                  ? 'bg-[#0D2038] text-white shadow'
                  : 'text-[#677484] hover:text-[#0D2038]'
              }`}
            >
              All Stages
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('11-plus')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedFilter === '11-plus'
                  ? 'bg-[#0D2038] text-white shadow'
                  : 'text-[#677484] hover:text-[#0D2038]'
              }`}
            >
              11+ Primary
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('gcse')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedFilter === 'gcse'
                  ? 'bg-[#0D2038] text-white shadow'
                  : 'text-[#677484] hover:text-[#0D2038]'
              }`}
            >
              GCSE (Y9–11)
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('a-level')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedFilter === 'a-level'
                  ? 'bg-[#0D2038] text-white shadow'
                  : 'text-[#677484] hover:text-[#0D2038]'
              }`}
            >
              A Level (Sixth Form)
            </button>
          </div>
        </div>

        {/* Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredStages.map((stage) => (
            <div
              key={stage.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#0D2038]/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Image Frame */}
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={stage.image}
                  alt={stage.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2038]/50 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-[#0D2038]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {stage.badge}
                </span>

                {/* Exam Boards hint badge on image hover */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-white/90">
                  <span className="bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded">
                    {stage.examBoards.slice(0, 2).join(' · ')}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectStageForDetails(stage);
                    }}
                    className="text-white hover:text-[#DFB15B] font-semibold underline underline-offset-2 text-xs"
                  >
                    View Syllabus
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-title text-2xl text-[#0D2038] font-bold mb-3">
                    {stage.title}
                  </h3>
                  <p className="text-[#677484] text-sm leading-relaxed mb-6">
                    {stage.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 mb-6 pt-2 border-t border-gray-100">
                    {stage.keySkills.slice(0, 2).map((skill, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#0D2038] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#C18A2D] shrink-0" />
                        <span className="truncate">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry(stage.title)}
                    className="inline-flex items-center gap-2 font-bold text-sm text-[#C18A2D] hover:text-[#A87522] transition-colors group/btn cursor-pointer"
                  >
                    <span>Explore {stage.title}</span>
                    <span className="w-6 h-6 rounded-full bg-[#C18A2D]/10 group-hover/btn:bg-[#C18A2D] group-hover/btn:text-white flex items-center justify-center transition-all">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectStageForDetails(stage)}
                    className="text-xs font-semibold text-[#677484] hover:text-[#0D2038]"
                  >
                    Full Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
