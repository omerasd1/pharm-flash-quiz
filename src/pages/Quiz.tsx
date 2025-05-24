
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import QuizQuestion from '@/components/QuizQuestion';
import ProgressTracker from '@/components/ProgressTracker';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, RotateCcw } from 'lucide-react';
import { pharmacologyQuestions, organSystems } from '@/data/questions';

const Quiz = () => {
  const { systemId } = useParams();
  const navigate = useNavigate();
  
  const systemInfo = organSystems.find(sys => sys.id === systemId);
  const systemQuestions = pharmacologyQuestions.filter(q => 
    q.system === systemInfo?.title
  );
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    if (systemQuestions.length === 0) {
      navigate('/');
    }
  }, [systemQuestions, navigate]);

  const handleAnswer = (correct: boolean) => {
    if (correct) {
      setCorrectAnswers(prev => prev + 1);
    }
    setQuestionsAnswered(prev => prev + 1);
    
    setTimeout(() => {
      if (currentQuestionIndex < systemQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        setQuizCompleted(true);
      }
    }, 2500);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setQuestionsAnswered(0);
    setQuizCompleted(false);
  };

  const goHome = () => {
    navigate('/');
  };

  if (systemQuestions.length === 0) {
    return null;
  }

  if (quizCompleted) {
    const accuracy = (correctAnswers / questionsAnswered) * 100;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Quiz Complete!</h2>
              <p className="text-lg text-gray-600 mb-6">{systemInfo?.title}</p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{questionsAnswered}</div>
                  <div className="text-sm text-gray-600">Questions</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{correctAnswers}</div>
                  <div className="text-sm text-gray-600">Correct</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{accuracy.toFixed(1)}%</div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <Button onClick={resetQuiz} className="w-full" size="lg">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Retake Quiz
                </Button>
                <Button onClick={goHome} variant="outline" className="w-full" size="lg">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = systemQuestions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <Button onClick={goHome} variant="outline" className="flex items-center space-x-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Button>
          <h2 className="text-xl font-semibold text-gray-800">{systemInfo?.title}</h2>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <QuizQuestion
              question={currentQuestion.question}
              options={currentQuestion.options}
              correctAnswer={currentQuestion.correctAnswer}
              explanation={currentQuestion.explanation}
              onAnswer={handleAnswer}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={systemQuestions.length}
            />
          </div>
          
          <div className="lg:col-span-1">
            <ProgressTracker
              totalQuestions={systemQuestions.length}
              correctAnswers={correctAnswers}
              questionsAnswered={questionsAnswered}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
