import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Trophy, XCircle } from "lucide-react";

// we will be rendering this component at 2 places - one at the quiz.jsx after submitting our quiz - and another place would be the interview page - so we actually don't want a start new quiz button on the interview page - hence we'll be using a flag to know when to render/display that button.
const QuizResult = ({ result, hideStartNew = false, onStartNew }) => {
  if (!result) return null;

  return (
    <div className="mx-auto">
      <h1 className="flex items-center gap-2 text-3xl gradient-title">
        <Trophy className="w-6 h-6 text-yellow-500" />
        Quiz Results
      </h1>

      <CardContent className="space-y-6">
        {/* Score Overview */}
        <div className="text-center space-y-2">
          <h3>{result.quizScore.toFixed(1)}%</h3>
          <Progress value={result.quizScore} className="w-full" />
        </div>

        {/* Improvement Tip */}
        {result.improvementTip && (
            <div className="bg-muted p-4 rounded-lg">
                <p className="font-medium">Improvement Tip:</p>
                <p className="text-muted-foreground">{result.improvementTip}</p>
            </div>
        )}

        <div className="space-y-4">
            <h3 className="font-medium">Question Review</h3>
            {result.questions.map((q, index) => (
                <div className="border rounded-lg p-4 space-y-2" key={index}>
                    <div className="flex items-start justify-between gap-2">
                        <p className="font-medium">{q.question}</p>
                        {q.isCorrect ? (
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        ) : (
                            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                        )}
                    </div>

                    <div className="text-sm text-muted-foreground">
                        <p>Your answer: {q.userAnswer}</p>
                        {!q.isCorrect && <p>Correct answer: {q.answer}</p>}
                    </div>

                    {/* Explanation */}
                    <div className="text-sm bg-muted p-2 rounded">
                        <p className="font-medium">Explanation:</p>
                        <p>{q.explanation}</p>
                    </div>
                </div>
            ))}
        </div>
      </CardContent>

      {!hideStartNew && (
        <CardFooter>
            <Button onClick={onStartNew} className="w-full">
                Start New Quiz
            </Button>
        </CardFooter>
      )}
    </div>
  );
};

export default QuizResult;
