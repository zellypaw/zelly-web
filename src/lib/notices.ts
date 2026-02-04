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
  { 
    id: 2, 
    title: '벤처기업 인증 획득', 
    date: '2026.01.27', 
    content: `안녕하세요. Zelly 팀입니다.

Zelly가 2026년 1월 27일부로 「벤처기업육성에 관한 특별법」 제25조의 규정에 따른 <span style="font-weight: bold;">'벤처기업 인증(예비벤처유형)'</span>을 정식으로 획득하였습니다.

이번 벤처기업 인증은 Zelly가 가진 기술력과 서비스의 혁신성을 공식적으로 인정받은 뜻깊은 성과입니다. 

[인증 상세]
• 인증 일자: 2026년 1월 27일
• 인증 유형: 예비벤처유형
• 인증 기관: 『벤처기업법』 제25조 3(벤처기업확인기관의 지정 등)에 지정된 벤처기업확인기관((사)벤처기업협회)

보내주신 성원에 보답할 수 있도록 더욱 발전하는 Zelly가 되겠습니다.
감사합니다.

<div style="margin-top: 4px;">
  <img src="/assets/venture_mark.png" alt="벤처기업 인증 마크" style="width: 120px; height: auto;" />
</div>`,
    href: '/notice/2' 
  },
  {
    id: 3,
    title: '경기창업혁신공간 입주기업 선정',
    date: '2025.12.15',
    content: `안녕하세요. Zelly 팀입니다.

Zelly가 (재)경기도경제과학진흥원 북부벤처센터에서 주관하는 <span style="font-weight: bold;">'창업혁신공간'</span> 지원 사업에 최종 선정되었습니다.

이번 선정을 통해 Zelly는 경기창업혁신공간 북부권(의정부)에 새로운 보금자리를 마련하게 되었습니다. 우수한 지원 인프라를 바탕으로 반려동물과 반려인을 위한 최고의 서비스를 만드는 데 더욱 매진하겠습니다.

[선정 상세]
• 사업명: 창업혁신공간 지원 사업
• 지원 기관: (재)경기도경제과학진흥원 북부벤처센터
• 협약 기간: 2025.12.15 ~ 2026.12.14
• 입주 장소: 경기창업혁신공간 북부권 (의정부)

새로운 공간에서 더 크게 도약할 Zelly의 행보를 응원해 주세요.
감사합니다.`,
    href: '/notice/3'
  },
];
