# 🐾 ZELLY UTM Link Management

Zelly 웹사이트 유입 경로 분석을 위한 UTM 파라미터 관리 문서입니다. 모든 외부 홍보 링크는 이 형식을 따라 생성하여 데이터의 일관성을 유지합니다.

## 🚀 UTM 링크 생성기 (Base)

기본 URL: `https://zelly.co`

**구조:**
`https://zelly.co/?utm_source={source}&utm_medium={medium}&utm_campaign={campaign}&utm_content={content}`

---

## 📊 현재 운용/예정 링크 목록

| 매체 (Source) | 방식 (Medium) | 캠페인 명 (Campaign) | 목적               | 생성된 URL                                                                                        |
| :------------ | :------------ | :------------------- | :----------------- | :------------------------------------------------------------------------------------------------ |
| `instagram`   | `social`      | `pre_launch`         | 인스타 프로필 링크 | [바로가기](https://zelly.co/?utm_source=instagram&utm_medium=social&utm_campaign=pre_launch)      |
| `naver_blog`  | `blog`        | `tester_recruit`     | 테스터 모집 포스팅 | [바로가기](https://zelly.co/?utm_source=naver_blog&utm_medium=blog&utm_campaign=tester_recruit)   |
| `threads`     | `social`      | `pre_launch`         | 스레드 홍보        | [바로가기](https://zelly.co/?utm_source=threads&utm_medium=social&utm_campaign=pre_launch)        |
| `kakaotalk`   | `messenger`   | `direct_share`       | 지인 공유용        | [바로가기](https://zelly.co/?utm_source=kakaotalk&utm_medium=messenger&utm_campaign=direct_share) |

---

## 🛠 UTM 파라미터 정의 가이드

명확한 데이터 분석을 위해 아래 규칙을 준수해 주세요. (영문 소문자 권장)

### 1. utm_source (필수)

어디서 왔는가?

- `instagram`, `facebook`, `naver_blog`, `threads`, `google`, `newsletter`

### 2. utm_medium (필수)

어떤 수단인가?

- `social` (SNS), `blog` (블로그), `paid` (유료광고), `messenger` (카톡/DM), `email` (뉴스레터)

### 3. utm_campaign (필수)

어떤 캠페인인가?

- `pre_launch`: 정식 출시 전 사전 예약/홍보
- `tester_recruit`: 클로즈베타/테스터 모집
- `seasonal_event`: 시즌별 이벤트

### 4. utm_content (선택)

A/B 테스트나 구체적인 콘텐츠 구분

- `link_in_bio`, `story_ad`, `banner_top`

---

## 💡 팁

- 모든 파라미터는 **공백 없이 소문자**로 작성합니다.
- 새로운 링크를 만들 때마다 이 문서에 기록해두면 나중에 Mixpanel이나 GA4에서 데이터를 확인할 때 매우 유용합니다.
