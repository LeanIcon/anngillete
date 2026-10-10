import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, Clock, Phone, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialSubject = '11+ Preparation'
}) => {
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState(initialSubject);
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialSubject) {
      setSubject(initialSubject);
    }
  }, [initialSubject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid email address.');
      return;
    }

    setError('');
    setIsSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#DFB15B', '#C18A2D', '#0D2038', '#10B981']
    });
  };

  const handleCloseAndReset = () => {
    setIsSubmitted(false);
    setParentName('');
    setEmail('');
    setPhone('');
    setNotes('');
    setError('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      className="fixed inset-0 z-50 bg-[#0D2038]/80 backdrop-blur-sm overflow-y-auto h-full w-full p-4 flex items-center justify-center animate-fadeIn"
      onClick={handleCloseAndReset}
    >
      <div
        className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#0D2038]/10 text-[#343B45]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          aria-label="Close Modal"
          onClick={handleCloseAndReset}
          className="absolute top-5 right-5 text-[#677484] hover:text-[#0D2038] p-1.5 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C18A2D]">
                1:1 Tuition Enquiry
              </span>
              <h3 className="font-serif-title text-2xl font-bold text-[#0D2038] mt-1" id="modalTitle">
                Enquire About Tutoring
              </h3>
              <p className="text-xs text-[#677484] mt-1">
                Tell us what your child needs and our academic coordinator will get in touch within 24 hours.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-semibold">
                {error}
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-bold uppercase text-[#0D2038] mb-1" htmlFor="parentName">
                  Parent / Guardian Name <span className="text-[#C18A2D]">*</span>
                </label>
                <input
                  id="parentName"
                  type="text"
                  required
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full text-sm rounded-xl border border-gray-300 px-3.5 py-2.5 focus:border-[#C18A2D] focus:ring-2 focus:ring-[#C18A2D]/20 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#0D2038] mb-1" htmlFor="parentEmail">
                    Email Address <span className="text-[#C18A2D]">*</span>
                  </label>
                  <input
                    id="parentEmail"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@email.com"
                    className="w-full text-sm rounded-xl border border-gray-300 px-3.5 py-2.5 focus:border-[#C18A2D] focus:ring-2 focus:ring-[#C18A2D]/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#0D2038] mb-1" htmlFor="parentPhone">
                    Phone Number
                  </label>
                  <input
                    id="parentPhone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="07123 456789"
                    className="w-full text-sm rounded-xl border border-gray-300 px-3.5 py-2.5 focus:border-[#C18A2D] focus:ring-2 focus:ring-[#C18A2D]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-[#0D2038] mb-1" htmlFor="enquirySubject">
                  Academic Stage / Subject
                </label>
                <select
                  id="enquirySubject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full text-sm rounded-xl border border-gray-300 px-3.5 py-2.5 focus:border-[#C18A2D] focus:ring-2 focus:ring-[#C18A2D]/20 outline-none bg-white transition-all"
                >
                  <option value="11+ Preparation">11+ Preparation (Maths, English, Reasoning)</option>
                  <option value="GCSE Tutoring">GCSE Subject Support &amp; Exam Technique</option>
                  <option value="A Level Tutoring">A Level Advanced Tutoring</option>
                  <option value="Primary / General">Primary Foundations</option>
                  <option value="Parent Consultation">General Diagnostic Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-[#0D2038] mb-1" htmlFor="enquiryNotes">
                  Any specific goals or concerns?
                </label>
                <textarea
                  id="enquiryNotes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us about target schools, current mock grades or areas where confidence is low..."
                  className="w-full text-sm rounded-xl border border-gray-300 px-3.5 py-2.5 focus:border-[#C18A2D] focus:ring-2 focus:ring-[#C18A2D]/20 outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#C18A2D] hover:bg-[#A87522] active:scale-[0.99] text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                Submit Tuition Enquiry
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>
            <h4 className="font-serif-title text-2xl font-bold text-[#0D2038]">
              Thank You, {parentName}!
            </h4>
            <p className="text-xs sm:text-sm text-[#677484] max-w-sm mx-auto leading-relaxed">
              We have received your enquiry for <strong className="text-[#0D2038]">{subject}</strong>. One of our educators will reach out via <span className="text-[#C18A2D] font-semibold">{email}</span> within one business day.
            </p>
            <div className="pt-3">
              <button
                type="button"
                onClick={handleCloseAndReset}
                className="text-xs font-bold text-[#C18A2D] underline hover:text-[#A87522] cursor-pointer"
              >
                Return to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
