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
  { id: 3, title: '11월 대출신청 이벤트 당첨자 안내', date: '2025.12.26', content: '당첨자 안내 본문입니다...', href: '/notice/3' },
  { id: 4, title: '라이브 쇼핑 보기 서비스명 변경에 따른 약관 개정 안내', date: '2025.12.23', content: '약관 개정 안내 본문입니다...', href: '/notice/4' },
  { id: 5, title: '더치페이, 연락처 송금 수취 한도 정책 적용 안내', date: '2025.12.23', content: '정책 적용 안내 본문입니다...', href: '/notice/5' },
  { id: 6, title: '마이데이터 서비스 약관 변경 안내', date: '2025.12.10', content: '약관 변경 안내 본문입니다...', href: '/notice/6' },
  { id: 7, title: '토스프라임 영화 혜택 변경 안내', date: '2025.12.01', content: '혜택 변경 안내 본문입니다...', href: '/notice/7' },
  { id: 8, title: '시스템 점검 안내 (2025년 11월 15일)', date: '2025.11.10', content: '점검 안내 본문입니다...', href: '/notice/8' },
  { id: 9, title: '개인정보 처리방침 개정 안내', date: '2025.11.05', content: '개정 안내 본문입니다...', href: '/notice/9' },
  { id: 10, title: '안정적인 서비스 제공을 위한 서버 점검', date: '2025.10.28', content: '서버 점검 본문입니다...', href: '/notice/10' },
  { id: 11, title: '신규 포인트 적립 혜택 업데이트', date: '2025.10.15', content: '혜택 업데이트 본문입니다...', href: '/notice/11' },
  { id: 12, title: '고객 센터 운영 시간 변경 안내', date: '2025.10.01', content: '시간 변경 안내 본문입니다...', href: '/notice/12' },
  { id: 13, title: 'Zelly 신규 기능 출시 안내', date: '2025.09.20', content: '기능 출시 안내 본문입니다...', href: '/notice/13' },
];
