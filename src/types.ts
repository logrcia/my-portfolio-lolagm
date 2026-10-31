export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  thumbnail: string;
  description: string;
  fullOverview: string;
  role: string;
  year: string;
  tools: string[];
  highlights?: string[];
  tags: string[];
}
