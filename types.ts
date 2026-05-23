export interface UserProfile {
  uid: string;
  displayName: string;
  email: string | null;
  photoURL: string | null;
  totalScore: number;
  quizzesTaken: number;
  isAdmin: boolean;
  createdAt: any;
  
  // New Profile Fields
  fatherName?: string;
  motherName?: string;
  mobileNumber?: string;
  whatsappNumber?: string;
  address?: string;
  division?: string;
  district?: string;
  schoolName?: string;
  facebookLink?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  questionCount?: number;
  
  // New Admin Fields
  banner?: string;
  logo?: string;
  duration?: number; // in seconds
  type?: 'paid' | 'unpaid';
  price?: number;
}

export interface Question {
  id: string;
  categoryId: string;
  questionText: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuizResult {
  userId: string;
  categoryName: string;
  score: number;
  totalQuestions: number;
  timeTaken: number;
  completedAt: any;
}

export interface LeaderboardEntry {
  userId: string;
  displayName: string;
  photoURL: string | null;
  totalScore: number;
  district?: string;
  rank?: number;
}
