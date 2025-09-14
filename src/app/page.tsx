import { ScoreCalculator } from '@/components/ScoreCalculator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MINES_PONTS_EXAMS, CENTRALE_EXAMS } from '@/lib/constants';

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
            <Tabs defaultValue="mines-pont">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="mines-pont">Mines Pont</TabsTrigger>
                <TabsTrigger value="concours-centrale">Concours Centrale</TabsTrigger>
              </TabsList>
              <TabsContent value="mines-pont">
                <ScoreCalculator exams={MINES_PONTS_EXAMS} title="Concours Mines Pont" />
              </TabsContent>
              <TabsContent value="concours-centrale">
                <ScoreCalculator exams={CENTRALE_EXAMS} title="Concours Centrale" />
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <footer className="text-center mt-12 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Calculateur de Notes. Tous droits réservés.</p>
        </footer>
      </main>
    </div>
  );
}
