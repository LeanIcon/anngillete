import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { EnquiryModal } from './components/EnquiryModal';
import { StageDetailModal } from './components/StageDetailModal';
import { SUBJECT_STAGES, SubjectStage } from './data/content';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquirySubject, setEnquirySubject] = useState('11+ Preparation');
  const [selectedStage, setSelectedStage] = useState<SubjectStage | null>(null);

  // Waitlist form state
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistConsent, setWaitlistConsent] = useState(false);
  const [waitlistMessage, setWaitlistMessage] = useState<{ text: string; isError: boolean } | null>(null);

  const handleOpenEnquiry = (subject: string = '11+ Preparation') => {
    setEnquirySubject(subject);
    setIsEnquiryModalOpen(true);
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail || !waitlistEmail.includes('@') || !waitlistEmail.includes('.')) {
      setWaitlistMessage({ text: 'Please enter a valid email address.', isError: true });
      return;
    }
    if (!waitlistConsent) {
      setWaitlistMessage({ text: 'Please agree to receive platform updates.', isError: true });
      return;
    }

    setWaitlistMessage({
      text: "You're on the list! We'll notify you as early preview slots open.",
      isError: false
    });

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#c3923d', '#10243d', '#ffffff', '#8ac8b8']
    });
  };

  const handleLearnMore = (stageId: string) => {
    const found = SUBJECT_STAGES.find((s) => s.id === stageId);
    if (found) {
      setSelectedStage(found);
    } else {
      handleOpenEnquiry();
    }
  };

  return (
    <div>
      {/* Site Header */}
      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#home" aria-label="AnnGillette home">
            <span className="brand-icon" aria-hidden="true">☆</span>
            <span>AnnGillette</span>
          </a>

          <button
            className="menu-toggle"
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileMenuOpen}
            aria-controls="nav-links"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          <nav
            className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}
            id="nav-links"
            aria-label="Main navigation"
          >
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#approach" onClick={() => setMobileMenuOpen(false)}>Our Approach</a>
            <a href="#subjects" onClick={() => setMobileMenuOpen(false)}>Subjects &amp; Exams</a>
            <a href="#parents" onClick={() => setMobileMenuOpen(false)}>For Parents</a>
            <a href="#platform" onClick={() => setMobileMenuOpen(false)}>Learning Platform</a>
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleOpenEnquiry('General Tutoring')}
            >
              Enquire About Tutoring <span>→</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>Build confidence.<br />Unlock potential.<br />Go further.</h1>
              <p>Expert tutoring, personalised exam preparation and progress you can see.</p>
              
              <div className="hero-buttons">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleOpenEnquiry('General Tutoring')}
                >
                  Enquire About Tutoring <span>→</span>
                </button>
                <a className="btn btn-outline" href="#approach">Explore Our Approach</a>
              </div>

              <div className="hero-benefits">
                <div className="benefit">
                  <span className="benefit-icon" aria-hidden="true">♧</span>
                  <span>Personalised<br />1:1 tutoring</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon" aria-hidden="true">▥</span>
                  <span>Focused exam<br />preparation</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon" aria-hidden="true">☆</span>
                  <span>Ongoing<br />progress support</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <img
                src="assets/hero-student.jpg"
                alt="Student thinking through her studies at a desk"
                onError={(e) => {
                  e.currentTarget.src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAwthtXQlEiwloPw-OLm4yXPbcty_WS_jCR4X5M0hoQTze_ArWcqzhvdQ4dkQw2yt9U0L0sBzIv7FDLBv8OfJA-QMM5BZyO5rtmH5Ant2RdN4P5JfQHp6RR_-9-o0HgpL2lfx3cZZYnOq1HSD6QKfAUJiXrl_iqyzsUmTov2W7jVFV5AeQzn0bopbY5ivG5bEGFX4leDLQQlXdfgJfh5NwetA9aBLtdNiCc3yMRT5MV5kUqIKU6gVbtQ';
                }}
              />
            </div>
          </div>
        </section>

        {/* Approach / The Difference Section */}
        <section className="approach" id="approach">
          <div className="container center">
            <p className="eyebrow">The difference</p>
            <h2 className="section-heading">More than a lesson. A path to progress.</h2>
            <p className="section-intro">
              We combine expert teaching with purposeful practice and ongoing feedback to help students build understanding, confidence and independence.
            </p>

            <div className="approach-grid">
              <article className="approach-card">
                <div className="line-icon" aria-hidden="true">♧</div>
                <h3>Learn with expert support</h3>
                <p>Personalised 1:1 tutoring tailored to each student.</p>
              </article>

              <article className="approach-card">
                <div className="line-icon" aria-hidden="true">▤</div>
                <h3>Practise with purpose</h3>
                <p>Targeted homework, revision and exam-style practice.</p>
              </article>

              <article className="approach-card">
                <div className="line-icon" aria-hidden="true">▥</div>
                <h3>See the progress</h3>
                <p>Clear feedback and regular updates for students and parents.</p>
              </article>

              <article className="approach-card">
                <div className="line-icon" aria-hidden="true">☆</div>
                <h3>Prepare for what's next</h3>
                <p>Build the skills and confidence for 11+, GCSEs, A Levels and beyond.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Support for Every Stage Section */}
        <section className="stages" id="subjects">
          <div className="container center">
            <p className="eyebrow">Support for every stage</p>
            <h2 className="section-heading">Tailored support for each academic stage.</h2>

            <div className="stage-grid">
              {/* 11+ Preparation Card */}
              <article className="stage-card" onClick={() => handleLearnMore('11-plus')}>
                <img
                  src="assets/stage-11plus.jpg"
                  alt="Student working carefully through written questions"
                  onError={(e) => {
                    e.currentTarget.src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYYQs64t7jJSR2f5FyCdRRC8Eav8OnupJilg19WnOJOGqkvXAObjDPzt-4PUOK_jhzTnpRHAAsImC2If7aWhJju8YKkZBhe0tF7GyaEaavuM65FQkxHpIlGrPPpMPN6qgvk0pmCFH91xJFeZf0AKSDehwZI4eLwzUSUsLSM9Jf-Pe9-eClVZNHBhywAux4TNIChFsa51Ump_qBpDyDP-Sx2BaoK7_mOJtrX1wmVRNigNfsYn3gyvEF4w';
                  }}
                />
                <div className="stage-content">
                  <h3>11+ Preparation</h3>
                  <p>Build strong foundations in Maths, English, Verbal and Non-Verbal Reasoning.</p>
                  <button
                    type="button"
                    className="text-link"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLearnMore('11-plus');
                    }}
                  >
                    <span>→</span> Learn more
                  </button>
                </div>
              </article>

              {/* GCSE Card */}
              <article className="stage-card" onClick={() => handleLearnMore('gcse')}>
                <img
                  src="assets/stage-gcse.jpg"
                  alt="Student revising at a desk"
                  onError={(e) => {
                    e.currentTarget.src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwIVlP0R55pHEtEdAnr6ld4BKYMYvCdEl7HLKbXXexq-CZkmjMR_ycTcTSsQombkhPyoBvMy2HanKpKogJapzeY3IFt87cyzsGOseS6D98IUSPRNdcIDfCwkb-393eL9dZ0gaOVPqLw0B4HEyyDfQ5gO1enI_tWEuzwE8trdhZdI8MGTBrPsgvPId_P34RHDgJpGajmjhSB-WzqTK-6n3yGyvG9IrMBTdu7eCMH5XsfmTbg_rATBeXQA';
                  }}
                />
                <div className="stage-content">
                  <h3>GCSE</h3>
                  <p>Strengthen subject knowledge and master exam techniques.</p>
                  <button
                    type="button"
                    className="text-link"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLearnMore('gcse');
                    }}
                  >
                    <span>→</span> Learn more
                  </button>
                </div>
              </article>

              {/* A Level Card */}
              <article className="stage-card" onClick={() => handleLearnMore('a-level')}>
                <img
                  src="assets/stage-alevel.jpg"
                  alt="Older student studying independently"
                  onError={(e) => {
                    e.currentTarget.src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8lpKe6_xDyK6EM9eOZ3X8gjFJojgV-Raa3TotJYE6L6cmC5Hhf8weuvj2K-4EDChp8aDtNUKrPNfjdiWqOsUiG25_R5VLl8cn5iH59Zmce-hlfY1pDUwdbIJn6NK_6ON0NUwQmeUH-Y-6jBx2iGxfI6iJQHv2UcCoA5BPjU7fD49fnLdOa8zJTHjbshz_BT1TqEk22okZvcVt3ySjJRnzowE848lNbjwnj7TEPvL-S01FaIC4yiLrCg';
                  }}
                />
                <div className="stage-content">
                  <h3>A Level</h3>
                  <p>Deepen understanding and develop critical analysis for university preparation.</p>
                  <button
                    type="button"
                    className="text-link"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLearnMore('a-level');
                    }}
                  >
                    <span>→</span> Learn more
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Learning Platform Section */}
        <section className="platform" id="platform">
          <div className="container platform-grid">
            <div className="platform-copy">
              <p className="eyebrow">Coming soon</p>
              <h2>Personal tutoring, with purposeful digital support.</h2>
              <p>
                We're developing a digital learning experience to complement tutoring with structured practice, learning resources, progress tracking and easier communication between tutors, students and parents.
              </p>
              <a className="btn btn-outline" href="#waitlist">
                Explore the Learning Experience <span>→</span>
              </a>
            </div>

            <div className="dashboard-wrap">
              <img
                src="assets/learning-dashboard.svg"
                alt="Concept image of a student learning dashboard on a laptop and phone"
                onError={(e) => {
                  e.currentTarget.src = 'assets/learning-dashboard.jpg';
                }}
              />
              <div className="phone-badge" aria-label="Illustrative mobile app preview">
                <strong>Topics</strong>
                <div className="topic">
                  <span>Algebra</span>
                  <i></i>
                </div>
                <div className="topic">
                  <span>English</span>
                  <i></i>
                </div>
                <div className="topic">
                  <span>Reasoning</span>
                  <i></i>
                </div>
                <div className="topic">
                  <span>Biology</span>
                  <i></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section className="waitlist" id="waitlist">
          <div className="container">
            <div className="waitlist-panel">
              <div className="waitlist-copy">
                <p className="eyebrow">Upcoming web &amp; mobile apps</p>
                <h2>Be first to hear what's next.</h2>
                <p>Join the waitlist for updates on AnnGillette's upcoming digital learning experience.</p>
              </div>

              <form className="waitlist-form" id="waitlist-form" onSubmit={handleWaitlistSubmit}>
                <div className="field">
                  <label className="sr-only" htmlFor="email" style={{ position: 'absolute', left: '-9999px' }}>
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    autoComplete="email"
                    value={waitlistEmail}
                    onChange={(e) => {
                      setWaitlistEmail(e.target.value);
                      if (waitlistMessage) setWaitlistMessage(null);
                    }}
                    required
                  />
                  <button className="btn btn-primary" type="submit">
                    Join the Waitlist <span>→</span>
                  </button>
                </div>

                <label className="consent">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={waitlistConsent}
                    onChange={(e) => {
                      setWaitlistConsent(e.target.checked);
                      if (waitlistMessage) setWaitlistMessage(null);
                    }}
                    required
                  />
                  <span>I agree to receive updates about the AnnGillette learning platform.</span>
                </label>

                <p className="privacy">
                  We'll use your details only for relevant updates. You can unsubscribe at any time.
                </p>

                {waitlistMessage && (
                  <p
                    className="form-message"
                    id="form-message"
                    role="status"
                    aria-live="polite"
                    style={{
                      color: waitlistMessage.isError ? '#fca5a5' : '#f3d58e',
                      fontWeight: 600
                    }}
                  >
                    {waitlistMessage.text}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* Final CTA / For Parents Section */}
        <section className="final-cta" id="parents">
          <div className="container cta-row">
            <div className="cta-copy">
              <p className="eyebrow">Their next chapter starts here</p>
              <h2>Give your child the support to go further.</h2>
            </div>
            <div className="cta-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleOpenEnquiry('Parent Consultation')}
              >
                Enquire About Tutoring <span>→</span>
              </button>
              <a className="btn btn-dark-outline" href="#waitlist">
                Get Updates on Our Platform
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Site Footer */}
      <footer className="site-footer">
        <div className="container footer-row">
          <div>
            <a className="footer-brand" href="#home">
              ☆ AnnGillette
            </a>
            <div className="copyright">Personalised tutoring and exam preparation.</div>
          </div>
          <div className="footer-links">
            <a href="#approach">Our Approach</a>
            <a href="#subjects">Subjects &amp; Exams</a>
            <a href="#platform">Learning Platform</a>
            <a href="#waitlist">Waitlist</a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleOpenEnquiry('General Contact');
              }}
            >
              Contact
            </a>
          </div>
          <div className="copyright">© {new Date().getFullYear()} AnnGillette</div>
        </div>
      </footer>

      {/* Interactive Tuition Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        initialSubject={enquirySubject}
      />

      {/* Interactive Curriculum Stage Detail Modal */}
      <StageDetailModal
        stage={selectedStage}
        onClose={() => setSelectedStage(null)}
        onEnquireStage={(title) => handleOpenEnquiry(title)}
      />
    </div>
  );
}
