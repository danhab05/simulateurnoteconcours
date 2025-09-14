'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TotalScore } from '@/components/TotalScore';
import { Separator } from './ui/separator';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import type { Exam } from '@/lib/constants';

type ScoreCalculatorProps = {
  exams: Exam[];
  title: string;
  bonusPoints: number;
  bonusLabel: string;
  hasBonus: boolean;
};

export function ScoreCalculator({ exams, title, bonusPoints, bonusLabel, hasBonus }: ScoreCalculatorProps) {
  const [scores, setScores] = React.useState<Record<string, string>>({});
  const [bonusOption, setBonusOption] = React.useState<'3/2' | '5/2'>('3/2');

  const handleScoreChange = (examId: string, value: string) => {
    const numericValue = value.replace(/[^0-9.]/g, '');
    setScores((prevScores) => ({
      ...prevScores,
      [examId]: numericValue,
    }));
  };

  const calculatedScore = React.useMemo(() => {
    const baseScore = exams.reduce((acc, exam) => {
      const scoreStr = scores[exam.id];
      const score = parseFloat(scoreStr);
      if (!isNaN(score) && score >= 0 && score <= 20) {
        return acc + score * exam.coefficient;
      }
      return acc;
    }, 0);

    const bonus = hasBonus && bonusOption === '3/2' ? bonusPoints : 0;
    return baseScore + bonus;
  }, [scores, bonusOption, exams, hasBonus, bonusPoints]);

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 mt-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription>Entrez vos notes pour voir votre score total.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {exams.map((exam) => (
            <div key={exam.id} className="grid grid-cols-1 md:grid-cols-6 items-center gap-4">
              <Label htmlFor={exam.id} className="md:col-span-4 font-medium flex items-center">
                {exam.name}
              </Label>
              <div className="md:col-span-1">
                <Input
                  id={exam.id}
                  type="number"
                  placeholder="0-20"
                  min="0"
                  max="20"
                  value={scores[exam.id] || ''}
                  onChange={(e) => handleScoreChange(exam.id, e.target.value)}
                  className="w-full text-center"
                />
              </div>
              <p className="md:col-span-1 text-sm text-muted-foreground text-left md:text-right">
                (Coeff. {exam.coefficient})
              </p>
            </div>
          ))}
          {hasBonus && (
            <>
              <Separator />
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 pt-4">
                <Label className="font-medium">Bonus</Label>
                <RadioGroup
                  defaultValue="3/2"
                  onValueChange={(value: '3/2' | '5/2') => setBonusOption(value)}
                  className="flex items-center space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3/2" id={`r2-${title}`} />
                    <Label htmlFor={`r2-${title}`}>{bonusLabel}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="5/2" id={`r3-${title}`} />
                    <Label htmlFor={`r3-${title}`}>5/2</Label>
                  </div>
                </RadioGroup>
              </div>
            </>
          )}
        </div>
      </CardContent>
      <Separator className="my-0" />
      <CardFooter className="pt-6">
        <TotalScore score={calculatedScore} />
      </CardFooter>
    </Card>
  );
}
