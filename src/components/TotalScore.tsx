'use client';

type TotalScoreProps = {
  score: number;
};

export function TotalScore({ score }: TotalScoreProps) {
  const formattedScore = score.toFixed(2);

  return (
    <div className="w-full text-center md:text-left">
      <h3 className="text-lg font-medium text-muted-foreground">Total Accumulated Points</h3>
      <p className="text-6xl font-black text-accent tracking-tighter mt-1">{formattedScore}</p>
      <p className="text-xs text-muted-foreground mt-2">
        This is the sum of your weighted scores based on the grades you've entered.
      </p>
    </div>
  );
}
