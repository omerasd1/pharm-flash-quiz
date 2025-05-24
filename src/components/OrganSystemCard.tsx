
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';

interface OrganSystemCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  questionsCount: number;
  onClick: () => void;
}

const OrganSystemCard: React.FC<OrganSystemCardProps> = ({
  title,
  description,
  icon,
  questionsCount,
  onClick
}) => {
  return (
    <Card 
      className="hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:scale-105 bg-gradient-to-br from-white to-gray-50 border-2 hover:border-blue-300"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              {icon}
            </div>
            <span className="text-lg font-semibold text-gray-800">{title}</span>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
            {questionsCount} Questions
          </span>
          <span className="text-xs text-gray-500 font-medium">Click to start →</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrganSystemCard;
