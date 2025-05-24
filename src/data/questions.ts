
export interface Question {
  id: string;
  question: string;
  options: [string, string];
  correctAnswer: number;
  explanation: string;
  system: string;
}

export const pharmacologyQuestions: Question[] = [
  // Autonomic Nervous System
  {
    id: "ans-1",
    question: "A 65-year-old patient with bradycardia (heart rate 45 bpm) is treated with atropine. What is the primary mechanism of action?",
    options: ["Stimulates beta-1 adrenergic receptors", "Blocks muscarinic acetylcholine receptors"],
    correctAnswer: 1,
    explanation: "Atropine is a muscarinic receptor antagonist that blocks parasympathetic stimulation, allowing sympathetic activity to predominate and increase heart rate. Remember the mnemonic: 'Hot as a hare, blind as a bat, dry as a bone, red as a beet, mad as a hatter.'",
    system: "Autonomic Nervous System"
  },
  {
    id: "ans-2",
    question: "Which drug would be most appropriate for treating acute asthma exacerbation?",
    options: ["Salmeterol (long-acting beta-2 agonist)", "Albuterol (short-acting beta-2 agonist)"],
    correctAnswer: 1,
    explanation: "Albuterol is a short-acting beta-2 agonist (SABA) that provides rapid bronchodilation within minutes, making it the rescue inhaler of choice for acute asthma. Salmeterol is long-acting and used for maintenance therapy, not acute episodes.",
    system: "Autonomic Nervous System"
  },

  // Cardiovascular
  {
    id: "cv-1",
    question: "A patient with heart failure is started on metoprolol. What is the primary benefit of this beta-1 selective blocker in heart failure?",
    options: ["Increases cardiac contractility and heart rate", "Reduces cardiac workload and improves long-term survival"],
    correctAnswer: 1,
    explanation: "Beta-blockers like metoprolol reduce cardiac workload by decreasing heart rate and contractility, allowing the heart to recover and remodel. They improve long-term survival in heart failure patients despite initially seeming counterintuitive.",
    system: "Cardiovascular"
  },
  {
    id: "cv-2",
    question: "Which diuretic is most potent and appropriate for acute pulmonary edema?",
    options: ["Hydrochlorothiazide (thiazide diuretic)", "Furosemide (loop diuretic)"],
    correctAnswer: 1,
    explanation: "Furosemide is a loop diuretic that blocks the Na-K-2Cl transporter in the thick ascending limb of Henle. It's the most potent diuretic and provides rapid, powerful diuresis needed for acute pulmonary edema. Remember: causes hypokalemia and ototoxicity.",
    system: "Cardiovascular"
  },

  // Renal System
  {
    id: "renal-1",
    question: "A patient develops hypokalemia while taking hydrochlorothiazide. Which diuretic could be added to prevent further potassium loss?",
    options: ["Furosemide (loop diuretic)", "Spironolactone (potassium-sparing diuretic)"],
    correctAnswer: 1,
    explanation: "Spironolactone is a potassium-sparing diuretic that blocks aldosterone receptors in the collecting duct, preventing potassium loss. It's often combined with thiazides to counteract hypokalemia. Watch for hyperkalemia and gynecomastia as side effects.",
    system: "Renal System"
  },

  // Respiratory System
  {
    id: "resp-1",
    question: "For long-term asthma control, which medication class should be the first-line therapy?",
    options: ["Long-acting beta-2 agonists (LABAs)", "Inhaled corticosteroids (ICS)"],
    correctAnswer: 1,
    explanation: "Inhaled corticosteroids like fluticasone are first-line for long-term asthma control because they reduce airway inflammation. LABAs should never be used as monotherapy for asthma and must always be combined with ICS. Remember: ICS can cause oral candidiasis and dysphonia.",
    system: "Respiratory System"
  },

  // Gastrointestinal
  {
    id: "gi-1",
    question: "Which medication provides the most effective acid suppression for treating peptic ulcer disease?",
    options: ["Ranitidine (H2 receptor blocker)", "Omeprazole (proton pump inhibitor)"],
    correctAnswer: 1,
    explanation: "Omeprazole irreversibly inhibits the H+/K+ ATPase (proton pump), providing the most potent and long-lasting acid suppression. It's more effective than H2 blockers for treating GERD and peptic ulcers. Long-term use may increase risk of C. difficile and hip fractures.",
    system: "Gastrointestinal"
  },

  // Endocrine System
  {
    id: "endo-1",
    question: "Which medication is considered first-line therapy for type 2 diabetes mellitus?",
    options: ["Glipizide (sulfonylurea)", "Metformin (biguanide)"],
    correctAnswer: 1,
    explanation: "Metformin is first-line for T2DM because it decreases hepatic glucose production and increases insulin sensitivity without causing hypoglycemia or weight gain. Unlike sulfonylureas, it doesn't stimulate insulin release. Rare but serious side effect is lactic acidosis.",
    system: "Endocrine System"
  },

  // Musculoskeletal
  {
    id: "msk-1",
    question: "For acute gout attack, which medication directly inhibits microtubule polymerization in neutrophils?",
    options: ["Indomethacin (NSAID)", "Colchicine"],
    correctAnswer: 1,
    explanation: "Colchicine inhibits microtubule polymerization, preventing neutrophil migration and reducing inflammation in acute gout. While NSAIDs like indomethacin also treat acute gout, colchicine has a unique mechanism specifically targeting the inflammatory cascade in gout.",
    system: "Musculoskeletal"
  },

  // CNS & Psychiatry
  {
    id: "cns-1",
    question: "Which antidepressant is associated with the lowest risk of sexual side effects?",
    options: ["Sertraline (SSRI)", "Bupropion (atypical antidepressant)"],
    correctAnswer: 1,
    explanation: "Bupropion is a norepinephrine/dopamine reuptake inhibitor with minimal sexual side effects, unlike SSRIs which commonly cause sexual dysfunction. It's also used for smoking cessation. However, it can lower seizure threshold and is contraindicated in eating disorders.",
    system: "CNS & Psychiatry"
  },

  // Infectious Diseases
  {
    id: "id-1",
    question: "Which antibiotic class has the broadest spectrum against gram-positive, gram-negative, and anaerobic bacteria?",
    options: ["Cephalosporins", "Carbapenems"],
    correctAnswer: 1,
    explanation: "Carbapenems like meropenem and imipenem have the broadest spectrum of all beta-lactam antibiotics, covering gram-positive, gram-negative, and anaerobic bacteria. They're often reserved for severe infections. Imipenem requires cilastatin to prevent renal metabolism.",
    system: "Infectious Diseases"
  }
];

export const organSystems = [
  {
    id: "ans",
    title: "Autonomic Nervous System",
    description: "Cholinergic and adrenergic drugs affecting acetylcholine and norepinephrine pathways",
    questionsCount: pharmacologyQuestions.filter(q => q.system === "Autonomic Nervous System").length
  },
  {
    id: "cv",
    title: "Cardiovascular System",
    description: "Antihypertensives, antiarrhythmics, heart failure medications, and anticoagulants",
    questionsCount: pharmacologyQuestions.filter(q => q.system === "Cardiovascular").length
  },
  {
    id: "renal",
    title: "Renal System", 
    description: "Diuretics and drugs affecting kidney function and electrolyte balance",
    questionsCount: pharmacologyQuestions.filter(q => q.system === "Renal System").length
  },
  {
    id: "resp",
    title: "Respiratory System",
    description: "Bronchodilators, anti-inflammatory agents for asthma and COPD management",
    questionsCount: pharmacologyQuestions.filter(q => q.system === "Respiratory System").length
  },
  {
    id: "gi",
    title: "Gastrointestinal System",
    description: "Acid-reducing drugs, antiemetics, and medications for motility disorders",
    questionsCount: pharmacologyQuestions.filter(q => q.system === "Gastrointestinal").length
  },
  {
    id: "endo",
    title: "Endocrine System",
    description: "Diabetes medications, thyroid drugs, and hormone replacement therapies",
    questionsCount: pharmacologyQuestions.filter(q => q.system === "Endocrine System").length
  },
  {
    id: "msk",
    title: "Musculoskeletal System",
    description: "NSAIDs, gout medications, and drugs for pain and inflammation",
    questionsCount: pharmacologyQuestions.filter(q => q.system === "Musculoskeletal").length
  },
  {
    id: "cns",
    title: "CNS & Psychiatry",
    description: "Antidepressants, antipsychotics, mood stabilizers, and neurological drugs",
    questionsCount: pharmacologyQuestions.filter(q => q.system === "CNS & Psychiatry").length
  },
  {
    id: "id",
    title: "Infectious Diseases",
    description: "Antibiotics, antivirals, antifungals, and antimicrobial therapy principles",
    questionsCount: pharmacologyQuestions.filter(q => q.system === "Infectious Diseases").length
  }
];
