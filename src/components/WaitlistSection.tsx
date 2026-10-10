import React, { useState } from 'react';
import { CheckCircle2, Star, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const WaitlistSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('Parent / Guardian');
  const [consent, setConsent] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [consentError, setConsentError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;

    if (!email || !email.includes('@') || !email.includes('.')) {
      setEmailError('Please provide a valid email address.');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!consent) {
      setConsentError('You must agree to receive platform updates to join.');
      valid = false;
    } else {
      setConsentError('');
    }

    if (valid) {
      setIsSubmitted(true);
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#DFB15B', '#C18A2D', '#FFFFFF', '#38BDF8']
      });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0D2038] text-white relative overflow-hidden" id="waitlist">
      {/* Gold Star Constellation Decorative Background */}
      <div className="absolute top-10 left-10 w-6 h-6 text-[#DFB15B] star-sparkle bg-[#DFB15B] opacity-40 animate-pulse pointer-events-none" />
      <div className="absolute bottom-16 right-16 w-8 h-8 text-[#DFB15B] star-sparkle bg-[#DFB15B] opacity-35 animate-pulse pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-4 h-4 text-[#DFB15B] star-sparkle bg-[#DFB15B] opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-5 h-5 text-[#DFB15B] star-sparkle bg-[#DFB15B] opacity-25 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#DFB15B] mb-3">
          Early Access Waitlist
        </p>
        <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-white mb-4">
          Be first to hear what's next.
        </h2>
        <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Join the AnnGillette waitlist for updates on our upcoming web and mobile learning experience, prototype previews, and priority access.
        </p>

        {/* Waitlist Form Card */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/15 rounded-3xl p-6 sm:p-10 max-w-xl mx-auto text-left shadow-2xl">
          {!isSubmitted ? (
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              {/* Email Input */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-1.5" htmlFor="waitlistEmail">
                  Email Address <span className="text-[#DFB15B]">*</span>
                </label>
                <input
                  id="waitlistEmail"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError('');
                  }}
                  placeholder="name@example.com"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#DFB15B] focus:border-transparent transition-all"
                  required
                />
                {emailError && (
                  <p className="text-xs text-rose-300 mt-1.5 font-medium">{emailError}</p>
                )}
              </div>

              {/* Name Input */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-1.5" htmlFor="waitlistName">
                  First Name <span className="text-white/50 text-[10px] font-normal">(Optional)</span>
                </label>
                <input
                  id="waitlistName"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#DFB15B] focus:border-transparent transition-all"
                />
              </div>

              {/* Role Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-1.5" htmlFor="waitlistRole">
                  I am a:
                </label>
                <select
                  id="waitlistRole"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-[#0D2038] border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#DFB15B] focus:border-transparent transition-all"
                >
                  <option value="Parent / Guardian">Parent / Guardian</option>
                  <option value="Student">Student</option>
                  <option value="Educator / Tutor">Educator / Tutor</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3 pt-1">
                <input
                  id="waitlistConsent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => {
                    setConsent(e.target.checked);
                    if (consentError) setConsentError('');
                  }}
                  className="mt-1 w-4 h-4 rounded text-[#C18A2D] focus:ring-[#DFB15B] border-white/30 bg-white/10 cursor-pointer"
                  required
                />
                <label htmlFor="waitlistConsent" className="text-xs text-white/80 leading-normal cursor-pointer">
                  I agree to receive email announcements regarding the AnnGillette learning platform and early test invitations.
                </label>
              </div>
              {consentError && (
                <p className="text-xs text-rose-300 font-medium">{consentError}</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-[#C18A2D] hover:bg-[#DFB15B] active:scale-[0.98] text-[#0D2038] font-bold text-sm tracking-wide shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer mt-2"
              >
                Join the Waitlist
              </button>

              <p className="text-[11px] text-white/50 text-center leading-relaxed pt-2">
                We'll use your details to send updates about the AnnGillette learning platform. You can unsubscribe at any time.
              </p>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-500/20 text-emerald-300 rounded-full flex items-center justify-center mx-auto border border-emerald-400/30">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="font-serif-title text-2xl font-bold text-white">
                You're on the list, {name || 'Alex'}!
              </h3>
              <p className="text-sm text-white/80 max-w-sm mx-auto leading-relaxed">
                Thank you! We'll send an early invite to <span className="text-[#DFB15B] font-semibold">{email}</span> as test flight slots open.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setEmail('');
                  setName('');
                }}
                className="text-xs text-[#DFB15B] underline pt-2 hover:text-white"
              >
                Register another email
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
