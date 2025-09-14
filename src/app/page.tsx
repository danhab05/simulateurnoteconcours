import { ScoreCalculator } from '@/components/ScoreCalculator';
import { OptionalExamGuidance } from '@/components/OptionalExamGuidance';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-headline font-black text-primary animate-fade-in-down">
            ScoreEase
          </h1>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Effortlessly calculate your weighted scores and receive AI-powered guidance on optional exams.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <ScoreCalculator />
          </div>
          <div className="lg:col-span-2">
            <OptionalExamGuidance />
          </div>
        </div>
        <footer className="text-center mt-12 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ScoreEase. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
