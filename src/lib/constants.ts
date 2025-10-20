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
  { id: 'centrale_math1', name: 'Mathématiques 1', coefficient: 19 },
  { id: 'centrale_math2', name: 'Mathématiques 2', coefficient: 19 },
  { id: 'centrale_phys_chimie1', name: 'Physique-chimie 1', coefficient: 12 },
  { id: 'centrale_phys_chimie2', name: 'Physique-chimie 2', coefficient: 12 },
  { id: 'centrale_s2i_info', name: 'S2I ou Informatique', coefficient: 10 },
  { id: 'centrale_redaction', name: 'Rédaction', coefficient: 17 },
  { id: 'centrale_langue', name: 'Langue vivante', coefficient: 11 },
];

export const CONCOURS_X_EXAMS: Exam[] = [
  { id: 'x_math1', name: 'Mathématiques 1', coefficient: 12 },
  { id: 'x_math2', name: 'Mathématiques 2', coefficient: 12 },
  { id: 'x_physique', name: 'Physique', coefficient: 8 },
  { id: 'x_chimie', name: 'Chimie', coefficient: 4 },
  { id: 'x_option_info_si', name: 'Option Informatique ou S.I.', coefficient: 8 },
  { id: 'x_francais', name: 'Français-Philosophie', coefficient: 6 },
  { id: 'x_langue', name: 'Langue vivante', coefficient: 4 },
];

// Copyright 2025 Habib Dan
