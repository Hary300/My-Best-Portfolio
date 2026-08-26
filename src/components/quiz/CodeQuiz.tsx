import { quizQuestions, type QuizQuestion } from '@/data/quiz-questions';
import { Button } from '../ui/button';
import CodeBlock from './CodeBlock';
import { MdOutlineQuiz } from 'react-icons/md';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import confetti from 'canvas-confetti';

interface GetRandomQuestionProps {
  questions: QuizQuestion[];
  currentId?: number;
}

const getRandomQuestion = ({
  questions,
  currentId,
}: GetRandomQuestionProps) => {
  const availableQuestions = questions.filter(
    (question) => question.id !== currentId
  );
  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  return availableQuestions[randomIndex];
};

const CodeQuiz = () => {
  const [question, setQuestion] = useState<QuizQuestion>(
    getRandomQuestion({ questions: quizQuestions })
  );
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleClickAnswer = (id: string) => {
    setSelectedId(id);
    if (id === question.correctAnswer) {
      confetti({
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10b981', '#3b82f6', '#f59e0b', '#ec4899'],
      });

      const nextQuestion = getRandomQuestion({
        questions: quizQuestions,
        currentId: question.id,
      });

      setTimeout(() => {
        setQuestion(nextQuestion);
        setSelectedId(null);
      }, 1000);
    }
  };

  return (
    <div className='flex flex-col gap-4 p-4 rounded-lg bg-white dark:bg-portfolio-dark-secondary shadow-subtle mt-5'>
      <div className='flex gap-1 items-center text-2xl '>
        <div className='size-8 rounded-full aspect-square shrink-0 bg-portfolio-green/30 p-1 flex justify-center items-center'>
          <MdOutlineQuiz className='size-4 text-portfolio-green dark:text-emerald-300 dark:drop-shadow-glow-icon' />
        </div>{' '}
        <p className='text-portfolio-green font-semibold'>Quiz Code</p>
      </div>

      <div className='flex flex-col gap-4 w-full'>
        <CodeBlock code={question.code} />
        <div className='flex flex-wrap gap-2 xl:gap-3 w-full'>
          {question.options.map((option) => {
            const isSelected = option.id === selectedId;
            const isCorrect = option.id === question.correctAnswer;

            let buttonStyle = '';
            if (isSelected) {
              if (isCorrect) {
                buttonStyle =
                  'border-emerald-500 bg-emerald-100 text-emerald-900 font-bold dark:border-emerald-500 dark:bg-emerald-100 dark:text-emerald-900 dark:font-bold';
              } else {
                buttonStyle =
                  'border-rose-500 bg-rose-100 text-rose-900 font-bold dark:border-rose-500 dark:bg-rose-100 dark:text-rose-900 dark:font-bold';
              }
            }
            return (
              <Button
                variant='outline'
                key={option.id}
                className={cn(
                  'p-4 rounded-md flex justify-center items-center text-portfolio-green dark:text-portfolio-gray-muted shadow-subtle',
                  buttonStyle
                )}
                onClick={() => handleClickAnswer(option.id)}
              >
                <span>{option.id}.</span>
                {option.text}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CodeQuiz;
