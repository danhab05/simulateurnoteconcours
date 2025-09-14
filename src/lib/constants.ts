export type Exam = {
  id: string;
  name: string;
  weight: number;
  isPotentiallyOptional: boolean;
};

// These weights for non-optional exams add up to 1.0.
export const EXAMS: Exam[] = [
  { id: 'midterm1', name: 'Midterm Exam 1', weight: 0.25, isPotentiallyOptional: false },
  { id: 'midterm2', name: 'Midterm Exam 2', weight: 0.25, isPotentiallyOptional: false },
  { id: 'final', name: 'Final Exam', weight: 0.35, isPotentiallyOptional: false },
  { id: 'project', name: 'Class Project', weight: 0.15, isPotentiallyOptional: false },
  { id: 'extra_credit', name: 'Extra Credit', weight: 0.05, isPotentiallyOptional: true },
];
