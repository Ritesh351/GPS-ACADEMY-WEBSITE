import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Notice {
  id: number;
  date: string;
  title: string;
  isNew: boolean;
}