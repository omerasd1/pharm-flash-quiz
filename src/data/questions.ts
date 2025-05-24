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
    question: "Which drug is a direct muscarinic agonist used to treat urinary retention?",
    options: ["Neostigmine", "Bethanechol"],
    correctAnswer: 1,
    explanation: "Bethanechol is a direct muscarinic receptor agonist that stimulates bladder contraction, making it effective for urinary retention. Neostigmine is a cholinesterase inhibitor used for myasthenia gravis, increasing acetylcholine indirectly.",
    system: "Autonomic Nervous System"
  },
  {
    id: "ans-2",
    question: "What is the primary mechanism of atropine in treating organophosphate poisoning?",
    options: ["Increases acetylcholine levels", "Blocks muscarinic receptors"],
    correctAnswer: 1,
    explanation: "Atropine is a muscarinic receptor antagonist that counteracts the excessive cholinergic effects (e.g., salivation, bronchoconstriction) caused by organophosphate poisoning. It does not increase acetylcholine levels.",
    system: "Autonomic Nervous System"
  },
  {
    id: "ans-3",
    question: "Which drug is a selective alpha-2 agonist used for hypertension?",
    options: ["Prazosin", "Clonidine"],
    correctAnswer: 1,
    explanation: "Clonidine is an alpha-2 agonist that reduces sympathetic outflow from the CNS, lowering blood pressure. Prazosin is an alpha-1 blocker used for hypertension and BPH, causing vasodilation.",
    system: "Autonomic Nervous System"
  },
  {
    id: "ans-4",
    question: "Which beta-blocker is cardioselective and safer for patients with asthma?",
    options: ["Propranolol", "Metoprolol"],
    correctAnswer: 1,
    explanation: "Metoprolol is a beta-1 selective blocker, reducing the risk of bronchoconstriction compared to non-selective propranolol, making it safer for asthma patients. Selectivity diminishes at higher doses.",
    system: "Autonomic Nervous System"
  },
  {
    id: "ans-5",
    question: "What is a major side effect of selective alpha-1 blockers like prazosin?",
    options: ["Tachycardia", "First-dose syncope"],
    correctAnswer: 1,
    explanation: "Prazosin can cause severe orthostatic hypotension, leading to 'first-dose syncope' due to sudden vasodilation. Patients should take the first dose at bedtime to minimize this risk.",
    system: "Autonomic Nervous System"
  },
  {
    id: "ans-6",
    question: "Which drug is used for motion sickness and acts as a muscarinic antagonist?",
    options: ["Oxybutynin", "Scopolamine"],
    correctAnswer: 1,
    explanation: "Scopolamine is a muscarinic antagonist that crosses the blood-brain barrier, making it effective for motion sickness by blocking central cholinergic pathways. Oxybutynin is used for overactive bladder.",
    system: "Autonomic Nervous System"
  },
  {
    id: "ans-7",
    question: "Which drug is a beta-1 selective agonist used in acute heart failure?",
    options: ["Isoproterenol", "Dobutamine"],
    correctAnswer: 1,
    explanation: "Dobutamine is a beta-1 selective agonist that increases cardiac contractility, making it suitable for acute heart failure. Isoproterenol is non-selective and affects both beta-1 and beta-2 receptors.",
    system: "Autonomic Nervous System"
  },

  // Cardiovascular System
  {
    id: "cv-1",
    question: "Which diuretic is most effective for acute pulmonary edema?",
    options: ["Hydrochlorothiazide", "Furosemide"],
    correctAnswer: 1,
    explanation: "Furosemide, a loop diuretic, is the most potent diuretic and acts rapidly to reduce fluid overload in acute pulmonary edema by inhibiting the Na-K-2Cl transporter. Hydrochlorothiazide is less potent and used for hypertension.",
    system: "Cardiovascular"
  },
  {
    id: "cv-2",
    question: "What is a common side effect of ACE inhibitors like lisinopril?",
    options: ["Hypokalemia", "Dry cough"],
    correctAnswer: 1,
    explanation: "ACE inhibitors like lisinopril cause a dry cough due to bradykinin accumulation. They also risk hyperkalemia, not hypokalemia, due to reduced aldosterone secretion.",
    system: "Cardiovascular"
  },
  {
    id: "cv-3",
    question: "Which antiarrhythmic drug is associated with pulmonary fibrosis and thyroid dysfunction?",
    options: ["Flecainide", "Amiodarone"],
    correctAnswer: 1,
    explanation: "Amiodarone, a Class III antiarrhythmic, prolongs the QT interval and has multiple side effects, including pulmonary fibrosis, liver toxicity, and thyroid dysfunction ('PFTs, LFTs, TFTs'). Flecainide is a Class IC drug contraindicated in structural heart disease.",
    system: "Cardiovascular"
  },
  {
    id: "cv-4",
    question: "Which anticoagulant requires monitoring of PT/INR?",
    options: ["Heparin", "Warfarin"],
    correctAnswer: 1,
    explanation: "Warfarin requires PT/INR monitoring due to its narrow therapeutic window and variable metabolism. Heparin is monitored with PTT and has a more immediate onset.",
    system: "Cardiovascular"
  },
  {
    id: "cv-5",
    question: "What is the primary mechanism of statins like atorvastatin?",
    options: ["Inhibit cholesterol absorption", "Inhibit HMG-CoA reductase"],
    correctAnswer: 1,
    explanation: "Statins like atorvastatin inhibit HMG-CoA reductase, reducing hepatic cholesterol synthesis and lowering LDL levels. Ezetimibe inhibits cholesterol absorption in the gut.",
    system: "Cardiovascular"
  },

  // Renal System
  {
    id: "renal-1",
    question: "Which diuretic acts in the collecting duct to prevent potassium loss?",
    options: ["Furosemide", "Spironolactone"],
    correctAnswer: 1,
    explanation: "Spironolactone is a potassium-sparing diuretic that blocks aldosterone receptors in the collecting duct, preventing potassium loss. Furosemide is a loop diuretic that causes hypokalemia.",
    system: "Renal System"
  },
  {
    id: "renal-2",
    question: "Which drug is used for central diabetes insipidus?",
    options: ["Demeclocycline", "Desmopressin"],
    correctAnswer: 1,
    explanation: "Desmopressin is a synthetic ADH analog used for central diabetes insipidus and nocturnal enuresis. Demeclocycline is an ADH antagonist used for SIADH.",
    system: "Renal System"
  },
  {
    id: "renal-3",
    question: "Which drug class is notorious for nephrotoxicity due to afferent arteriole constriction?",
    options: ["Aminoglycosides", "NSAIDs"],
    correctAnswer: 1,
    explanation: "NSAIDs can cause nephrotoxicity by inhibiting prostaglandin synthesis, leading to afferent arteriole constriction and reduced renal blood flow. Aminoglycosides primarily cause tubular toxicity.",
    system: "Renal System"
  },

  // Respiratory System
  {
    id: "resp-1",
    question: "Which medication is first-line for long-term asthma control?",
    options: ["Salmeterol", "Fluticasone"],
    correctAnswer: 1,
    explanation: "Fluticasone, an inhaled corticosteroid, is first-line for long-term asthma control due to its anti-inflammatory effects. Salmeterol, a LABA, must always be used with an ICS and is not for monotherapy.",
    system: "Respiratory System"
  },
  {
    id: "resp-2",
    question: "Which drug is a short-acting beta-2 agonist used as a rescue inhaler?",
    options: ["Ipratropium", "Albuterol"],
    correctAnswer: 1,
    explanation: "Albuterol is a short-acting beta-2 agonist (SABA) that provides rapid bronchodilation for acute asthma exacerbations. Ipratropium is an antimuscarinic used primarily for COPD.",
    system: "Respiratory System"
  },

  // Gastrointestinal System
  {
    id: "gi-1",
    question: "Which drug provides the most potent acid suppression for GERD?",
    options: ["Ranitidine", "Omeprazole"],
    correctAnswer: 1,
    explanation: "Omeprazole, a proton pump inhibitor, irreversibly inhibits H+/K+ ATPase, providing superior acid suppression compared to H2 blockers like ranitidine. Long-term use may increase C. difficile risk.",
    system: "Gastrointestinal"
  },
  {
    id: "gi-2",
    question: "Which antiemetic is a 5-HT3 receptor antagonist used for chemotherapy-induced nausea?",
    options: ["Metoclopramide", "Ondansetron"],
    correctAnswer: 1,
    explanation: "Ondansetron is a 5-HT3 antagonist effective for chemotherapy-induced nausea. Metoclopramide is a dopamine receptor blocker and prokinetic, with a risk of tardive dyskinesia.",
    system: "Gastrointestinal"
  },

  // Endocrine System
  {
    id: "endo-1",
    question: "Which drug is first-line for type 2 diabetes mellitus?",
    options: ["Glipizide", "Metformin"],
    correctAnswer: 1,
    explanation: "Metformin, a biguanide, is first-line for type 2 diabetes as it reduces hepatic glucose production and increases insulin sensitivity without causing hypoglycemia. Glipizide, a sulfonylurea, risks hypoglycemia.",
    system: "Endocrine System"
  },
  {
    id: "endo-2",
    question: "Which drug is preferred for hyperthyroidism in pregnancy?",
    options: ["Methimazole", "Propylthiouracil"],
    correctAnswer: 1,
    explanation: "Propylthiouracil (PTU) is preferred in pregnancy due to lower teratogenic risk compared to methimazole, though it carries a risk of liver failure. Both inhibit thyroid hormone synthesis.",
    system: "Endocrine System"
  },

  // Musculoskeletal System
  {
    id: "msk-1",
    question: "Which drug inhibits microtubule polymerization for acute gout treatment?",
    options: ["Allopurinol", "Colchicine"],
    correctAnswer: 1,
    explanation: "Colchicine inhibits microtubule polymerization, reducing neutrophil migration and inflammation in acute gout. Allopurinol is used for chronic gout to lower uric acid levels.",
    system: "Musculoskeletal"
  },
  {
    id: "msk-2",
    question: "Which bisphosphonate side effect requires patients to sit upright after taking?",
    options: ["Osteonecrosis of the jaw", "Esophagitis"],
    correctAnswer: 1,
    explanation: "Bisphosphonates like alendronate can cause esophagitis, requiring patients to take the drug with water and remain upright for 30 minutes to prevent esophageal irritation.",
    system: "Musculoskeletal"
  },

  // Hematology & Oncology
  {
    id: "hema-1",
    question: "Which chemotherapy drug is associated with cardiotoxicity?",
    options: ["Cyclophosphamide", "Doxorubicin"],
    correctAnswer: 1,
    explanation: "Doxorubicin, an antitumor antibiotic, intercalates DNA and is associated with dilated cardiomyopathy. Cyclophosphamide causes hemorrhagic cystitis, prevented by mesna.",
    system: "Hematology & Oncology"
  },
  {
    id: "hema-2",
    question: "Which drug stimulates neutrophil production in chemotherapy-induced neutropenia?",
    options: ["Epoetin alfa", "Filgrastim"],
    correctAnswer: 1,
    explanation: "Filgrastim (G-CSF) stimulates neutrophil production, used for chemotherapy-induced neutropenia. Epoetin alfa is used for anemia in chronic kidney disease.",
    system: "Hematology & Oncology"
  },

  // Infectious Diseases
  {
    id: "id-1",
    question: "Which antibiotic is associated with red man syndrome?",
    options: ["Vancomycin", "Ciprofloxacin"],
    correctAnswer: 1,
    explanation: "Vancomycin, used for MRSA and C. difficile, can cause red man syndrome due to histamine release if infused too quickly. Ciprofloxacin, a fluoroquinolone, risks tendon rupture and QT prolongation.",
    system: "Infectious Diseases"
  },
  {
    id: "id-2",
    question: "Which antifungal is known for severe nephrotoxicity ('ampho-terrible')?",
    options: ["Fluconazole", "Amphotericin B"],
    correctAnswer: 1,
    explanation: "Amphotericin B is a broad-spectrum antifungal with severe nephrotoxicity, hypokalemia, and infusion-related reactions. Fluconazole, an azole, is less toxic and used for Candida infections.",
    system: "Infectious Diseases"
  },

  // CNS & Psychiatry
  {
    id: "cns-1",
    question: "Which antidepressant has the lowest risk of sexual side effects?",
    options: ["Sertraline", "Bupropion"],
    correctAnswer: 1,
    explanation: "Bupropion, a norepinephrine/dopamine reuptake inhibitor, has minimal sexual side effects compared to SSRIs like sertraline. It also lowers seizure threshold and is used for smoking cessation.",
    system: "CNS & Psychiatry"
  },
  {
    id: "cns-2",
    question: "Which antipsychotic is associated with agranulocytosis, requiring WBC monitoring?",
    options: ["Risperidone", "Clozapine"],
    correctAnswer: 1,
    explanation: "Clozapine, an atypical antipsychotic, is highly effective but requires WBC monitoring due to the risk of agranulocytosis. Risperidone has a lower risk but causes metabolic side effects.",
    system: "CNS & Psychiatry"
  },

  // Immunology
  {
    id: "imm-1",
    question: "Which immunosuppressant is associated with gingival hyperplasia and hirsutism?",
    options: ["Tacrolimus", "Cyclosporine"],
    correctAnswer: 1,
    explanation: "Cyclosporine, a calcineurin inhibitor, causes gingival hyperplasia and hirsutism, along with nephrotoxicity. Tacrolimus has similar renal risks but less gingival hyperplasia.",
    system: "Immunology"
  },
  {
    id: "imm-2",
    question: "Which biologic targets TNF-α for rheumatoid arthritis treatment?",
    options: ["Rituximab", "Infliximab"],
    correctAnswer: 1,
    explanation: "Infliximab is an anti-TNF-α biologic used for rheumatoid arthritis and IBD, with a risk of TB reactivation. Rituximab targets CD20 on B-cells, used for lymphoma and autoimmune diseases.",
    system: "Immunology"
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
    id: "hema",
    title: "Hematology & Oncology",
    description: "Anemia drugs, chemotherapy, and immunosuppressive agents",
    questionsCount: pharmacologyQuestions.filter(q => q.system === "Hematology & Oncology").length
  },
  {
    id: "id",
    title: "Infectious Diseases",
    description: "Antibiotics, antivirals, antifungals, and antimicrobial therapy principles",
    questionsCount: pharmacologyQuestions.filter(q => q.system === "Infectious Diseases").length
  },
  {
    id: "cns",
    title: "CNS & Psychiatry",
    description: "Antidepressants, antipsychotics, mood stabilizers, and neurological drugs",
    questionsCount: pharmacologyQuestions.filter(q => q.system === "CNS & Psychiatry").length
  },
  {
    id: "imm",
    title: "Immunology",
    description: "Immunosuppressants for transplantation and autoimmune diseases",
    questionsCount: pharmacologyQuestions.filter(q => q.system === "Immunology").length
  }
];
