import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '개인정보 처리방침 | 젤리',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
