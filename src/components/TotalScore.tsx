'use client';

type TotalScoreProps = {
  score: number;
};

export function TotalScore({ score }: TotalScoreProps) {
  const formattedScore = score.toFixed(2);

  return (
    <div className="w-full text-center md:text-left">
      <h3 className="text-lg font-medium text-muted-foreground">Moyenne Pondérée</h3>
      <p className="text-6xl font-black text-accent tracking-tighter mt-1">{formattedScore}</p>
      <p className="text-xs text-muted-foreground mt-2">
        Ceci est votre moyenne calculée sur la base des notes que vous avez saisies.
      </p>
    </div>
  );
}
