
import React, { useState, useEffect } from 'react';
import { Star, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const drugsOfDay = [
  {
    name: "Atropine",
    mechanism: "Muscarinic receptor antagonist",
    uses: "Bradycardia, organophosphate poisoning, pupil dilation",
    keyFact: "Remember: 'Hot as a hare, blind as a bat, dry as a bone, red as a beet, mad as a hatter'"
  },
  {
    name: "Metoprolol",
    mechanism: "Beta-1 selective blocker",
    uses: "Hypertension, angina, heart failure",
    keyFact: "Cardioselective but not absolutely selective - safer for asthma/COPD patients"
  },
  {
    name: "Furosemide",
    mechanism: "Loop diuretic - blocks Na-K-2Cl transporter",
    uses: "Edema, CHF, hypertension",
    keyFact: "Most potent diuretic - causes hypokalemia and ototoxicity"
  },
  {
    name: "Omeprazole",
    mechanism: "Proton pump inhibitor",
    uses: "GERD, peptic ulcers, H. pylori eradication",
    keyFact: "Irreversibly inhibits H+/K+ ATPase - most effective acid reducer"
  },
  {
    name: "Albuterol",
    mechanism: "Short-acting beta-2 agonist",
    uses: "Acute asthma exacerbations, bronchodilation",
    keyFact: "Rescue inhaler - works within minutes for acute bronchospasm"
  }
];

const DrugOfTheDay = () => {
  const [currentDrug, setCurrentDrug] = useState(drugsOfDay[0]);

  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
    const drugIndex = dayOfYear % drugsOfDay.length;
    setCurrentDrug(drugsOfDay[drugIndex]);
  }, []);

  return (
    <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 shadow-md">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2 text-amber-800">
          <Star className="h-5 w-5 fill-current" />
          <span>Drug of the Day</span>
          <Calendar className="h-4 w-4 ml-auto" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <h3 className="text-xl font-bold text-amber-900">{currentDrug.name}</h3>
        <div className="space-y-2 text-sm">
          <p><span className="font-semibold text-amber-800">Mechanism:</span> {currentDrug.mechanism}</p>
          <p><span className="font-semibold text-amber-800">Uses:</span> {currentDrug.uses}</p>
          <div className="bg-amber-100 p-3 rounded-lg border-l-4 border-amber-400">
            <p className="text-amber-900 font-medium">💡 {currentDrug.keyFact}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DrugOfTheDay;
