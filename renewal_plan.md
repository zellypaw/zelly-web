# Zelly 랜딩 페이지 리뉴얼 계획서

> 🎯 **목표**: AI 기반 반려동물 사진 정리 서비스 "Zelly"의 랜딩 페이지를 전면 리뉴얼하여 사전예약 및 시장 검증 데이터 수집을 최적화

---

## 📋 목차

1. [프로젝트 개요](#프로젝트-개요)
2. [디자인 시스템](#디자인-시스템)
3. [페이지 구조 및 콘텐츠](#페이지-구조-및-콘텐츠)
4. [기술 스택](#기술-스택)
5. [디자인 자산](#디자인-자산)
6. [구현 가이드](#구현-가이드)
7. [배포 전략](#배포-전략)

---

## 프로젝트 개요

### 서비스 소개

**Zelly**는 AI 기술을 활용하여 반려동물 사진을 자동으로 정리하고 성장 앨범으로 만들어주는 모바일 앱 서비스입니다.

### 핵심 가치 제안 (Value Proposition)

#### Pain Points (고객 pain)

- 📱 **저장공간 부족**: 33,422장의 강아지 사진으로 인한 스토리지 포화
- 🔍 **검색의 어려움**: 수천 장의 사진 속에서 원하는 순간 찾기 힘듦
- ☁️ **복잡한 백업**: 클라우드, 백업 솔루션의 복잡성으로 인한 추억 손실 위험
- 🗑️ **디지털 호더링**: 지우기는 아깝고, 정리는 힘든 사진들의 누적

#### Solutions (해결책)

1. **AI 자동 태깅 & 재식별**: 여러 마리를 키워도 각 반려동물을 자동으로 구분하여 분류
2. **AI 매직 편집**: 배경 제거, AI 코스튬 변신 등 간편한 편집 기능
3. **가족 전용 앨범**: 인스타보다 소소하지만 소중한 순간들을 가족과 공유
4. **추억의 자산화**: 언젠가 사진밖에 남지 않을 순간을 위한 영구 보관

### 타겟 고객

- **주 타겟**: 20-30대 여성, 인스타그램 활성 사용자
- **반려동물 보호자**: 특히 반려견을 키우는 가정
- **디지털 네이티브**: 사진을 많이 찍지만 정리에 어려움을 겪는 사용자

---

## 디자인 시스템

### 🎨 색상 팔레트

#### Primary Colors (기존 Flutter 앱 기반)

```
Primary: #FF4081 (PinkAccent)
- 용도: 주요 CTA 버튼, 브랜드 강조 요소
- 느낌: 귀엽고 다정한, 반려동물에 대한 애정 표현

Secondary: #E0E0E0 (Grey Shade 200)
- 용도: 배경, 카드 컨테이너
- 느낌: 깔끔하고 모던한
```

#### Accent Colors (Flutter 앱에서 사용 중)

```
Purple Shades: #EDE7F6 → #9575CD
- 용도: 그라디언트, 태그 배경

Warm Tones: #FFF3E0 → #FFB74D
- 용도: 하이라이트, 활력있는 강조

Cool Tones: #E1F5FE → #4FC3F7
- 용도: 정보 전달, 신뢰감 표현

Green/Teal: #E0F2F1 → #26A69A
- 용도: 성공 상태, 자연스러운 느낌
```

#### Gradient Combinations (실제 앱 사용)

```css
/* Pet Profile Gradient 1 */
background: linear-gradient(
  135deg,
  #f3e5f5 0%,
  /* Purple shade 50 */ #fce4ec 50%,
  /* Pink shade 50 */ #e8eaf6 100% /* Indigo shade 50 */
);

/* Pet Profile Gradient 2 */
background: linear-gradient(
  135deg,
  #fff3e0 0%,
  /* Orange shade 50 */ #fffde7 50%,
  /* Yellow shade 50 */ #ffebee 100% /* Red shade 50 */
);

/* Pet Profile Gradient 3 */
background: linear-gradient(
  135deg,
  #e3f2fd 0%,
  /* Blue shade 50 */ #e0f7fa 50%,
  /* Cyan shade 50 */ #e8eaf6 100% /* Indigo shade 50 */
);

/* Pet Profile Gradient 4 */
background: linear-gradient(
  135deg,
  #e8f5e9 0%,
  /* Green shade 50 */ #e0f2f1 50%,
  /* Teal shade 50 */ #e0f7fa 100% /* Cyan shade 50 */
);
```

### 🔤 타이포그래피

#### 한글 폰트

- **Primary Font**: KoPubWorld (Flutter 앱에서 사용 중)
  - Display Large: 90px, Bold
  - Display Medium: 36px, Bold
  - Display Small: 18px, Bold
- **Web Fallback**: Pretendard 또는 System Font
  - 웹에서는 Pretendard를 우선 사용하고, KoPubWorld는 특별한 타이틀에만 적용

#### 폰트 적용 가이드

```css
/* Headline (Hero Section) */
font-size: 48px;
font-weight: 700;
line-height: 1.2;

/* Sub-headline */
font-size: 20px;
font-weight: 400;
line-height: 1.6;

/* Body Text */
font-size: 16px;
font-weight: 400;
line-height: 1.7;

/* CTA Button */
font-size: 18px;
font-weight: 600;
letter-spacing: -0.5px;
```

### 🎭 디자인 톤 & 무드

- **감성적 (Emotional)**: 반려동물에 대한 애정과 추억을 강조
- **트렌디 (Trendy)**: 젊은 타겟층을 위한 현대적이고 세련된 디자인
- **신뢰감 (Trustworthy)**: AI 기술에 대한 신뢰, 데이터 보안 강조
- **귀여움 + 세련됨 (Cute but Sophisticated)**: 단순히 귀엽기만 한 것이 아닌, 프리미엄한 느낌

### 📐 디자인 원칙

1. **Mobile-First**: 타겟 사용자의 주 접근 경로가 모바일(Instagram)이므로 모바일 최적화 우선
2. **Clean Layout**: 여백을 충분히 활용한 깔끔한 레이아웃
3. **Smooth Animation**: Framer Motion을 활용한 부드러운 인터랙션
4. **Visual Hierarchy**: 명확한 정보 계층 구조로 메시지 전달력 강화

---

## 페이지 구조 및 콘텐츠

### 1. Global Navigation Bar (Sticky)

#### Layout

```
[Logo: ZELLY]                    [CTA: 사전예약 하기]
```

#### 사양

- **Logo**:
  - 텍스트 "ZELLY"
  - 폰트: Bold, Rounded (KoPubWorld Bold)
  - 색상: Primary Pink (#FF4081)
- **CTA Button**:
  - 텍스트: "사전예약 하기"
  - 스타일: Primary Color, Pill shape (border-radius: 24px)
  - 클릭 시: Smooth scroll to Form Section

---

### 2. Hero Section (첫 인상 강조)

#### Headline (주목 유도)

```
강아지 사진만 33,422장...
언제 다 정리하나요?
```

- 폰트 크기: 48px (모바일 36px)
- 폰트 굵기: Bold (700)
- 색상: Dark Gray (#212121)

#### Sub-headline (해결책 제시)

```
용량 부족 경고, 이제 그만.
AI가 당신의 강아지 사진만 쏙 골라 '성장앨범'으로 만들어 드립니다.
```

- 폰트 크기: 20px (모바일 16px)
- 폰트 굵기: Regular (400)
- 색상: Medium Gray (#616161)

#### Visual (비포/애프터 비교)

- **구성**: Split View 또는 Slider
  - **Left (Before)**:
    - 휴대폰 화면 "Storage Full" 경고
    - 어지럽게 섞인 갤러리 화면
  - **Right (After)**:
    - 깔끔하게 정리된 Zelly 앨범 인터페이스
    - 반려동물별로 분류된 타임라인

#### CTA Button

```
3초 만에 AI 앨범 정리 시작하기
```

- 크기: Large (padding: 20px 40px)
- 색상: Primary Pink with Gradient
- 애니메이션: Hover 시 scale(1.05) + shadow 강화
- 클릭 시: Smooth scroll to Form Section

---

### 3. Problem Section (공감 유도)

#### Title

```
지우긴 아깝고, 찾기는 힘들고...
디지털 호더링을 겪고 계신가요?
```

- 중앙 정렬
- 폰트 크기: 36px (모바일 28px)
- 마진: 80px top

#### Problem Cards (Grid Layout: 3 Columns, 모바일 1 Column)

**Card 1: 저장공간 문제**

- **Icon**: ![Alert Triangle](emoji/aploud.svg) 또는 Lucide icon
- **Title**: "저장 공간 부족의 스트레스"
- **Description**: "33,422장의 사진으로 가득 찬 휴대폰, 소중한 순간 담을 공간이 없어요"
- **배경**: Gradient 1 (Purple → Pink → Indigo)

**Card 2: 검색의 어려움**

- **Icon**: ![Search](emoji/search.svg) 또는 Lucide search icon
- **Description**: "수천 장 속에 파묻힌 우리 아이 인생샷, 찾으려면 한참 스크롤..."
- **배경**: Gradient 2 (Orange → Yellow → Red)

**Card 3: 백업의 복잡성**

- **Icon**: Cloud-off icon
- **Title**: "복잡한 백업, 미루다 날린 추억"
- **Description**: "클라우드는 복잡하고, 백업은 귀찮아서 미루다가 영영 잃어버린 소중한 사진들"
- **배경**: Gradient 3 (Blue → Cyan → Indigo)

#### Card 스타일

```css
.problem-card {
  border-radius: 24px;
  padding: 40px 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.problem-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}
```

---

### 4. Solution Section (핵심 기능 소개)

**Layout**: Alternating Text + Image (좌우 번갈아 배치)

#### Feature 1: AI Auto-Tagging & Re-Identification

**Title**

```
섞여 있어도 괜찮아요, AI가 다 아니까
```

**Description**

```
여러 마리를 키워도 '두부'인지 '콩이'인지
AI가 얼굴을 식별하여 자동으로 분류합니다.
```

**Visual**

- AI가 강아지 얼굴을 스캔하는 일러스트
- 태그가 자동으로 붙는 애니메이션
- 참고 이미지: Flutter 앱의 pet detection overlay 기능

**Layout**: 텍스트 왼쪽, 이미지 오른쪽

---

#### Feature 2: AI Magic Editing

**Title**

```
사람 지우개 & AI 변신
```

**Description**

```
집안 배경, 잠옷 입은 나는 지우고 강아지만 남기세요.
호그와트 마법사나 배트맨으로 변신도 가능합니다.
```

**Visual**

- Before/After 슬라이더
  - Before: 배경에 사람이 있는 강아지 사진
  - After: 깔끔한 배경 + 강아지에 AI 코스튬 적용
- Flutter 앱의 image generation 기능 참고

**Layout**: 이미지 왼쪽, 텍스트 오른쪽

---

#### Feature 3: Private Family Album

**Title**

```
우리 가족끼리만 보는 시크릿 앨범
```

**Description**

```
인스타에 올리기엔 소소하지만, 지우긴 아까운 사진들.
가족을 초대해서 함께 보고, 댓글도 남겨보세요.
```

**Visual**

- 가족 초대 화면 스크린샷
- 공유된 앨범에서 댓글 달린 화면
- Flutter 앱의 bucket sharing 기능 참고

**Layout**: 텍스트 왼쪽, 이미지 오른쪽

---

### 5. Emotional/Social Proof Section (감성 터치)

#### Copy (감성 메시지)

```
언젠가 사진밖에 남지 않을 순간이 옵니다.
나중에 후회하지 않도록, Zelly로 추억을 자산화하세요.
```

#### Visual

- 노견(senior dog)의 따뜻한 이미지
- 또는 인쇄된 포토앨범 (POD 제품 티저)
- 차분한 조명, 감성적인 구도

#### 스타일

- 배경: Soft gradient 또는 단색 (#F5F5F5)
- 텍스트 중앙 정렬
- 여백 넉넉히 (padding: 120px 0)

---

### 6. CTA / Lead Generation Section (전환 유도)

> [!IMPORTANT] > **가장 중요한 섹션**: 사전예약 전환율을 최대화하는 것이 핵심 목표

#### Hook (무료 혜택 강조)

```
지금 사전 알림 신청하면,
'AI 프로필 변신 이용권'을 100% 무료로 드립니다.
```

- 폰트 크기: 32px (모바일 24px)
- 색상: Primary Pink
- 굵기: Bold (700)

#### Form Fields

**Input Field: 연락처 입력**

```html
<input
  type="text"
  placeholder="휴대폰 번호 또는 이메일 입력"
  style="border-radius: 12px; padding: 16px 20px;"
/>
```

**Checkbox: 개인정보 수집 동의**

```
☐ 개인정보 수집 및 이용에 동의합니다 (필수)
```

- 클릭 시 모달로 상세 내용 표시

#### Submit Button

```
무료 쿠폰 받고 사전예약 완료 →
```

- 크기: Full-width (모바일), Fixed-width (데스크톱)
- 색상: Primary Pink to Purple gradient
- 폰트 크기: 18px, Bold
- 애니메이션: Pulse effect

#### Micro-copy (신뢰 강화)

```
출시 알림 외에 다른 목적으로 사용되지 않습니다.
```

- 폰트 크기: 14px
- 색상: Light Gray (#9E9E9E)

---

## 기술 스택

### Frontend Framework

- **React** (또는 Next.js)
  - 컴포넌트 기반 개발
  - SEO 최적화 (Next.js 사용 시)

### Styling

- **Tailwind CSS** (선택사항, 명시적 요청 시)
- **Vanilla CSS** (기본 권장)
  - CSS Variables로 디자인 시스템 구현
  - 더 세밀한 커스터마이징 가능

### Icons

- **Lucide React**
  - 가벼운 아이콘 라이브러리
  - 일관된 스타일
  - 기존 Flutter 앱의 emoji SVG와 스타일 매칭

### Animation

- **Framer Motion**
  - Scroll-triggered animations
  - Smooth transitions
  - Entrance effects (fade-in-up)

### Form Handling

- **초기 단계**: Google Sheets, Typeform, Tally 임베드
  - 백엔드 구축 없이 빠른 데이터 수집
  - Typeform iframe 사용 권장

### Deployment

- **Vercel** 또는 **Netlify**
  - 5분 내 배포 가능
  - 자동 HTTPS
  - CDN 지원

---

## 디자인 자산

### Flutter 프로젝트에서 활용 가능한 자산

#### 📁 이미지 파일 위치

`/Users/paul/projects/zelly_flutter/assets/images/`

#### 🎨 사용 가능한 Icon/Emoji SVG

**Navigation & Actions**

- `emoji/aploud.svg` - 업로드/알림
- `emoji/bell.svg` - 알림
- `emoji/camera_flash.svg`, `emoji/camera_normal.svg` - 사진 촬영
- `emoji/search.svg`, `emoji/search_inverse.svg` - 검색
- `emoji/setting.svg` - 설정
- `emoji/upload.svg` - 업로드
- `emoji/trash.svg` - 삭제
- `emoji/plus.svg` - 추가
- `emoji/play.svg`, `emoji/stop.svg` - 재생/정지

**Emotions & Reactions**

- `emoji/heart.svg`, `emoji/heart_eye.svg` - 좋아요
- `emoji/star.svg`, `emoji/star_outline.svg` - 별표
- `emoji/comment.svg` - 댓글
- `emoji/thumup.svg` - 좋아요
- `emoji/big_smile.svg`, `emoji/crackup.svg` - 웃음
- `emoji/tear.svg`, `emoji/weep.svg` - 슬픔
- `emoji/sleepy.svg`, `emoji/sick.svg` - 상태
- `emoji/scream.svg`, `emoji/red_face.svg` - 놀람

**Pet & Event Icons**

- `emoji/dog.svg` - 강아지
- `emoji/cat.svg` - 고양이
- `emoji/bird.svg` - 새
- `emoji/cake.svg` - 생일
- `emoji/calendar_edge.svg` - 캘린더
- `emoji/hash.svg` - 태그

**Special**

- `emoji/congraturation.svg` - 축하
- `emoji/blingbling.svg` - 반짝임
- `emoji/explosive.svg` - 폭발
- `emoji/dung.svg` - 응가

#### 🖼️ 브랜드 이미지

- `icon_transparent.png` - 투명 배경 아이콘
- `icon_white.png` - 흰색 배경 아이콘
- `splash_logo_only.png` - 로고 단독
- `splash_android.png` - Android 스플래시
- `main.png` - 메인 이미지

#### 📱 소셜 로그인 이미지

- `kakao.png` - 카카오 로그인
- `naver.png` - 네이버 로그인

#### 🎯 알림 이미지

- `star_push.png` - 별표 푸시 알림 아이콘

### 자산 활용 방안

1. **아이콘 일관성 유지**

   - Flutter 앱과 동일한 SVG emoji를 웹에서도 사용
   - 브랜드 일관성 강화

2. **로고 파일 활용**

   - `splash_logo_only.png`를 Hero Section에 활용
   - Navigation Bar 로고로 사용

3. **임시 이미지 대체**

   - 초기 프로토타입에서는 placeholder 사용
   - 이후 Flutter 앱 스크린샷으로 대체
   - 특히 Feature Section의 UI 스크린샷

4. **복사 방법**
   ```bash
   # Flutter 프로젝트 assets를 Web 프로젝트로 복사
   cp -r /Users/paul/projects/zelly_flutter/assets/images/* \
         /Users/paul/projects/zelly-web/public/assets/images/
   ```

---

## 구현 가이드

### 개발 워크플로우

#### Phase 1: 디자인 시스템 구축

1. `styles/variables.css` 생성
   - CSS Variables로 색상, 폰트, 간격 정의
2. `styles/globals.css` 생성
   - Reset CSS
   - 기본 타이포그래피 설정

#### Phase 2: 컴포넌트 개발

1. **공통 컴포넌트**
   - `Button.jsx` - CTA 버튼
   - `Card.jsx` - Problem/Feature 카드
   - `Input.jsx` - 폼 입력 필드
2. **섹션 컴포넌트**
   - `Hero.jsx`
   - `Problem.jsx`
   - `Solution.jsx`
   - `Emotional.jsx`
   - `LeadForm.jsx`

#### Phase 3: 페이지 조립

1. `pages/index.jsx` (또는 `app/page.jsx`)
   - 모든 섹션 컴포넌트 조합
   - Smooth scroll 구현
   - Framer Motion 애니메이션 적용

#### Phase 4: 반응형 최적화

1. Mobile-first 접근
2. Breakpoints:
   - Mobile: 0-640px
   - Tablet: 641-1024px
   - Desktop: 1025px+

### 기능 요구사항

#### 1. Smooth Scroll

```javascript
// CTA 버튼 클릭 시 폼으로 스크롤
const scrollToForm = () => {
  document.getElementById("lead-form").scrollIntoView({ behavior: "smooth" });
};
```

#### 2. Form Validation

```javascript
// 이메일/전화번호 유효성 검사
const validateContact = (input) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^01[016789]-?\d{3,4}-?\d{4}$/;

  return emailRegex.test(input) || phoneRegex.test(input);
};
```

#### 3. Scroll Animations (Framer Motion)

```javascript
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

// 사용 예시
<motion.div {...fadeInUp}>
  <ProblemCard />
</motion.div>;
```

### 코드 구조 예시

```
zelly-web/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── Input.jsx
│   │   └── sections/
│   │       ├── Navbar.jsx
│   │       ├── Hero.jsx
│   │       ├── Problem.jsx
│   │       ├── Solution.jsx
│   │       ├── Emotional.jsx
│   │       └── LeadForm.jsx
│   ├── styles/
│   │   ├── variables.css
│   │   ├── globals.css
│   │   └── components.css
│   └── pages/
│       └── index.jsx
└── public/
    └── assets/
        └── images/ (Flutter에서 복사)
```

---

## 배포 전략

### 1. 빠른 배포 (MVP)

#### Vercel 배포

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel --prod
```

- 5분 내 라이브 서버 가동
- 자동 HTTPS
- GitHub 연동 시 자동 배포

#### 장점

- 커뮤니티에 즉시 링크 공유 가능
- 실시간 피드백 수집 가능

### 2. 데이터 수집

#### 옵션 A: Typeform 임베드 (권장)

```html
<div data-tf-widget="YOUR_FORM_ID" style="width:100%;height:400px;"></div>
<script src="//embed.typeform.com/next/embed.js"></script>
```

#### 옵션 B: Google Sheets 연동

- Google Form 생성
- iframe으로 임베드
- 실시간 응답 확인

#### 옵션 C: Tally

- 무료 플랜으로 시작
- 깔끔한 UI
- Notion과 유사한 폼 빌더

### 3. 분석 설정

#### Google Analytics 4

```javascript
// pages/_app.jsx 또는 layout.jsx
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
```

#### 추적 이벤트

- Form 제출
- CTA 버튼 클릭
- 섹션별 스크롤 도달률
- 페이지 체류 시간

---

## 다음 단계 (Next Steps)

### Phase 1: 프로토타입 개발 (1-2일)

- [ ] 디자인 시스템 CSS 변수 정의
- [ ] 주요 섹션 컴포넌트 개발
- [ ] 페이지 조립 및 반응형 확인

### Phase 2: 콘텐츠 보강 (1일)

- [ ] Flutter 앱 스크린샷 캡처
- [ ] Before/After 이미지 제작
- [ ] AI 기능 설명 일러스트 제작

### Phase 3: 배포 및 테스트 (0.5일)

- [ ] Vercel/Netlify 배포
- [ ] 모바일 디바이스 테스트
- [ ] GA4 설정 및 이벤트 추적

### Phase 4: 마케팅 시작 (지속적)

- [ ] Instagram 스토리/포스트로 공유
- [ ] 커뮤니티 (반려동물 카페 등) 배포
- [ ] 사전예약 데이터 분석
- [ ] 피드백 기반 개선

---

## 부록: 개발자 팁

### 이미지 처리

- 프롬프트에서 `Visual`로 표시된 부분은 초기에 placeholder 사용
- 이후 Flutter 앱 스크린샷이나 목업으로 교체
- 경로: `public/assets/images/...`

### 폼 연동 우선순위

1. **1순위**: Typeform iframe (가장 빠르고 예쁨)
2. **2순위**: Tally 임베드
3. **3순위**: 자체 개발 폼 + Google Sheets API

### 성능 최적화

- 이미지 최적화: Next.js Image 컴포넌트 사용
- 코드 스플리팅: 자동 (Next.js)
- Lazy loading: Framer Motion의 `whileInView` 활용

### SEO 필수 요소

```html
<head>
  <title>Zelly - AI로 정리하는 반려동물 성장앨범</title>
  <meta
    name="description"
    content="33,422장의 반려동물 사진, AI가 자동으로 정리해드립니다. 사전예약 시 AI 코스튬 무료 이용권 증정!"
  />
  <meta property="og:image" content="/assets/images/og-image.png" />
</head>
```

---

## 예상 결과

이 명세서로 랜딩 페이지를 구현하면:

✅ **사용자 공감**: Pain Point를 정확히 건드려 감정적 연결 유도  
✅ **명확한 가치**: AI 기능을 직관적으로 이해 가능  
✅ **전환 최적화**: CTA 위치, 무료 혜택 강조로 사전예약률 극대화  
✅ **브랜드 일관성**: Flutter 앱과 동일한 색상/아이콘으로 통일성 유지  
✅ **빠른 배포**: 2-3일 내 라이브 서버 가동 가능  
✅ **데이터 수집**: 투자자가 요구하는 시장 검증 데이터 확보

---

**최종 업데이트**: 2025-12-04  
**문서 버전**: 2.0  
**작성자**: Zelly Team
