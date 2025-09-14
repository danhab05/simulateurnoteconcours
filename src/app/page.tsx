import { ScoreCalculator } from '@/components/ScoreCalculator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-headline font-black text-primary animate-fade-in-down">
            Calculateur de Notes
          </h1>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Calculez sans effort vos notes pondérées pour les concours.
          </p>
        </header>

        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <ScoreCalculator />
          </div>
        </div>
        <footer className="text-center mt-12 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Calculateur de Notes. Tous droits réservés.</p>
        </footer>
      </main>
    </div>
  );
}
