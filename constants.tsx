
import { Post, Category } from './types';

export const SITE_NAME = "InfosSewa";
export const SITE_DESCRIPTION = "Nepal's Premier Information Portal for Notices and Results.";

export const MOCK_POSTS: Post[] = [
  {
    id: '1',
    title: 'Myadi Police Final Result 2024 - All Districts',
    category: Category.RESULTS,
    date: '2024-10-25',
    excerpt: 'The Nepal Police Headquarters has published the final list of selected candidates for Myadi Police...',
    content: 'Full results for Myadi Police selection for all 77 districts are now available. Candidates can check their names in the PDF provided below.',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    slug: 'myadi-police-result-2024'
  },
  {
    id: '2',
    title: 'Loksewa Aayog Kharidar Notice 2081',
    category: Category.GOVERNMENT,
    date: '2024-11-01',
    excerpt: 'Public Service Commission (Loksewa Aayog) announces vacancy for Kharidar positions...',
    content: 'Interested candidates who meet the eligibility criteria are encouraged to apply through the official online portal.',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    slug: 'loksewa-kharidar-notice-2081'
  },
  {
    id: '3',
    title: 'TU Bachelor 1st Year Exam Routine Published',
    category: Category.UNIVERSITY,
    date: '2024-11-05',
    excerpt: 'Tribhuvan University (TU) Examination Control Office has released the routine for 1st Year BA, BBS...',
    content: 'The examinations are scheduled to start from the first week of Mangsir. View the full routine inside.',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    slug: 'tu-bachelor-1st-year-exam-routine'
  },
  {
    id: '4',
    title: 'How to Prepare for Loksewa: A Comprehensive Guide',
    category: Category.ARTICLES,
    date: '2024-10-20',
    excerpt: 'Success in Loksewa exams requires a strategic approach. Here are 10 tips to crack the exam...',
    content: 'Preparation is the key to success. Start with the syllabus, gather relevant books, and practice daily MCQ tests.',
    slug: 'loksewa-preparation-guide'
  }
];
