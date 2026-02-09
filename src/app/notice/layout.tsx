import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '공지사항 | 젤리',
  alternates: {
    canonical: '/notice',
  },
};

export default function NoticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
