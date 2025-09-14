export type Exam = {
  id: string;
  name: string;
  coefficient: number;
};

export const EXAMS: Exam[] = [
  { id: 'math1', name: 'Première épreuve de Mathématiques', coefficient: 4 },
  { id: 'math2', name: 'Deuxième épreuve de Mathématiques', coefficient: 5 },
  { id: 'phys1', name: 'Première épreuve de Physique', coefficient: 3 },
  { id: 'phys2', name: 'Deuxième épreuve de Physique', coefficient: 4 },
  { id: 'chimie', name: 'Épreuve de Chimie', coefficient: 2 },
  { id: 'option', name: 'Épreuve d\'option MP Informatique ou S.I.', coefficient: 2 },
  { id: 'info_commun', name: 'Épreuve d\'Informatique commune MP, PC, PSI', coefficient: 2 },
  { id: 'francais', name: 'Épreuve de Français', coefficient: 5 },
  { id: 'langue', name: 'Épreuve de Langue vivante', coefficient: 3 },
];
