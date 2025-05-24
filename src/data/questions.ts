export interface Question {
  id: string;
  question: string;
  options: [string, string];
  correctAnswer: number;
  explanation: string;
  system: string;
}

export const pharmacologyQuestions: Question[] = [
  // Autonomic Nervous System - Comprehensive Coverage
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
  {
    id: "ans-3",
    question: "A patient with urinary retention after surgery is given bethanechol. What is its mechanism of action?",
    options: ["Direct muscarinic receptor agonist", "Cholinesterase inhibitor"],
    correctAnswer: 0,
    explanation: "Bethanechol is a direct muscarinic receptor agonist that stimulates bladder contraction and promotes urination. It's resistant to cholinesterase breakdown and specifically used for urinary retention and gastroparesis.",
    system: "Autonomic Nervous System"
  },
  {
    id: "ans-4",
    question: "Which cholinesterase inhibitor is commonly used for myasthenia gravis?",
    options: ["Donepezil", "Neostigmine"],
    correctAnswer: 1,
    explanation: "Neostigmine is used for myasthenia gravis because it increases acetylcholine levels at the neuromuscular junction by inhibiting cholinesterase. Donepezil is used for Alzheimer's disease. Both are cholinesterase inhibitors but have different clinical applications.",
    system: "Autonomic Nervous System"
  },
  {
    id: "ans-5",
    question: "A patient presents with organophosphate poisoning. Which antidote should be administered?",
    options: ["Physostigmine", "Atropine"],
    correctAnswer: 1,
    explanation: "Atropine is the antidote for organophosphate poisoning because it blocks the excessive muscarinic stimulation caused by cholinesterase inhibition. Organophosphates irreversibly inhibit cholinesterase, leading to cholinergic crisis.",
    system: "Autonomic Nervous System"
  },
  {
    id: "ans-6",
    question: "Which drug is used for motion sickness and has anticholinergic properties?",
    options: ["Atropine", "Scopolamine"],
    correctAnswer: 1,
    explanation: "Scopolamine is a muscarinic antagonist that crosses the blood-brain barrier effectively and is specifically used for motion sickness. It's available as a transdermal patch and works by blocking central cholinergic pathways involved in nausea and vomiting.",
    system: "Autonomic Nervous System"
  },
  {
    id: "ans-7",
    question: "A patient with Parkinson's disease develops drug-induced parkinsonism from antipsychotics. Which medication would help?",
    options: ["Benztropine", "Carbidopa"],
    correctAnswer: 0,
    explanation: "Benztropine is an anticholinergic drug that helps restore the dopamine-acetylcholine balance in the basal ganglia, reducing extrapyramidal symptoms like drug-induced parkinsonism. It blocks muscarinic receptors centrally.",
    system: "Autonomic Nervous System"
  },
  {
    id: "ans-8",
    question: "Which drug is a selective alpha-1 agonist used as a nasal decongestant?",
    options: ["Epinephrine", "Phenylephrine"],
    correctAnswer: 1,
    explanation: "Phenylephrine is a selective alpha-1 agonist that causes vasoconstriction, making it effective as a nasal decongestant. It's also used for mydriasis and hypotension. Epinephrine is non-selective and affects multiple receptor types.",
    system: "Autonomic Nervous System"
  },
  {
    id: "ans-9",
    question: "Which centrally-acting antihypertensive works by stimulating alpha-2 receptors?",
    options: ["Prazosin", "Clonidine"],
    correctAnswer: 1,
    explanation: "Clonidine is an alpha-2 agonist that acts centrally to reduce sympathetic outflow, lowering blood pressure. It's also used for ADHD and opioid withdrawal. Prazosin is an alpha-1 blocker that acts peripherally.",
    system: "Autonomic Nervous System"
  },
  {
    id: "ans-10",
    question: "Which beta-1 selective agonist is used for cardiac stimulation in heart failure?",
    options: ["Dobutamine", "Isoproterenol"],
    correctAnswer: 0,
    explanation: "Dobutamine is a beta-1 selective agonist that increases cardiac contractility and output, making it useful for acute heart failure. Isoproterenol is non-selective and affects both beta-1 and beta-2 receptors.",
    system: "Autonomic Nervous System"
  },
  {
    id: "ans-11",
    question: "What is the primary clinical use of salmeterol?",
    options: ["Acute asthma rescue therapy", "Long-term asthma maintenance therapy"],
    correctAnswer: 1,
    explanation: "Salmeterol is a long-acting beta-2 agonist (LABA) used for maintenance therapy in asthma and COPD. It should never be used as monotherapy for asthma - it must always be combined with an inhaled corticosteroid due to increased mortality risk.",
    system: "Autonomic Nervous System"
  },
  {
    id: "ans-12",
    question: "Which drug has dose-dependent effects: low dose (renal vasodilation), medium dose (cardiac stimulation), high dose (vasoconstriction)?",
    options: ["Norepinephrine", "Dopamine"],
    correctAnswer: 1,
    explanation: "Dopamine has dose-dependent receptor selectivity: low doses activate dopamine receptors (renal vasodilation), moderate doses activate beta-1 receptors (cardiac stimulation), and high doses activate alpha-1 receptors (vasoconstriction).",
    system: "Autonomic Nervous System"
  },
  {
    id: "ans-13",
    question: "Which alpha-blocker is associated with 'first-dose syncope'?",
    options: ["Phenoxybenzamine", "Prazosin"],
    correctAnswer: 1,
    explanation: "Prazosin and other selective alpha-1 blockers can cause severe orthostatic hypotension and syncope with the first dose. This is due to sudden vasodilation without compensatory mechanisms. Patients should be warned to take the first dose at bedtime.",
    system: "Autonomic Nervous System"
  },
  {
    id: "ans-14",
    question: "Which alpha-blocker is irreversible and used specifically for pheochromocytoma?",
    options: ["Phenoxybenzamine", "Doxazosin"],
    correctAnswer: 0,
    explanation: "Phenoxybenzamine is an irreversible, non-selective alpha blocker used for pheochromocytoma. It provides complete alpha blockade, which is essential before surgical removal of the tumor to prevent hypertensive crisis.",
    system: "Autonomic Nervous System"
  },
  {
    id: "ans-15",
    question: "Which beta-blocker is non-selective and can mask signs of hypoglycemia?",
    options: ["Metoprolol", "Propranolol"],
    correctAnswer: 1,
    explanation: "Propranolol is a non-selective beta blocker that blocks both beta-1 and beta-2 receptors. It can mask tachycardia and other sympathetic signs of hypoglycemia, making it dangerous in diabetics. It also causes bronchoconstriction.",
    system: "Autonomic Nervous System"
  },
  {
    id: "ans-16",
    question: "Which beta-blocker is considered 'cardioselective' and safer for patients with asthma?",
    options: ["Nadolol", "Metoprolol"],
    correctAnswer: 1,
    explanation: "Metoprolol is beta-1 selective ('cardioselective'), making it safer for patients with asthma or COPD because it has less effect on beta-2 receptors in the lungs. However, selectivity is not absolute at higher doses.",
    system: "Autonomic Nervous System"
  },
  {
    id: "ans-17",
    question: "Which drug blocks both alpha and beta receptors and is used in hypertensive emergencies?",
    options: ["Carvedilol", "Labetalol"],
    correctAnswer: 1,
    explanation: "Labetalol blocks both alpha and beta receptors and is particularly useful for hypertensive emergencies because it can be given IV and provides controlled blood pressure reduction. Carvedilol is used more for heart failure.",
    system: "Autonomic Nervous System"
  },
  {
    id: "ans-18",
    question: "A patient with overactive bladder is prescribed oxybutynin. What is its mechanism?",
    options: ["Beta-3 agonist", "Muscarinic receptor antagonist"],
    correctAnswer: 1,
    explanation: "Oxybutynin is a muscarinic receptor antagonist that reduces bladder contractions by blocking parasympathetic stimulation of the detrusor muscle. Side effects include typical anticholinergic effects like dry mouth and constipation.",
    system: "Autonomic Nervous System"
  },
  {
    id: "ans-19",
    question: "Which drug is used for glaucoma and works by increasing aqueous humor outflow?",
    options: ["Timolol", "Pilocarpine"],
    correctAnswer: 1,
    explanation: "Pilocarpine is a muscarinic agonist that causes miosis (pupil constriction) and increases aqueous humor outflow, reducing intraocular pressure in glaucoma. It's also used for Sjögren's syndrome to increase salivation.",
    system: "Autonomic Nervous System"
  },
  {
    id: "ans-20",
    question: "What is the major concern with cholinesterase inhibitor overdose?",
    options: ["Anticholinergic crisis", "Cholinergic crisis"],
    correctAnswer: 1,
    explanation: "Cholinesterase inhibitor overdose causes cholinergic crisis with excessive muscarinic and nicotinic stimulation: salivation, lacrimation, urination, defecation, bronchial secretions, miosis, muscle fasciculations, and paralysis. Treatment includes atropine and supportive care.",
    system: "Autonomic Nervous System"
  },

  // Cardiovascular System
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
