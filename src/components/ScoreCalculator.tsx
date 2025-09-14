'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { EXAMS } from '@/lib/constants';
import { TotalScore } from '@/components/TotalScore';
import { Separator } from './ui/separator';

export function ScoreCalculator() {
  const [scores, setScores] = React.useState<Record<string, string>>({});

  const handleScoreChange = (examId: string, value: string) => {
    const numericValue = value.replace(/[^0-9.]/g, '');
    setScores((prevScores) => ({
      ...prevScores,
      [examId]: numericValue,
    }));
  };

  const calculatedScore = React.useMemo(() => {
    return EXAMS.reduce((acc, exam) => {
      const scoreStr = scores[exam.id];
      const score = parseFloat(scoreStr);
      if (!isNaN(score) && score >= 0 && score <= 20) {
        return acc + score * exam.coefficient;
      }
      return acc;
    }, 0);
  }, [scores]);

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Calculateur de Notes</CardTitle>
        <CardDescription>Entrez vos notes pour voir votre score total.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {EXAMS.map((exam) => (
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
        </div>
      </CardContent>
      <Separator className="my-0" />
      <CardFooter className="pt-6">
        <TotalScore score={calculatedScore} />
      </CardFooter>
    </Card>
  );
}
