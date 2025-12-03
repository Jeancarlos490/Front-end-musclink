// =============================================
// BIBLIOTECA DE EXERCÍCIOS - MUSCLINK
// =============================================

import { Exercise } from '../types';

export const exercisesData: Exercise[] = [
  // PEITO
  {
    id: 'ex_001',
    name: 'Supino Reto com Barra',
    muscleGroup: 'peito',
    secondaryMuscles: ['triceps', 'ombros'],
    equipment: 'barra',
    difficulty: 'intermediario',
    instructions: [
      'Deite no banco com os pés apoiados no chão',
      'Segure a barra com pegada um pouco mais larga que os ombros',
      'Desça a barra controladamente até tocar levemente o peito',
      'Empurre a barra para cima até estender os braços',
    ],
    tips: ['Mantenha as escápulas retraídas', 'Não rebata a barra no peito'],
  },
  {
    id: 'ex_002',
    name: 'Supino Inclinado com Halteres',
    muscleGroup: 'peito',
    secondaryMuscles: ['triceps', 'ombros'],
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Ajuste o banco em 30-45 graus',
      'Segure um halter em cada mão na altura do peito',
      'Empurre os halteres para cima',
      'Desça controladamente',
    ],
    tips: ['Foco na parte superior do peito'],
  },
  {
    id: 'ex_003',
    name: 'Crucifixo na Máquina',
    muscleGroup: 'peito',
    equipment: 'maquina',
    difficulty: 'iniciante',
    instructions: [
      'Ajuste o banco para braços na altura do peito',
      'Traga as alças à frente contraindo o peito',
      'Retorne controladamente',
    ],
    tips: ['Mantenha cotovelos levemente dobrados'],
  },
  {
    id: 'ex_004',
    name: 'Flexão de Braço',
    muscleGroup: 'peito',
    secondaryMuscles: ['triceps', 'ombros', 'abdomen'],
    equipment: 'peso_corporal',
    difficulty: 'iniciante',
    instructions: [
      'Apoie as mãos no chão, mais largas que os ombros',
      'Mantenha o corpo reto',
      'Desça até o peito quase tocar o chão',
      'Empurre de volta',
    ],
    tips: ['Iniciantes podem fazer com joelhos apoiados'],
  },

  // COSTAS
  {
    id: 'ex_005',
    name: 'Puxada Frontal',
    muscleGroup: 'costas',
    secondaryMuscles: ['biceps'],
    equipment: 'maquina',
    difficulty: 'iniciante',
    instructions: [
      'Sente-se e ajuste a almofada nas coxas',
      'Segure a barra mais larga que os ombros',
      'Puxe em direção ao peito',
      'Retorne controladamente',
    ],
    tips: ['Não balance o tronco'],
  },
  {
    id: 'ex_006',
    name: 'Remada Curvada',
    muscleGroup: 'costas',
    secondaryMuscles: ['biceps', 'posterior'],
    equipment: 'barra',
    difficulty: 'intermediario',
    instructions: [
      'Incline o tronco à frente mantendo costas retas',
      'Puxe a barra em direção ao abdômen',
      'Desça controladamente',
    ],
    tips: ['Joelhos levemente flexionados', 'Não arredonde as costas'],
  },
  {
    id: 'ex_007',
    name: 'Remada Unilateral',
    muscleGroup: 'costas',
    secondaryMuscles: ['biceps'],
    equipment: 'halteres',
    difficulty: 'iniciante',
    instructions: [
      'Apoie um joelho e uma mão no banco',
      'Puxe o halter em direção ao quadril',
      'Desça controladamente',
    ],
    tips: ['Costas paralelas ao chão'],
  },
  {
    id: 'ex_008',
    name: 'Barra Fixa',
    muscleGroup: 'costas',
    secondaryMuscles: ['biceps', 'antebraco'],
    equipment: 'peso_corporal',
    difficulty: 'avancado',
    instructions: [
      'Segure a barra mais larga que os ombros',
      'Puxe o corpo até o queixo passar da barra',
      'Desça controladamente',
    ],
    tips: ['Evite balançar', 'Use elástico se precisar'],
  },

  // OMBROS
  {
    id: 'ex_009',
    name: 'Desenvolvimento com Halteres',
    muscleGroup: 'ombros',
    secondaryMuscles: ['triceps'],
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Sente-se com costas apoiadas',
      'Segure os halteres na altura dos ombros',
      'Empurre para cima até estender os braços',
      'Desça controladamente',
    ],
    tips: ['Não arqueie as costas'],
  },
  {
    id: 'ex_010',
    name: 'Elevação Lateral',
    muscleGroup: 'ombros',
    equipment: 'halteres',
    difficulty: 'iniciante',
    instructions: [
      'Em pé, segure halteres ao lado do corpo',
      'Eleve os braços lateralmente até altura dos ombros',
      'Desça controladamente',
    ],
    tips: ['Cotovelos levemente flexionados'],
  },
  {
    id: 'ex_011',
    name: 'Elevação Frontal',
    muscleGroup: 'ombros',
    equipment: 'halteres',
    difficulty: 'iniciante',
    instructions: [
      'Segure halteres à frente das coxas',
      'Eleve um braço de cada vez até altura dos ombros',
      'Desça controladamente',
    ],
    tips: ['Controle o movimento'],
  },

  // BÍCEPS
  {
    id: 'ex_012',
    name: 'Rosca Direta',
    muscleGroup: 'biceps',
    secondaryMuscles: ['antebraco'],
    equipment: 'barra',
    difficulty: 'iniciante',
    instructions: [
      'Em pé, segure a barra na largura dos ombros',
      'Flexione os cotovelos trazendo a barra até os ombros',
      'Desça controladamente',
    ],
    tips: ['Cotovelos fixos ao lado do corpo'],
  },
  {
    id: 'ex_013',
    name: 'Rosca Alternada',
    muscleGroup: 'biceps',
    secondaryMuscles: ['antebraco'],
    equipment: 'halteres',
    difficulty: 'iniciante',
    instructions: [
      'Segure um halter em cada mão',
      'Flexione um braço rotacionando a palma para cima',
      'Alterne os braços',
    ],
    tips: ['Mantenha o cotovelo fixo'],
  },
  {
    id: 'ex_014',
    name: 'Rosca Martelo',
    muscleGroup: 'biceps',
    secondaryMuscles: ['antebraco'],
    equipment: 'halteres',
    difficulty: 'iniciante',
    instructions: [
      'Segure halteres com pegada neutra',
      'Flexione os cotovelos mantendo a pegada',
      'Desça controladamente',
    ],
    tips: ['Trabalha o braquial'],
  },

  // TRÍCEPS
  {
    id: 'ex_015',
    name: 'Tríceps Pulley',
    muscleGroup: 'triceps',
    equipment: 'cabos',
    difficulty: 'iniciante',
    instructions: [
      'De frente para a polia alta',
      'Segure a barra com pegada pronada',
      'Estenda os braços empurrando para baixo',
      'Retorne controladamente',
    ],
    tips: ['Cotovelos fixos ao lado do corpo'],
  },
  {
    id: 'ex_016',
    name: 'Tríceps Testa',
    muscleGroup: 'triceps',
    equipment: 'barra',
    difficulty: 'intermediario',
    instructions: [
      'Deite no banco segurando a barra',
      'Flexione os cotovelos levando a barra à testa',
      'Estenda os braços de volta',
    ],
    tips: ['Cotovelos apontados para cima'],
  },
  {
    id: 'ex_017',
    name: 'Mergulho no Banco',
    muscleGroup: 'triceps',
    secondaryMuscles: ['peito', 'ombros'],
    equipment: 'peso_corporal',
    difficulty: 'iniciante',
    instructions: [
      'Apoie as mãos na borda do banco',
      'Flexione os cotovelos descendo o corpo',
      'Empurre de volta',
    ],
    tips: ['Não desça demais para proteger os ombros'],
  },

  // QUADRÍCEPS
  {
    id: 'ex_018',
    name: 'Agachamento Livre',
    muscleGroup: 'quadriceps',
    secondaryMuscles: ['gluteos', 'posterior'],
    equipment: 'barra',
    difficulty: 'intermediario',
    instructions: [
      'Barra nos trapézios, pés na largura dos ombros',
      'Desça flexionando quadris e joelhos',
      'Suba empurrando o chão',
    ],
    tips: ['Peito alto, costas retas'],
  },
  {
    id: 'ex_019',
    name: 'Leg Press 45°',
    muscleGroup: 'quadriceps',
    secondaryMuscles: ['gluteos'],
    equipment: 'maquina',
    difficulty: 'iniciante',
    instructions: [
      'Costas bem apoiadas',
      'Desça a plataforma controladamente',
      'Empurre sem travar os joelhos',
    ],
    tips: ['Não tire o quadril do banco'],
  },
  {
    id: 'ex_020',
    name: 'Cadeira Extensora',
    muscleGroup: 'quadriceps',
    equipment: 'maquina',
    difficulty: 'iniciante',
    instructions: [
      'Ajuste o rolo nas canelas',
      'Estenda os joelhos levantando o peso',
      'Desça controladamente',
    ],
    tips: ['Segure a contração no topo'],
  },
  {
    id: 'ex_021',
    name: 'Afundo',
    muscleGroup: 'quadriceps',
    secondaryMuscles: ['gluteos'],
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Dê um passo à frente',
      'Desça até o joelho de trás quase tocar o chão',
      'Empurre de volta',
    ],
    tips: ['Tronco ereto'],
  },

  // POSTERIOR
  {
    id: 'ex_022',
    name: 'Mesa Flexora',
    muscleGroup: 'posterior',
    equipment: 'maquina',
    difficulty: 'iniciante',
    instructions: [
      'Deite de bruços',
      'Flexione os joelhos trazendo calcanhares aos glúteos',
      'Desça controladamente',
    ],
    tips: ['Não levante o quadril'],
  },
  {
    id: 'ex_023',
    name: 'Stiff',
    muscleGroup: 'posterior',
    secondaryMuscles: ['gluteos', 'costas'],
    equipment: 'barra',
    difficulty: 'intermediario',
    instructions: [
      'Segure a barra à frente das coxas',
      'Incline o tronco empurrando quadril para trás',
      'Retorne contraindo glúteos',
    ],
    tips: ['Joelhos levemente flexionados', 'Costas retas'],
  },

  // GLÚTEOS
  {
    id: 'ex_024',
    name: 'Hip Thrust',
    muscleGroup: 'gluteos',
    secondaryMuscles: ['posterior'],
    equipment: 'barra',
    difficulty: 'intermediario',
    instructions: [
      'Costas apoiadas no banco',
      'Barra sobre o quadril',
      'Eleve o quadril contraindo glúteos',
      'Desça controladamente',
    ],
    tips: ['Principal exercício para glúteos'],
  },
  {
    id: 'ex_025',
    name: 'Elevação Pélvica',
    muscleGroup: 'gluteos',
    secondaryMuscles: ['posterior'],
    equipment: 'peso_corporal',
    difficulty: 'iniciante',
    instructions: [
      'Deite de costas com joelhos flexionados',
      'Eleve o quadril contraindo glúteos',
      'Segure no topo e desça',
    ],
    tips: ['Versão básica do hip thrust'],
  },

  // PANTURRILHA
  {
    id: 'ex_026',
    name: 'Elevação de Panturrilha em Pé',
    muscleGroup: 'panturrilha',
    equipment: 'maquina',
    difficulty: 'iniciante',
    instructions: [
      'Ombros sob as almofadas',
      'Eleve os calcanhares o máximo possível',
      'Desça alongando a panturrilha',
    ],
    tips: ['Movimento completo'],
  },
  {
    id: 'ex_027',
    name: 'Elevação de Panturrilha Sentado',
    muscleGroup: 'panturrilha',
    equipment: 'maquina',
    difficulty: 'iniciante',
    instructions: [
      'Joelhos sob a almofada',
      'Eleve os calcanhares',
      'Desça alongando',
    ],
    tips: ['Trabalha o sóleo'],
  },

  // ABDÔMEN
  {
    id: 'ex_028',
    name: 'Abdominal Crunch',
    muscleGroup: 'abdomen',
    equipment: 'peso_corporal',
    difficulty: 'iniciante',
    instructions: [
      'Deite com joelhos flexionados',
      'Eleve os ombros contraindo o abdômen',
      'Desça controladamente',
    ],
    tips: ['Não puxe o pescoço'],
  },
  {
    id: 'ex_029',
    name: 'Prancha',
    muscleGroup: 'abdomen',
    secondaryMuscles: ['ombros'],
    equipment: 'peso_corporal',
    difficulty: 'iniciante',
    instructions: [
      'Apoie antebraços e pontas dos pés',
      'Corpo reto da cabeça aos pés',
      'Mantenha a posição',
    ],
    tips: ['Não deixe o quadril subir ou descer'],
  },
  {
    id: 'ex_030',
    name: 'Elevação de Pernas',
    muscleGroup: 'abdomen',
    equipment: 'peso_corporal',
    difficulty: 'intermediario',
    instructions: [
      'Deite com mãos sob o quadril',
      'Eleve as pernas até 90 graus',
      'Desça sem tocar o chão',
    ],
    tips: ['Lombar pressionada no chão'],
  },
];

// Funções auxiliares
export const getExerciseById = (id: string): Exercise | undefined => {
  return exercisesData.find(ex => ex.id === id);
};

export const getExercisesByMuscleGroup = (muscleGroup: string): Exercise[] => {
  return exercisesData.filter(
    ex => ex.muscleGroup === muscleGroup || ex.secondaryMuscles?.includes(muscleGroup as any)
  );
};

export const searchExercises = (query: string): Exercise[] => {
  const lowerQuery = query.toLowerCase();
  return exercisesData.filter(ex => ex.name.toLowerCase().includes(lowerQuery));
};

// Labels e cores
export const muscleGroupLabels: Record<string, string> = {
  peito: 'Peito',
  costas: 'Costas',
  ombros: 'Ombros',
  biceps: 'Bíceps',
  triceps: 'Tríceps',
  antebraco: 'Antebraço',
  abdomen: 'Abdômen',
  quadriceps: 'Quadríceps',
  posterior: 'Posterior',
  gluteos: 'Glúteos',
  panturrilha: 'Panturrilha',
  corpo_todo: 'Corpo Todo',
};

export const muscleGroupColors: Record<string, string> = {
  peito: '#E53935',
  costas: '#1E88E5',
  ombros: '#FF6B00',
  biceps: '#8E24AA',
  triceps: '#5E35B1',
  antebraco: '#7B1FA2',
  abdomen: '#43A047',
  quadriceps: '#00ACC1',
  posterior: '#00897B',
  gluteos: '#D81B60',
  panturrilha: '#3949AB',
  corpo_todo: '#6D4C41',
};

export const difficultyLabels: Record<string, string> = {
  iniciante: 'Iniciante',
  intermediario: 'Intermediário',
  avancado: 'Avançado',
};

export const difficultyColors: Record<string, string> = {
  iniciante: '#4CAF50',
  intermediario: '#FF9800',
  avancado: '#F44336',
};

export const equipmentLabels: Record<string, string> = {
  barra: 'Barra',
  halteres: 'Halteres',
  maquina: 'Máquina',
  cabos: 'Cabos',
  peso_corporal: 'Peso Corporal',
  kettlebell: 'Kettlebell',
  elastico: 'Elástico',
  nenhum: 'Nenhum',
};

export const equipmentIcons: Record<string, string> = {
  barra: '🏋️',
  halteres: '💪',
  maquina: '⚙️',
  cabos: '🔗',
  peso_corporal: '🧘',
  kettlebell: '🔔',
  elastico: '〰️',
  nenhum: '✋',
};
