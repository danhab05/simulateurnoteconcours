import { ScoreCalculator } from '@/components/ScoreCalculator';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MINES_PONTS_EXAMS, CENTRALE_EXAMS, CONCOURS_X_EXAMS } from '@/lib/constants';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-headline font-black text-primary animate-fade-in-down">
            Simulateur de Notes de Concours
          </h1>
        </header>

        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <Tabs defaultValue="mines-pont">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="mines-pont">Mines Ponts</TabsTrigger>
                <TabsTrigger value="concours-centrale">Centrale</TabsTrigger>
                <TabsTrigger value="concours-x">École Polytechnique (X)</TabsTrigger>
              </TabsList>
              <TabsContent value="mines-pont">
                <ScoreCalculator 
                  exams={MINES_PONTS_EXAMS} 
                  title="Concours Commun Mines Ponts" 
                  bonusPoints={30} 
                  bonusLabel="3/2 (+30 points)"
                  hasBonus={true} 
                />
              </TabsContent>
              <TabsContent value="concours-centrale">
                <ScoreCalculator 
                  exams={CENTRALE_EXAMS} 
                  title="Concours Centrale" 
                  bonusPoints={80} 
                  bonusLabel="3/2 (+80 points)"
                  hasBonus={true}
                />
              </TabsContent>
              <TabsContent value="concours-x">
                <ScoreCalculator 
                  exams={CONCOURS_X_EXAMS} 
                  title="Concours X (École Polytechnique)" 
                  bonusPoints={54} 
                  bonusLabel="3/2 (+54 points)"
                  hasBonus={true}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <footer className="text-center mt-12 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Habib Dan. Tous droits réservés.</p>
        </footer>
      </main>
    </div>
  );
}
