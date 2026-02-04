export interface Notice {
  id: number;
  title: string;
  date: string;
  content: string;
  href: string;
}

export const NOTICES: Notice[] = [
  { 
    id: 1, 
    title: '테스터 모집 안내', 
    date: '2026.02.04', 
    content: `안녕하세요. Zelly 팀입니다.

반려동물과 함께하는 일상을 더 특별하게 만들어줄 젤리 서비스를 먼저 체험해보실 테스터 분들을 모집합니다.

[모집 안내]
• 모집 기간: 2026년 2월 4일 ~ 채용 시까지
• 활동 내용: 서비스 초기 기능 체험 및 피드백 전달
• 참여 혜택: 서비스 정식 런칭 시 프리미엄 플랜 1년 무료 이용권

많은 참여 부탁드립니다. 감사합니다.`,
    href: '/notice/1' 
  },
  { id: 2, title: 'TOSS 대출모집서비스 이용약관 변경 안내', date: '2026.01.06', content: '약관 변경 안내 본문입니다...', href: '/notice/2' },
];
