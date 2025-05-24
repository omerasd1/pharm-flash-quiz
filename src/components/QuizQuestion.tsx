
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, Lightbulb } from 'lucide-react';

interface QuizQuestionProps {
  question: string;
  options: [string, string];
  correctAnswer: number;
  explanation: string;
  onAnswer: (correct: boolean) => void;
  questionNumber: number;
  totalQuestions: number;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  options,
  correctAnswer,
  explanation,
  onAnswer,
  questionNumber,
  totalQuestions
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    const isCorrect = answerIndex === correctAnswer;
    onAnswer(isCorrect);
  };

  const getButtonStyle = (index: number) => {
    if (!showResult) {
      return "bg-white hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-300 text-gray-800";
    }
    
    if (index === correctAnswer) {
      return "bg-green-100 border-2 border-green-400 text-green-800";
    }
    
    if (index === selectedAnswer && index !== correctAnswer) {
      return "bg-red-100 border-2 border-red-400 text-red-800";
    }
    
    return "bg-gray-100 border-2 border-gray-300 text-gray-600";
  };

  const getButtonIcon = (index: number) => {
    if (!showResult) return null;
    
    if (index === correctAnswer) {
      return <CheckCircle2 className="h-5 w-5 text-green-600" />;
    }
    
    if (index === selectedAnswer && index !== correctAnswer) {
      return <XCircle className="h-5 w-5 text-red-600" />;
    }
    
    return null;
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
        <CardTitle className="flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-800">Question {questionNumber} of {totalQuestions}</span>
          <span className="text-sm bg-blue-100 px-3 py-1 rounded-full text-blue-800">
            Pharmacology Quiz
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-400">
          <p className="text-lg leading-relaxed text-gray-800">{question}</p>
        </div>
        
        <div className="grid gap-4">
          {options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`p-4 h-auto text-left justify-start transition-all duration-200 ${getButtonStyle(index)}`}
              disabled={showResult}
            >
              <div className="flex items-center space-x-3 w-full">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-semibold flex items-center justify-center text-sm">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-grow text-base">{option}</span>
                {getButtonIcon(index)}
              </div>
            </Button>
          ))}
        </div>
        
        {showResult && (
          <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-lg">
            <div className="flex items-start space-x-3">
              <Lightbulb className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">
                  {selectedAnswer === correctAnswer ? "Correct!" : "Incorrect"}
                </h4>
                <p className="text-amber-900 leading-relaxed">{explanation}</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QuizQuestion;
