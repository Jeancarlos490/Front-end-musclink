// =============================================
// TIPOS TYPESCRIPT - MUSCLINK
// =============================================

// Grupos musculares
export type MuscleGroup =
  | 'peito'
  | 'costas'
  | 'ombros'
  | 'biceps'
  | 'triceps'
  | 'antebraco'
  | 'abdomen'
  | 'quadriceps'
  | 'posterior'
  | 'gluteos'
  | 'panturrilha'
  | 'corpo_todo';

// Equipamentos
export type Equipment =
  | 'barra'
  | 'halteres'
  | 'maquina'
  | 'cabos'
  | 'peso_corporal'
  | 'kettlebell'
  | 'elastico'
  | 'nenhum';

// Nível de dificuldade
export type DifficultyLevel = 'iniciante' | 'intermediario' | 'avancado';

// Objetivo do usuário
export type UserGoal =
  | 'hipertrofia'
  | 'emagrecimento'
  | 'definicao'
  | 'forca'
  | 'resistencia'
  | 'saude';

// Gênero
export type Gender = 'masculino' | 'feminino' | 'outro' | 'prefiro_nao_dizer';

// Nível de atividade
export type ActivityLevel =
  | 'sedentario'
  | 'leve'
  | 'moderado'
  | 'ativo'
  | 'muito_ativo';

// Exercício da biblioteca
export interface Exercise {
  id: string;
  name: string;
  muscleGroup: MuscleGroup;
  secondaryMuscles?: MuscleGroup[];
  equipment: Equipment;
  difficulty: DifficultyLevel;
  instructions: string[];
  tips?: string[];
  gifUrl?: string;
  videoUrl?: string;
}

// Série de exercício
export interface WorkoutSet {
  id: string;
  targetReps: number;
  targetWeight?: number;
  actualReps?: number;
  actualWeight?: number;
  completed: boolean;
  restTime: number;
}

// Exercício dentro do treino
export interface WorkoutExercise {
  id: string;
  exerciseId: string;
  order: number;
  sets: WorkoutSet[];
  notes?: string;
}

// Treino
export interface Workout {
  id: string;
  name: string;
  description?: string;
  muscleGroups: MuscleGroup[];
  exercises: WorkoutExercise[];
  estimatedDuration: number;
  difficulty: DifficultyLevel;
  createdAt: string;
  updatedAt: string;
  isFavorite: boolean;
  isTemplate: boolean;
}

// Log de treino
export interface WorkoutLog {
  id: string;
  workoutId: string;
  workoutName: string;
  startedAt: string;
  completedAt: string;
  duration: number;
  exercises: WorkoutExerciseLog[];
  totalVolume: number;
  notes?: string;
  feeling?: 1 | 2 | 3 | 4 | 5;
}

// Log de exercício
export interface WorkoutExerciseLog {
  exerciseId: string;
  exerciseName: string;
  sets: WorkoutSetLog[];
}

// Log de série
export interface WorkoutSetLog {
  reps: number;
  weight: number;
  completed: boolean;
}

// Perfil do usuário
export interface UserProfile {
  id: string;
  name: string;
  photoUri?: string;
  gender?: Gender;
  birthDate?: string;
  weight?: number;
  height?: number;
  bodyFat?: number;
  goal: UserGoal;
  targetWeight?: number;
  level: DifficultyLevel;
  activityLevel?: ActivityLevel;
  preferredUnits: 'metric' | 'imperial';
  createdAt: string;
  updatedAt: string;
}

// Estatísticas do usuário
export interface UserStats {
  totalWorkouts: number;
  totalExercises: number;
  totalSets: number;
  totalReps: number;
  totalVolume: number;
  totalDuration: number;
  currentStreak: number;
  longestStreak: number;
  lastWorkoutDate?: string;
  workoutsThisWeek: number;
  workoutsThisMonth: number;
  totalXP: number;
  currentLevel: number;
}

// Métrica corporal
export interface BodyMetric {
  id: string;
  date: string;
  weight?: number;
  bodyFat?: number;
  chest?: number;
  waist?: number;
  hips?: number;
  leftBicep?: number;
  rightBicep?: number;
  leftThigh?: number;
  rightThigh?: number;
  notes?: string;
}

// =============================================
// FASE 2 - NOVOS TIPOS
// =============================================

// Categoria de conquista
export type AchievementCategory =
  | 'treinos'
  | 'consistencia'
  | 'forca'
  | 'volume'
  | 'exploracao'
  | 'social'
  | 'especial';

// Conquista/Badge
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: AchievementCategory;
  requirement: number;
  xpReward: number;
  unlockedAt?: string;
  progress: number;
  isUnlocked: boolean;
  tier: 'bronze' | 'prata' | 'ouro' | 'diamante';
}

// Foto de progresso
export interface ProgressPhoto {
  id: string;
  uri: string;
  date: string;
  type: 'frente' | 'lado' | 'costas';
  weight?: number;
  bodyFat?: number;
  notes?: string;
}

// Sessão de treino ativo
export interface ActiveWorkoutSession {
  id: string;
  workoutId: string;
  workoutName: string;
  startedAt: string;
  currentExerciseIndex: number;
  currentSetIndex: number;
  exercises: ActiveExercise[];
  isResting: boolean;
  restStartedAt?: string;
  restDuration: number;
  isPaused: boolean;
  pausedAt?: string;
  totalPausedTime: number;
}

// Exercício ativo na sessão
export interface ActiveExercise {
  exerciseId: string;
  exerciseName: string;
  targetSets: number;
  completedSets: ActiveSet[];
  restTime: number;
}

// Série ativa
export interface ActiveSet {
  setNumber: number;
  targetReps: number;
  targetWeight: number;
  actualReps?: number;
  actualWeight?: number;
  completed: boolean;
  completedAt?: string;
}

// Template de treino rápido
export interface QuickWorkoutTemplate {
  id: string;
  name: string;
  muscleGroups: MuscleGroup[];
  exerciseCount: number;
  estimatedDuration: number;
}

// Configuração de descanso
export interface RestSettings {
  defaultRestTime: number;
  autoStartRest: boolean;
  vibrate: boolean;
  sound: boolean;
  showMotivation: boolean;
}
