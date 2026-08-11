export type ThemeMode = 'light' | 'dark';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'data' | 'ai' | 'automation' | 'web';
  iconName: string;
  description: string;
  deliverables: string[];
  turnaround: string;
  popular?: boolean;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'data' | 'web' | 'ai';
  level: number; // 0 to 100
  badge: 'Expert' | 'Advanced' | 'Proficient';
  iconName: string;
}

export interface StrengthItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'data' | 'ai-web' | 'academic';
  image: string;
  problem: string;
  workDone: string[];
  tools: string[];
  result: string;
  demoType?: 'data-cleaning' | 'ai-website' | 'academic';
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientRole: string;
  clientCompany: string;
  country: string;
  avatar: string;
  rating: number;
  comment: string;
  serviceOrdered: string;
  date: string;
}

export interface QuoteEstimate {
  serviceId: string;
  complexity: 'basic' | 'standard' | 'premium';
  unitCount: number; // e.g. rows or pages
  estimatedPrice: number;
  deliveryDays: number;
}
