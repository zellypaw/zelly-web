import { MetadataRoute } from 'next';
import { NOTICES } from '@/lib/notices';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zellypaw.com';

  // 기본 정적 페이지들
  const staticRoutes = ['', '/notice', '/contact', '/privacy'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 공지사항 상세 페이지들 (동적 생성)
  const noticeRoutes = NOTICES.map((notice) => ({
    url: `${baseUrl}/notice/${notice.id}`,
    lastModified: new Date(notice.date.replace(/\./g, '-')),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...noticeRoutes];
}
