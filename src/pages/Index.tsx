
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import DrugOfTheDay from '@/components/DrugOfTheDay';
import OrganSystemCard from '@/components/OrganSystemCard';
import { organSystems } from '@/data/questions';
import { 
  Brain, 
  Heart, 
  Activity, 
  Wind, 
  Apple, 
  Zap, 
  Bone, 
  HeartHandshake,
  Shield
} from 'lucide-react';

const systemIcons = {
  ans: <Brain className="h-6 w-6 text-blue-600" />,
  cv: <Heart className="h-6 w-6 text-red-600" />,
  renal: <Activity className="h-6 w-6 text-yellow-600" />,
  resp: <Wind className="h-6 w-6 text-green-600" />,
  gi: <Apple className="h-6 w-6 text-orange-600" />,
  endo: <Zap className="h-6 w-6 text-purple-600" />,
  msk: <Bone className="h-6 w-6 text-gray-600" />,
  cns: <HeartHandshake className="h-6 w-6 text-indigo-600" />,
  id: <Shield className="h-6 w-6 text-emerald-600" />
};

const Index = () => {
  const navigate = useNavigate();

  const handleSystemClick = (systemId: string) => {
    navigate(`/quiz/${systemId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Select an Organ System</h2>
              <p className="text-gray-600 mb-6">
                Master USMLE Step 1 pharmacology through targeted practice questions organized by organ system. 
                Each section contains carefully crafted multiple-choice questions with detailed explanations based on high-yield concepts.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
              {organSystems.map((system) => (
                <OrganSystemCard
                  key={system.id}
                  title={system.title}
                  description={system.description}
                  icon={systemIcons[system.id as keyof typeof systemIcons]}
                  questionsCount={system.questionsCount}
                  onClick={() => handleSystemClick(system.id)}
                />
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <DrugOfTheDay />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Study Tips</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Focus on high-yield drug mechanisms and clinical applications</li>
            <li>• Pay attention to side effects and contraindications</li>
            <li>• Review explanations carefully to understand the reasoning</li>
            <li>• Use mnemonics to remember complex drug interactions</li>
            <li>• Practice regularly to reinforce key pharmacology concepts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
