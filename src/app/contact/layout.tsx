import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '문의하기 | 젤리',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
