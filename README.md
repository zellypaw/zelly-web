# Zelly Web Project 🐾

반려동물과의 소중한 기록을 담는 성장 앨범 서비스, **Zelly**의 공식 웹 사이트 프로젝트입니다.  
본 문서는 프로젝트의 아키텍쳐, 배포 프로세스, 환경 변수 설정 등 개발 및 온보딩에 필요한 핵심 내용을 담고 있습니다.

---

## 🛠 기술 스택 (Tech Stack)

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/), [Spline](https://spline.design/)
- **Testing**: [Vitest](https://vitest.dev/), [Playwright](https://playwright.dev/)
- **Infrastructure**: AWS (S3, CloudFront), GitHub Actions

---

## 🚀 시작하기 (Getting Started)

### 사전 준비

프로젝트 실행을 위해 Node.js(v20 이상)와 npm 또는 yarn이 필요합니다.

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 로컬 개발 서버 실행
npm run dev
```

기본적으로 [http://localhost:3000](http://localhost:3000)에서 실시간으로 변경 사항을 확인할 수 있습니다.

---

## 🏗 서버 아키텍쳐 (Server Architecture)

Zelly 웹은 **AWS의 서버리스 아키텍쳐**를 기반으로 정적 호스팅 및 가속화가 이루어집니다.

### 1. AWS S3 + CloudFront

- **S3 (Static Website Hosting)**: Next.js의 `output: 'export'` 기능을 통해 생성된 정적 에셋들이 저장됩니다.
- **CloudFront (CDN)**: 전 세계 엣지 로케이션을 통해 콘텐츠를 빠르게 캐싱하고 전달합니다.
- **OAC (Origin Access Control)**: S3 버킷에 대한 직접 접근을 차단하고, 오직 CloudFront를 통한 접근만 허용하여 보안을 강화했습니다.

### 2. CloudFront Function (URI Normalization)

Next.js의 정적 빌드 방식(`out/*.html`)을 지원하기 위해 CloudFront Function이 적용되어 있습니다.

- **주요 기능**:  
  사용자가 `/contact`와 같이 확장자 없이 접속하더라도, 내부적으로 S3의 `/contact.html` 파일을 찾아 응답하도록 URI를 변환합니다.  
  또한 Trailing Slash 처리 및 확장자가 없는 경로에 대해 자동으로 `.html`을 붙여주는 로직을 수행합니다.

`dist_info.json` 파일에서 실제 CloudFront 배포 설정을 참고할 수 있습니다.

---

## 🔄 배포 자동화 (CI/CD)

GitHub Actions를 통해 코드 품질 관리 및 배포 자동화 프로세스를 운영합니다.

### 1. 배포 워크플로우 (`.github/workflows/deploy-dev.yml`)

1.  **Pull Request (Main Branch)**:
    - `package.json`의 버전 업데이트(Bump) 여부 확인
    - 유닛 테스트 실행 (`npm run test`)
    - E2E 테스트 실행 (`npm run test:e2e`)
2.  **Tag Push (`v*`)**:
    - 워크플로우가 통과된 후 새 버전 태그(예: `v0.1.0`)가 푸시되면 실제 AWS 환경으로 배포가 시작됩니다.

### 2. 배포 스크립트 (`scripts/deploy.sh`)

배포 시 다음 순서로 최적화 및 동기화 작업이 수행됩니다.

- **이미지 최적화**: `node scripts/optimize-images.mjs`를 실행하여 정적 이미지 최적화.
- **Next.js 빌드**: `npm run build`를 통한 정적 사이트 생성(SSG).
- **S3 동기화 전략**:
  - 공통 에셋: 브라우저 캐시 성능을 위해 긴 `max-age` 설정.
  - **HTML 파일**: 실시간 업데이트 반영을 위해 `no-cache, no-store` 헤더 적용.
- **캐시 무효화 (CloudFront Invalidation)**: 배포 완료 후 전역 캐시를 무효화하여 즉시 변경 사항을 반영합니다.

---

## 🔐 환경 변수 관리 (Environment Variables)

프로젝트 루트의 `.env.production` 또는 GitHub Secrets를 사용해 관리하는 필수 환경 변수입니다.

| 변수명                            | 설명                                     |
| :-------------------------------- | :--------------------------------------- |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY`  | Cloudflare Turnstile (캡차) 사이트 키    |
| `NEXT_PUBLIC_API_BASE_URL`        | 백엔드 API 서버 주소                     |
| `NEXT_PUBLIC_NAVER_MAP_CLIENT_ID` | 네이버 지도 API 클라이언트 ID            |
| `CLOUDFRONT_DISTRIBUTION_ID`      | 배포 시 캐시 무효화를 위한 CloudFront ID |

---

## 🧪 테스트 (Testing)

코드 안정성을 보장하기 위해 두 종류의 테스트 도구를 사용합니다.

- **Unit/Integration Test**: `vitest`를 사용하여 라이브러리 및 유틸리티 로직을 검증합니다.
- **E2E Test**: `playwright`를 사용하여 실제 브라우저 환경에서의 사용자 시나리오(내비게이션, 폼 제출 등)를 테스트합니다.

```bash
# 유닛 테스트 실행
npm run test

# E2E 테스트 실행
npm run test:e2e
```

---

## 🤝 온보딩 가이드 (Onboarding)

신입 개발자분은 아래 순서대로 파악하시면 좋습니다.

1. `src/app/page.tsx`를 중심으로 전체적인 폴더 구성을 파악합니다.
2. `.github/workflows`를 통해 프로젝트가 어떻게 빌드되고 배포되는지 확인합니다.
3. `src/components`의 공통 컴포넌트들을 확인하여 스타일 가이드를 익힙니다.
4. 새로운 기능 추가 시 반드시 `npm run test`를 실행하여 기존 기능에 영향이 없는지 확인해 주세요!
