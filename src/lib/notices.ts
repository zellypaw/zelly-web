export interface Notice {
  id: number;
  title: string;
  date: string;
  content: string;
  href: string;
  badge?: string;
  cta?: {
    label: string;
    url: string;
  };
}

export const NOTICES: Notice[] = [
  { 
    id: 1, 
    title: '테스터 모집 안내', 
    date: '2026.02.01', 
    badge: '모집중',
    content: `안녕하세요. Zelly 팀입니다.

반려동물과 함께하는 일상을 더 특별하게 만들어줄 젤리 서비스를 먼저 체험해보실 테스터 분들을 모집합니다.

[모집 안내]
• 모집 기간: 2026년 2월 1일 ~ 2026년 2월 28일
• 활동 기간: 2026년 3월 1일 ~ 출시 전까지
• 테스트 단계: 비공개 테스트
• 활동 내용: 서비스 초기 기능 체험 및 피드백 전달
• 참여 혜택: 서비스 정식 런칭 시 <span style="font-weight: bold;">🎁 프리미엄 플랜 1년 무료 이용권</span>
• 우수 혜택: 활동 우수자에게는 <span style="font-weight: bold; color: #046241;">☕️ 스타벅스 기프트카드 10만원권</span>

많은 참여 부탁드립니다. 감사합니다.`,
    href: '/notice/1',
    cta: {
      label: '신청하기',
      url: 'https://tally.so/r/81xyql' // Placeholder URL for Tally form
    }
  },
  { id: 2, title: 'TOSS 대출모집서비스 이용약관 변경 안내', date: '2026.01.06', content: '약관 변경 안내 본문입니다...', href: '/notice/2' },
];
