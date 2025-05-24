
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Target, Award } from 'lucide-react';

interface ProgressTrackerProps {
  totalQuestions: number;
  correctAnswers: number;
  questionsAnswered: number;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  totalQuestions,
  correctAnswers,
  questionsAnswered
}) => {
  const completionPercentage = (questionsAnswered / totalQuestions) * 100;
  const accuracyPercentage = questionsAnswered > 0 ? (correctAnswers / questionsAnswered) * 100 : 0;

  return (
    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2 text-green-800">
          <TrendingUp className="h-5 w-5" />
          <span>Progress Tracker</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="space-y-1">
            <div className="flex items-center justify-center space-x-1">
              <Target className="h-4 w-4 text-blue-600" />
              <span className="text-2xl font-bold text-blue-600">{questionsAnswered}</span>
            </div>
            <p className="text-xs text-gray-600">Answered</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-center space-x-1">
              <Award className="h-4 w-4 text-green-600" />
              <span className="text-2xl font-bold text-green-600">{correctAnswers}</span>
            </div>
            <p className="text-xs text-gray-600">Correct</p>
          </div>
          <div className="space-y-1">
            <span className="text-2xl font-bold text-purple-600">{accuracyPercentage.toFixed(0)}%</span>
            <p className="text-xs text-gray-600">Accuracy</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Completion</span>
            <span className="font-medium">{questionsAnswered}/{totalQuestions}</span>
          </div>
          <Progress value={completionPercentage} className="h-2" />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Accuracy</span>
            <span className="font-medium">{accuracyPercentage.toFixed(1)}%</span>
          </div>
          <Progress value={accuracyPercentage} className="h-2 bg-green-100" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressTracker;
