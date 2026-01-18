
export enum Category {
  GOVERNMENT = 'Government Notices',
  UNIVERSITY = 'University & Colleges',
  RESULTS = 'Exam Results',
  ARTICLES = 'Education & Career'
}

export interface Post {
  id: string;
  title: string;
  category: Category;
  date: string;
  excerpt: string;
  content: string;
  pdfUrl?: string;
  slug: string;
}

export interface SEOProps {
  title: string;
  description: string;
  slug?: string;
}
