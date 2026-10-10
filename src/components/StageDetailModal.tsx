import React from 'react';
import { X, Check, Award, BookOpen, ArrowRight } from 'lucide-react';
import { SubjectStage } from '../data/content';

interface StageDetailModalProps {
  stage: SubjectStage | null;
  onClose: () => void;
  onEnquireStage: (stageTitle: string) => void;
}

export const StageDetailModal: React.FC<StageDetailModalProps> = ({
  stage,
  onClose,
  onEnquireStage,
}) => {
  if (!stage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#0D2038]/80 backdrop-blur-sm overflow-y-auto h-full w-full p-4 flex items-center justify-center animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#0D2038]/10 text-[#343B45]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-[#677484] hover:text-[#0D2038] p-1.5 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <span className="bg-[#0D2038] text-white text-xs font-bold px-3 py-1 rounded-full">
            {stage.badge}
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-[#C18A2D]">
            Curriculum Breakdown
          </span>
        </div>

        <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#0D2038] mb-3">
          {stage.title}
        </h3>
        <p className="text-sm text-[#677484] leading-relaxed mb-6">
          {stage.description}
        </p>

        {/* 2-column detailed breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          <div className="bg-[#FCF9F3] p-4 rounded-2xl border border-[#0D2038]/5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D2038] mb-2.5 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#C18A2D]" />
              Core Competencies &amp; Skills
            </h4>
            <ul className="space-y-2 text-xs text-[#0D2038]">
              {stage.keySkills.map((skill, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C18A2D] shrink-0 mt-0.5" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#FCF9F3] p-4 rounded-2xl border border-[#0D2038]/5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D2038] mb-2.5 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#C18A2D]" />
              Target Outcomes
            </h4>
            <ul className="space-y-2 text-xs text-[#0D2038]">
              {stage.outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Exam Boards */}
        <div className="mb-6 pb-6 border-b border-gray-100">
          <p className="text-xs font-bold uppercase text-[#677484] mb-2">Supported Exam Boards</p>
          <div className="flex flex-wrap gap-2">
            {stage.examBoards.map((board, i) => (
              <span
                key={i}
                className="bg-gray-100 text-[#0D2038] text-xs font-medium px-3 py-1 rounded-lg"
              >
                {board}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold text-[#677484] hover:text-[#0D2038]"
          >
            Close Details
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onEnquireStage(stage.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C18A2D] hover:bg-[#A87522] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md transition-all cursor-pointer"
          >
            <span>Enquire for {stage.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
