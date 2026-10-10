import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Flame, Award, BookOpen, Smartphone, Laptop, Sparkles, RefreshCw, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SAMPLE_QUESTIONS, MiniQuestion } from '../data/content';

interface InteractivePlatformDemoProps {
  onJoinWaitlistClick: () => void;
}

export const InteractivePlatformDemo: React.FC<InteractivePlatformDemoProps> = ({
  onJoinWaitlistClick,
}) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'home' | 'practice' | 'progress'>('home');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [isSolving, setIsSolving] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [streak, setStreak] = useState<number>(7);
  const [accuracy, setAccuracy] = useState<number>(92);
  const [showHint, setShowHint] = useState<boolean>(false);

  const currentQ: MiniQuestion = SAMPLE_QUESTIONS[currentQuestionIndex];

  const handleStartPractice = (questionIdx: number = 0) => {
    setCurrentQuestionIndex(questionIdx);
    setIsSolving(true);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setShowHint(false);
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);

    const isCorrect = selectedOption === currentQ.correctAnswer;
    if (isCorrect) {
      setStreak((prev) => prev + 1);
      setAccuracy((prev) => Math.min(99, prev + 2));
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#DFB15B', '#C18A2D', '#0D2038', '#10B981']
      });
    }
  };

  const handleNextChallenge = () => {
    const nextIdx = (currentQuestionIndex + 1) % SAMPLE_QUESTIONS.length;
    setCurrentQuestionIndex(nextIdx);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setShowHint(false);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#EAF4FA]/60 border-y border-[#0D2038]/5" id="platform">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C18A2D]/15 text-[#8B6018] text-xs font-bold uppercase tracking-wider mb-4 border border-[#C18A2D]/20">
            <span className="w-2 h-2 rounded-full bg-[#C18A2D] animate-ping" />
            Coming Soon • In Development
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-[#0D2038] leading-tight mb-4">
            Personal tutoring, with purposeful digital support.
          </h2>
          <p className="text-base sm:text-lg text-[#677484] leading-relaxed">
            Our developing digital learning resources complement tutoring with structured practice, progress tracking and easier communication between tutors, students and parents.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Feature Matrix List (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-5 rounded-2xl border border-[#0D2038]/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-1.5">
                <span className="w-7 h-7 rounded-lg bg-[#EAF4FA] text-[#0D2038] flex items-center justify-center font-bold text-xs">
                  1
                </span>
                <h3 className="font-bold text-[#0D2038] text-base">Learn</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#677484] pl-10">
                Access curated topic summaries, step-by-step model answers, and tutor-assigned weekly tasks in one place.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#0D2038]/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-1.5">
                <span className="w-7 h-7 rounded-lg bg-[#EAF4FA] text-[#0D2038] flex items-center justify-center font-bold text-xs">
                  2
                </span>
                <h3 className="font-bold text-[#0D2038] text-base">Practise</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#677484] pl-10">
                Work through adaptive revision materials, past-paper walkthroughs, and topic drills that solidify mastery.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#0D2038]/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-1.5">
                <span className="w-7 h-7 rounded-lg bg-[#EAF4FA] text-[#0D2038] flex items-center justify-center font-bold text-xs">
                  3
                </span>
                <h3 className="font-bold text-[#0D2038] text-base">Progress</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#677484] pl-10">
                Follow individualised targets, review detailed feedback notes, and see weekly accuracy trends over time.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#0D2038]/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-1.5">
                <span className="w-7 h-7 rounded-lg bg-[#EAF4FA] text-[#0D2038] flex items-center justify-center font-bold text-xs">
                  4
                </span>
                <h3 className="font-bold text-[#0D2038] text-base">Stay Informed (For Parents)</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#677484] pl-10">
                Parent dashboard access offering transparent completion logs, upcoming test dates, and tutor reflections.
              </p>
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={onJoinWaitlistClick}
                className="inline-flex items-center gap-2 bg-[#0D2038] hover:bg-[#081424] text-white font-semibold px-6 py-3.5 rounded-full text-sm transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Join Waitlist for Early Access</span>
                <ArrowRight className="w-4 h-4 text-[#DFB15B]" />
              </button>
            </div>
          </div>

          {/* Interactive Digital Mockup Frame (7 Cols - matching Prototype & Image 1) */}
          <div className="lg:col-span-7">
            {/* View Mode Switcher Header */}
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0D2038]">
                <Sparkles className="w-3.5 h-3.5 text-[#C18A2D]" />
                <span>Try the live interactive prototype:</span>
              </div>
              <div className="flex items-center bg-white p-0.5 rounded-lg border border-[#0D2038]/10 text-xs">
                <button
                  type="button"
                  onClick={() => setDeviceMode('desktop')}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md font-medium transition-all ${
                    deviceMode === 'desktop'
                      ? 'bg-[#0D2038] text-white'
                      : 'text-[#677484] hover:text-[#0D2038]'
                  }`}
                >
                  <Laptop className="w-3.5 h-3.5" />
                  <span>Web App</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDeviceMode('mobile')}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md font-medium transition-all ${
                    deviceMode === 'mobile'
                      ? 'bg-[#0D2038] text-white'
                      : 'text-[#677484] hover:text-[#0D2038]'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Mobile View</span>
                </button>
              </div>
            </div>

            {/* Container for Desktop or Mobile Frame */}
            <div
              className={`transition-all duration-300 mx-auto ${
                deviceMode === 'mobile' ? 'max-w-[340px]' : 'w-full'
              }`}
            >
              <div className="bg-[#0D2038] p-3 sm:p-5 rounded-3xl shadow-2xl border border-[#0D2038] text-[#0D2038]">
                {/* Tablet/Browser Top Bar */}
                <div className="flex items-center justify-between pb-3 px-2 border-b border-white/10 mb-3 text-white">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="text-[11px] text-white/50 font-mono tracking-wider truncate px-2">
                    {deviceMode === 'mobile' ? 'm.anngillette.co.uk' : 'app.anngillette.co.uk/student'}
                  </div>
                  <div className="w-8" />
                </div>

                {/* Inner Screen */}
                <div className="bg-[#F8F9FA] rounded-2xl p-4 sm:p-5">
                  {/* Mock Portal Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <span className="font-serif-title font-bold text-[#0D2038] text-base sm:text-lg">
                        AnnGillette
                      </span>
                      <span className="text-[10px] bg-[#EAF4FA] px-2 py-0.5 rounded text-[#0D2038] font-bold">
                        Student Portal
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-semibold text-[#677484]">
                      <button
                        type="button"
                        onClick={() => {
                          setActiveTab('home');
                          setIsSolving(false);
                        }}
                        className={`transition-colors ${
                          activeTab === 'home' ? 'text-[#0D2038] font-bold underline' : 'hover:text-[#0D2038]'
                        }`}
                      >
                        Home
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveTab('practice');
                          setIsSolving(true);
                        }}
                        className={`transition-colors ${
                          activeTab === 'practice' ? 'text-[#0D2038] font-bold underline' : 'hover:text-[#0D2038]'
                        }`}
                      >
                        Practice
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveTab('progress');
                          setIsSolving(false);
                        }}
                        className={`transition-colors ${
                          activeTab === 'progress' ? 'text-[#0D2038] font-bold underline' : 'hover:text-[#0D2038]'
                        }`}
                      >
                        Progress
                      </button>
                    </div>
                  </div>

                  {/* Welcome Greeting */}
                  <div className="mt-3 mb-4">
                    <h4 className="text-lg sm:text-xl font-bold text-[#0D2038]">Good morning, Alex</h4>
                    <p className="text-xs text-[#677484]">
                      You have 1 recommended practice task due tomorrow.
                    </p>
                  </div>

                  {/* Interactive Stats Cards Row */}
                  <div className="grid grid-cols-3 gap-2.5 mb-4">
                    <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                      <p className="text-[10px] text-[#677484] uppercase font-bold tracking-wider">
                        Practice
                      </p>
                      <p className="text-lg sm:text-xl font-extrabold text-[#0D2038] mt-0.5">3h 20m</p>
                      <p className="text-[10px] text-emerald-600 font-semibold">This week</p>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                      <p className="text-[10px] text-[#677484] uppercase font-bold tracking-wider">
                        Questions
                      </p>
                      <p className="text-lg sm:text-xl font-extrabold text-[#0D2038] mt-0.5">{accuracy}%</p>
                      <p className="text-[10px] text-emerald-600 font-semibold">accuracy</p>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                      <p className="text-[10px] text-[#677484] uppercase font-bold tracking-wider">
                        Streak
                      </p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <Flame className="w-4 h-4 text-[#C18A2D] fill-[#C18A2D]" />
                        <p className="text-lg sm:text-xl font-extrabold text-[#C18A2D]">{streak}</p>
                      </div>
                      <p className="text-[10px] text-[#677484]">days on fire</p>
                    </div>
                  </div>

                  {/* Conditional: Solving Mini Interactive Question vs Standard Overview */}
                  {isSolving ? (
                    <div className="bg-white p-4 rounded-xl border border-[#C18A2D]/40 shadow-md">
                      <div className="flex items-center justify-between pb-2 border-b border-gray-100 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold bg-[#C18A2D]/15 text-[#8B6018] px-2 py-0.5 rounded-full">
                            {currentQ.topic} Challenge
                          </span>
                          <span className="text-[11px] text-[#677484]">{currentQ.stage}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setIsSolving(false)}
                          className="text-xs text-[#677484] hover:text-[#0D2038]"
                        >
                          ✕ Close
                        </button>
                      </div>

                      {/* Question Text */}
                      <p className="text-sm font-bold text-[#0D2038] mb-3">
                        {currentQ.question}
                      </p>

                      {/* Options Grid */}
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        {currentQ.options.map((opt, oIdx) => {
                          const isSelected = selectedOption === oIdx;
                          let btnStyle = 'border-gray-200 bg-gray-50 text-[#0D2038] hover:bg-gray-100';

                          if (isSelected) {
                            btnStyle = 'border-[#0D2038] bg-[#0D2038] text-white';
                          }

                          if (isAnswerSubmitted) {
                            if (oIdx === currentQ.correctAnswer) {
                              btnStyle = 'border-emerald-600 bg-emerald-600 text-white font-bold';
                            } else if (isSelected && oIdx !== currentQ.correctAnswer) {
                              btnStyle = 'border-red-500 bg-red-100 text-red-700 line-through';
                            }
                          }

                          return (
                            <button
                              key={oIdx}
                              type="button"
                              onClick={() => handleSelectOption(oIdx)}
                              className={`p-2.5 rounded-lg border text-xs text-left font-semibold transition-all cursor-pointer ${btnStyle}`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>

                      {/* Feedback & Actions */}
                      {isAnswerSubmitted ? (
                        <div className="space-y-2 pt-2 border-t border-gray-100">
                          {selectedOption === currentQ.correctAnswer ? (
                            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800">
                              <p className="font-bold flex items-center gap-1">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                Brilliant reasoning! (+50 XP)
                              </p>
                              <p className="mt-1 text-[11px]">{currentQ.explanation}</p>
                            </div>
                          ) : (
                            <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-800">
                              <p className="font-bold">Good effort! Don't worry.</p>
                              <p className="mt-1 text-[11px]">{currentQ.explanation}</p>
                            </div>
                          )}

                          <div className="flex items-center justify-between pt-1">
                            <span className="text-[11px] text-[#677484]">
                              Question {currentQuestionIndex + 1} of {SAMPLE_QUESTIONS.length}
                            </span>
                            <button
                              type="button"
                              onClick={handleNextChallenge}
                              className="px-3.5 py-1.5 bg-[#0D2038] hover:bg-[#081424] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                            >
                              Next Question →
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                          <button
                            type="button"
                            onClick={() => setShowHint(!showHint)}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#C18A2D] hover:underline cursor-pointer"
                          >
                            <HelpCircle className="w-3.5 h-3.5" />
                            <span>{showHint ? 'Hide Hint' : 'Need a hint?'}</span>
                          </button>

                          <button
                            type="button"
                            onClick={handleSubmitAnswer}
                            disabled={selectedOption === null}
                            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                              selectedOption !== null
                                ? 'bg-[#C18A2D] hover:bg-[#A87522] text-white cursor-pointer shadow-sm'
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            }`}
                          >
                            Submit Answer
                          </button>
                        </div>
                      )}

                      {showHint && !isAnswerSubmitted && (
                        <p className="mt-2 text-[11px] text-[#677484] bg-amber-50 p-2 rounded border border-amber-200/50">
                          💡 {currentQ.hint}
                        </p>
                      )}
                    </div>
                  ) : (
                    /* Default Next Step & Topics View Matching Prototype */
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                      {/* Next Step Box */}
                      <div className="sm:col-span-7 bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                            <BookOpen className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-[10px] text-[#677484] uppercase font-semibold">Your next step</p>
                            <p className="text-xs sm:text-sm font-bold text-[#0D2038]">Algebra – Practice Set</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleStartPractice(0)}
                          className="px-3.5 py-1.5 bg-[#0D2038] hover:bg-[#081424] active:scale-95 text-white text-xs font-bold rounded-lg transition-transform cursor-pointer shadow-sm"
                        >
                          Start
                        </button>
                      </div>

                      {/* Subject Topics List */}
                      <div className="sm:col-span-5 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                        <p className="text-[11px] font-bold text-[#0D2038] mb-1.5 flex items-center justify-between">
                          <span>Subject Topics</span>
                          <span className="text-[10px] text-[#677484] font-normal">Click to test</span>
                        </p>
                        <div className="space-y-1 text-xs">
                          <button
                            type="button"
                            onClick={() => handleStartPractice(0)}
                            className="w-full flex justify-between items-center bg-gray-50 hover:bg-[#EAF4FA] p-1.5 rounded transition-colors text-left"
                          >
                            <span className="font-medium text-[#0D2038]">Algebra</span>
                            <span className="text-[#C18A2D] font-bold">88%</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleStartPractice(1)}
                            className="w-full flex justify-between items-center bg-gray-50 hover:bg-[#EAF4FA] p-1.5 rounded transition-colors text-left"
                          >
                            <span className="font-medium text-[#0D2038]">Geometry</span>
                            <span className="text-[#C18A2D] font-bold">95%</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleStartPractice(2)}
                            className="w-full flex justify-between items-center bg-gray-50 hover:bg-[#EAF4FA] p-1.5 rounded transition-colors text-left"
                          >
                            <span className="font-medium text-[#0D2038]">Reasoning</span>
                            <span className="text-[#C18A2D] font-bold">91%</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
