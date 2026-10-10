export interface SubjectStage {
  id: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  keySkills: string[];
  examBoards: string[];
  outcomes: string[];
}

export const SUBJECT_STAGES: SubjectStage[] = [
  {
    id: '11-plus',
    title: '11+ Preparation',
    badge: 'Primary & Grammar',
    description: 'Build strong foundations in Maths, English, Verbal and Non-Verbal Reasoning with focused mock techniques and confidence-building.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYYQs64t7jJSR2f5FyCdRRC8Eav8OnupJilg19WnOJOGqkvXAObjDPzt-4PUOK_jhzTnpRHAAsImC2If7aWhJju8YKkZBhe0tF7GyaEaavuM65FQkxHpIlGrPPpMPN6qgvk0pmCFH91xJFeZf0AKSDehwZI4eLwzUSUsLSM9Jf-Pe9-eClVZNHBhywAux4TNIChFsa51Ump_qBpDyDP-Sx2BaoK7_mOJtrX1wmVRNigNfsYn3gyvEF4w',
    keySkills: ['Mental Arithmetic & Spatial Puzzles', 'Vocabulary & Comprehension Mastery', 'Timed Exam Pacing & Speed Drills', 'Exam Anxiety Reduction'],
    examBoards: ['GL Assessment', 'CEM', 'Independent Schools Examinations Board (ISEB)', 'CSSE'],
    outcomes: ['Grammar School Entry Ready', '94% First-Choice Grammar/Independent Placement', 'Independent Problem-Solving Mindset']
  },
  {
    id: 'gcse',
    title: 'GCSE',
    badge: 'Years 9–11',
    description: 'Strengthen subject knowledge, address tricky syllabus gaps, and master mark-scheme expectations across sciences, maths and humanities.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwIVlP0R55pHEtEdAnr6ld4BKYMYvCdEl7HLKbXXexq-CZkmjMR_ycTcTSsQombkhPyoBvMy2HanKpKogJapzeY3IFt87cyzsGOseS6D98IUSPRNdcIDfCwkb-393eL9dZ0gaOVPqLw0B4HEyyDfQ5gO1enI_tWEuzwE8trdhZdI8MGTBrPsgvPId_P34RHDgJpGajmjhSB-WzqTK-6n3yGyvG9IrMBTdu7eCMH5XsfmTbg_rATBeXQA',
    keySkills: ['Algebraic Fluency & Calculus Intro', 'Scientific Method & Practical Analysis', 'Essay Structure & Critical Text Analysis', 'Past Paper Marking Schemes'],
    examBoards: ['AQA', 'Edexcel / Pearson', 'OCR', 'WJEC Eduqas'],
    outcomes: ['Targeting Grades 7–9 (A/A*)', 'Targeted Knowledge Retention', 'Self-Directed Revision Schedules']
  },
  {
    id: 'a-level',
    title: 'A Level',
    badge: 'Sixth Form',
    description: 'Deepen conceptual understanding, refine essay arguments and develop rigorous analytical techniques essential for top university offers.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8lpKe6_xDyK6EM9eOZ3X8gjFJojgV-Raa3TotJYE6L6cmC5Hhf8weuvj2K-4EDChp8aDtNUKrPNfjdiWqOsUiG25_R5VLl8cn5iH59Zmce-hlfY1pDUwdbIJn6NK_6ON0NUwQmeUH-Y-6jBx2iGxfI6iJQHv2UcCoA5BPjU7fD49fnLdOa8zJTHjbshz_BT1TqEk22okZvcVt3ySjJRnzowE848lNbjwnj7TEPvL-S01FaIC4yiLrCg',
    keySkills: ['Advanced Mathematical Proofs', 'University-Level Text Criticism', 'STEP / MAT / TMUA Prep for STEM', 'UCAS Personal Statement Academic Alignment'],
    examBoards: ['Edexcel', 'AQA', 'OCR / OCR MEI', 'Cambridge International (CIE)'],
    outcomes: ['A* / A Target Profiles', 'Russell Group & Oxbridge Admissions Ready', 'Intellectual Independence & Tenacity']
  }
];

export interface MiniQuestion {
  id: string;
  topic: string;
  stage: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  hint: string;
}

export const SAMPLE_QUESTIONS: MiniQuestion[] = [
  {
    id: 'alg-1',
    topic: 'Algebra',
    stage: '11+ / GCSE',
    question: 'Solve for x:   3x + 5 = 26',
    options: ['x = 5', 'x = 7', 'x = 9', 'x = 6'],
    correctAnswer: 1, // 'x = 7'
    explanation: 'Subtract 5 from both sides: 3x = 21. Then divide both sides by 3: x = 7. Brilliant job!',
    hint: 'First undo the +5 by subtracting 5 from 26!'
  },
  {
    id: 'geom-1',
    topic: 'Geometry',
    stage: '11+ / GCSE',
    question: 'What is the sum of interior angles in a triangle?',
    options: ['90°', '180°', '360°', '270°'],
    correctAnswer: 1,
    explanation: 'The interior angles of any triangle on a Euclidean plane always sum to 180°!',
    hint: 'Think of two right angles (90° + 90°) put together.'
  },
  {
    id: 'reasoning-1',
    topic: 'Reasoning',
    stage: '11+ Verbal',
    question: 'Find the missing number in the sequence:  3,  7,  15,  31,  ?',
    options: ['47', '55', '63', '60'],
    correctAnswer: 2, // 63: pattern is (n * 2) + 1
    explanation: 'Each step is doubled plus one: 3×2+1=7, 7×2+1=15, 15×2+1=31, 31×2+1=63!',
    hint: 'Look at the gap between each pair: +4, +8, +16... what comes next?'
  },
  {
    id: 'bio-1',
    topic: 'Biology',
    stage: 'GCSE Science',
    question: 'Which organelle is widely known as the powerhouse of the cell?',
    options: ['Ribosome', 'Mitochondria', 'Chloroplast', 'Nucleus'],
    correctAnswer: 1,
    explanation: 'Mitochondria produce ATP through aerobic cellular respiration, fueling the cell!',
    hint: 'It starts with M and creates energy for cellular work.'
  }
];

export const LOGO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMi3zx29-m9J1S0W0PDPssmK_k1IvcIdT9dRiimEY1e2raeZ5Hdc9Pipb99R9L3gtC55i8pWIOIX2PL-fCx3aeIzxIqxiOUhvQRm1x6nieits0EaNS0myGx8LeuYKNxMJfrM-27dt8apSP73ohhlXXqJLC2fmio8wHqCD79F_YGJVpNyD7HmZRYYU2_qMMiO7sS649LErJ9sG3sNgl-HgxwH59StayZmhdVVjEraSeuD45cWLESx6PRs4DvcYFRFgCLyY';

export const HERO_IMAGE_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAwthtXQlEiwloPw-OLm4yXPbcty_WS_jCR4X5M0hoQTze_ArWcqzhvdQ4dkQw2yt9U0L0sBzIv7FDLBv8OfJA-QMM5BZyO5rtmH5Ant2RdN4P5JfQHp6RR_-9-o0HgpL2lfx3cZZYnOq1HSD6QKfAUJiXrl_iqyzsUmTov2W7jVFV5AeQzn0bopbY5ivG5bEGFX4leDLQQlXdfgJfh5NwetA9aBLtdNiCc3yMRT5MV5kUqIKU6gVbtQ';
