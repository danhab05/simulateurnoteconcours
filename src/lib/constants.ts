export type Exam = {
  id: string;
  name: string;
  coefficient: number;
};

export const MINES_PONTS_EXAMS: Exam[] = [
  { id: 'mines_math1', name: 'Première épreuve de Mathématiques', coefficient: 4 },
  { id: 'mines_math2', name: 'Deuxième épreuve de Mathématiques', coefficient: 5 },
  { id: 'mines_phys1', name: 'Première épreuve de Physique', coefficient: 3 },
  { id: 'mines_phys2', name: 'Deuxième épreuve de Physique', coefficient: 4 },
  { id: 'mines_chimie', name: 'Épreuve de Chimie', coefficient: 2 },
  { id: 'mines_option', name: 'Épreuve d\'option MP Informatique ou S.I.', coefficient: 2 },
  { id: 'mines_info_commun', name: 'Épreuve d\'Informatique commune MP, PC, PSI', coefficient: 2 },
  { id: 'mines_francais', name: 'Épreuve de Français', coefficient: 5 },
  { id: 'mines_langue', name: 'Épreuve de Langue vivante', coefficient: 3 },
];

export const CENTRALE_EXAMS: Exam[] = [
  { id: 'centrale_math1', name: 'Première épreuve de Mathématiques', coefficient: 4 },
  { id: 'centrale_math2', name: 'Deuxième épreuve de Mathématiques', coefficient: 5 },
  { id: 'centrale_phys1', name: 'Première épreuve de Physique', coefficient: 3 },
  { id: 'centrale_phys2', name: 'Deuxième épreuve de Physique', coefficient: 4 },
  { id: 'centrale_chimie', name: 'Épreuve de Chimie', coefficient: 2 },
  { id: 'centrale_option', name: 'Épreuve d\'option MP Informatique ou S.I.', coefficient: 2 },
  { id: 'centrale_info_commun', name: 'Épreuve d\'Informatique commune MP, PC, PSI', coefficient: 2 },
  { id: 'centrale_francais', name: 'Épreuve de Français', coefficient: 5 },
  { id: 'centrale_langue', name: 'Épreuve de Langue vivante', coefficient: 3 },
];
