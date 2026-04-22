# 205 엔트리 도구 모음

> 205(이영호)가 만든 엔트리 관련 확장프로그램·웹 서비스·도서·커뮤니티를 한 페이지에 모아 소개하는 React 기반 단일 페이지.

🌐 **라이브**: [entry-tools.205.kr](https://entry-tools.205.kr/)
📦 **레포**: [205sla/entry-tools-site](https://github.com/205sla/entry-tools-site)

---

## 소개

10년 넘게 엔트리([playentry.org](https://playentry.org))를 써 오며 필요한 도구가 없을 때마다 하나씩 만들어 온 것들을 한데 모았습니다. 이 레포는 그 **소개 페이지** 자체의 소스입니다 — 도구 자체의 구현체가 아닙니다.

페이지는 빌드 과정 없이 브라우저에서 바로 JSX를 컴파일해 실행하는 구조라, 정적 호스팅(GitHub Pages)만으로 배포됩니다.

## 페이지 구성

| 섹션 | 내용 |
|---|---|
| **Hero** | 타이포·통계(4 웹 서비스 / 3 크롬 확장 / 2 출간 도서 / 10y 활동), 작품 카드 모티프 |
| **01 · Books** | 다락원 《원큐패스 나는야 엔트리 게임 개발자》, 《나는야 엔트리 화가》 |
| **02 · Extensions** | EntryMerge 작품 합치기 · 엔트리 디버깅 툴 · Entry Save Manager |
| **03 · Web Services** | entry.205.kr · code.205.kr · 짧은 엔트리(엔트리.org) · 유저 찾기 |
| **04 · Collaboration** | 엔트리 넥스트 챌린지 제작자 참여, EDC 2023 발표 |
| **05 · Channels** | YouTube "205와 엔트리" · Discord "엔트리 유튜버들" · 엔트리 밴드 |
| **About** | 제작자 소개(이영호 / 205.kr) |
| **Footer** | 전체 링크 인덱스 |

## 기술 스택

**빌드 없이 돌아가는 구조**

- **React 18** (UMD from unpkg)
- **@babel/standalone** — 브라우저에서 JSX를 런타임 컴파일
- **정적 HTML/CSS** — 번들러·npm·node 없음
- **Pretendard Variable** + **JetBrains Mono** + **Space Grotesk** — 타이포그래피
- **CSS Custom Properties** — 3개 테마(light / dark / studio)
- **GitHub Pages** + Let's Encrypt 자동 HTTPS

각 `.jsx` 컴포넌트는 `<script type="text/babel">`로 로드되고, `Object.assign(window, { ... })`로 전역에 자신을 등록해서 다른 컴포넌트가 참조합니다. 모듈 시스템은 일부러 쓰지 않았습니다.

## 디자인

- **블록 코딩 모티프**: [`components/Blocks.jsx`](components/Blocks.jsx)의 `BlockShape` / `BlockStack` / `SocketBadge`가 엔트리의 블록을 암시하는 시각 요소를 제공합니다 (실제 엔트리 UI를 그대로 복제하지는 않습니다).
- **팔레트**: 엔트리 브랜드 그린(`#1fb25a`)을 기반으로, 보조 오렌지·퍼플·네이비를 카테고리별로 배치.
- **그리드**: 12-column 레이아웃, 섹션마다 밀도 조절(`--density`).
- **Tweaks 패널** ([`components/Tweaks.jsx`](components/Tweaks.jsx)): 외부 호스트에서 `postMessage`로 편집 모드를 열면 테마·히어로·밀도·블록 모티프를 즉석에서 바꿀 수 있는 디자인 튜닝 도구.

## 프로젝트 구조

```
.
├── index.html                # 루트. SEO 메타·OG·JSON-LD·CSS 변수 정의
├── app.jsx                   # 최상위 React 컴포넌트. 섹션을 조립
├── components/
│   ├── Nav.jsx               # 상단 네비 (스크롤 시 blur)
│   ├── Hero.jsx              # 인트로 + 통계 + 모티프 카드
│   ├── SectionBooks.jsx      # 도서 섹션
│   ├── SectionExtensions.jsx # 크롬 확장 섹션
│   ├── SectionSites.jsx      # 웹 서비스 (featured + others)
│   ├── SectionCollab.jsx     # 협업·발표 이력
│   ├── SectionChannels.jsx   # 커뮤니티 채널
│   ├── About.jsx             # 제작자 소개
│   ├── Footer.jsx            # 전체 사이트 인덱스
│   ├── Blocks.jsx            # 블록 코딩 모티프 프리미티브 (공용)
│   └── Tweaks.jsx            # 런타임 디자인 튜닝 패널 (편집 모드)
├── assets/
│   ├── author-thumbs.png     # 제작자 일러스트(따봉)
│   ├── author-ok.png         # 제작자 일러스트(OK)
│   ├── book-game.jpg         # 도서 표지
│   └── book-art.jpg
├── CNAME                     # entry-tools.205.kr (GitHub Pages 커스텀 도메인)
├── robots.txt                # 검색 엔진 전체 허용
├── sitemap.xml               # 루트 + 섹션 앵커 URL
└── README.md
```

## 로컬 실행

번들이 없어서 정적 서버 하나만 있으면 됩니다.

```bash
# Python
python -m http.server 8000

# 또는 Node
npx serve .
```

브라우저에서 <http://localhost:8000> 열기. 파일을 직접 `file://`로 열면 CORS로 일부 CDN이 막힐 수 있으니 꼭 HTTP 서버를 사용하세요.

## 배포

`main` 브랜치에 푸시 → GitHub Pages가 자동 빌드(`legacy` builder) → `entry-tools.205.kr`로 서빙.

DNS 설정(205.kr의 관리 네임서버):

```
CNAME   entry-tools   205sla.github.io
```

커스텀 도메인은 [`CNAME`](CNAME) 파일에 명시돼 있습니다. HTTPS는 Let's Encrypt 인증서가 발급된 뒤 저장소 설정 → Pages → Enforce HTTPS 체크.

## SEO

- `<title>` / `meta description` / `keywords` / `canonical`
- Open Graph · Twitter Card
- JSON-LD (`WebSite` / `Person` / `ItemList` — 도구 9개 나열)
- [`robots.txt`](robots.txt), [`sitemap.xml`](sitemap.xml)
- 인라인 SVG 파비콘 (브랜드 로고마크)

검색 등록 시 참고: Google Search Console, Naver Search Advisor.

## 콘텐츠 수정 방법

**새 확장 추가**: [`components/SectionExtensions.jsx`](components/SectionExtensions.jsx) 맨 위 `exts` 배열에 객체를 추가. `featured: true`는 한 개만 — 12-column 풀폭 카드로 렌더링됩니다.

**새 웹 서비스 추가**: [`components/SectionSites.jsx`](components/SectionSites.jsx)의 `sites` 배열. 비-featured는 `span 4`로 3개가 한 줄. 4개 이상이면 그리드 수정 필요.

**새 채널 추가**: [`components/SectionChannels.jsx`](components/SectionChannels.jsx)의 `channels` 배열. 현재 3-column 그리드.

**통계 숫자**: [`components/Hero.jsx`](components/Hero.jsx)의 `{ k, v }` 배열.

**사이트 전역 인덱스**: [`components/Footer.jsx`](components/Footer.jsx)의 `cols` 배열, 그리고 [`index.html`](index.html) JSON-LD `ItemList`·`sameAs`도 함께 동기화하면 SEO가 일관됩니다.

## 라이선스 / 저작권

- 페이지 콘텐츠(문구·이미지): © 205 (이영호)
- 엔트리는 네이버 커넥트재단의 비영리 교육 플랫폼이며, 이 페이지는 **비공식 개인 프로젝트**입니다.

## 연락

- Web: [205.kr](https://205.kr/)
- Mail: 205@205.kr
- Entry: [playentry.org 프로필](https://playentry.org/profile/56136825dadc91e1235b460d)
