# 205 엔트리 도구 모음

이영호(205)가 만든 웹 서비스 7개, 크롬 확장프로그램 3개, 엔트리 도서 2권과 커뮤니티를 소개한다. 엔트리 공식 서비스가 아닌 개인 프로젝트다.

- [배포 사이트](https://entry-tools.205.kr/)
- [소스 저장소](https://github.com/205sla/entry-tools-site)
- [텍스트로 보는 도구 목록](https://entry-tools.205.kr/llms.txt)

## 실행과 배포

Node.js 22 이상에서 실행한다. Windows PowerShell에서 스크립트 실행 정책으로 npm이 막히면 `npm.cmd`를 사용한다.

```sh
npm ci
npm run build
npm run check
npm run preview
```

로컬 미리보기 주소는 `http://127.0.0.1:4173/`이다. `npm run build`가 만드는 `dist/`가 실제 배포 대상이다.

`main`에 푸시하면 [Pages 워크플로](.github/workflows/pages.yml)가 의존성 설치 → 정적 HTML 생성 → 검사 → GitHub Pages 배포를 실행한다. 검사가 실패하면 배포하지 않는다. 저장소의 Pages 소스는 **GitHub Actions**로 설정한다. 도메인 `entry-tools.205.kr`과 기존 네이버 소유 확인 파일을 유지한다.

배포가 끝난 뒤 검색엔진에 변경 사실을 알릴 수 있다.

```sh
npm run notify-search
```

이 명령은 공개된 `indexnow-key.txt`가 현재 파일과 일치하는지 확인한 뒤 IndexNow 공통 엔드포인트에 대표 URL을 제출한다. HTTP 200·202는 접수 결과이며 검색 등록이나 노출 보장이 아니다. Google Search Console·네이버 서치어드바이저·Bing Webmaster Tools의 색인 상태는 각 서비스의 소유자 계정에서 별도로 확인한다.

## 페이지 구성

| 영역 | 내용 |
|---|---|
| 첫 화면 | 사이트 정의, 제작자, 도구 개수, 목적별 안내로 가는 링크 |
| 도구 찾기 | 작품 합치기·바이브코딩·변수 확인·세이브·멀티플레이·알고리즘의 6가지 선택지 |
| 도서 | 《원큐패스 나는야 엔트리 게임 개발자》, 《원큐패스 나는야 엔트리 화가》 |
| 크롬 확장 | EntryMerge · 엔트리 디버깅 툴 · Entry Save Manager |
| 웹 서비스 | EntryMerge 웹 · CODE 205 · 짧은 엔트리 · 유저 찾기 · 엔트리 온라인 · AI 체크 · 바이브코딩 |
| 협업과 발표 | 엔트리 넥스트 챌린지, EDC 2023 |
| 커뮤니티 | 유튜브 · 디스코드 · 카카오톡 · 밴드 |
| 질문·답변 | 도구 선택, 설치 방식, 모바일 이용 범위, AI 검사 해석 등 8개 답변 |
| 안내 기준·소개 | 제작자, 수정일, 프로젝트 문서와 도구별 원문 링크 |

## 구조와 편집 위치

```text
data/catalog.js         웹 서비스·확장·도서 데이터와 고유 앵커
data/site.js            사이트 정보·수정일·목적별 안내·질문과 답변
components/             React 화면 컴포넌트
app.jsx                 전체 페이지 구성
client.jsx              이미 생성된 HTML에 상호작용 연결
page.html               문서 머리와 HTML 템플릿
style.css               테마·공통 스타일·모바일 레이아웃
scripts/build.mjs       HTML·배포 스크립트·JSON-LD·llms.txt·사이트맵 생성
scripts/serve.mjs        dist/ 로컬 미리보기 서버
scripts/indexnow.mjs    배포 후 IndexNow 알림
tests/site.test.mjs     생성된 HTML과 배포 파일 검사
index.html              생성 결과; 직접 편집하지 않음
assets/site.js          생성된 배포용 스크립트; Git에는 포함하지 않음
dist/                   공개할 파일만 포함하는 배포 결과; Git에는 포함하지 않음
```

도구를 추가할 때는 `data/catalog.js`에 고유한 `id`와 링크·설명을 넣는다. 카드, 첫 화면의 개수, 하단 웹 서비스 목록, JSON-LD와 `llms.txt`는 같은 데이터를 사용한다. 콘텐츠를 고치면 `data/site.js`의 실제 수정일도 갱신하고 빌드·검사를 실행한다. `index.html`, `llms.txt`, `sitemap.xml`은 생성 파일이다.

`components/Tweaks.jsx`의 편집 모드와 캐릭터 변경 기능은 유지한다. 라이트·다크·스튜디오 테마를 CSS 변수로 정의한다.

## 검색·AI 검색 대응

- 모든 소개·카드·답변·원문 링크를 최초 HTML에 포함한다. 자바스크립트나 외부 CDN이 실행되지 않아도 본문을 읽을 수 있다.
- React와 JSX는 배포 전에 빌드한다. 브라우저에서 Babel을 내려받아 컴파일하던 방식과 개발용 React CDN 의존성을 없앴다.
- 제목·설명·canonical·OG·Twitter 메타데이터와 안정적인 파비콘 URL을 제공한다.
- JSON-LD의 `WebSite`, `CollectionPage`, `Person`, `ItemList`, `FAQPage`를 실제 화면의 콘텐츠와 맞춘다. 별도의 가격·평점·검사 정확도는 만들지 않는다.
- 사이트맵에는 실제 문서 URL 하나만 넣는다. 같은 페이지의 앵커를 별도 문서로 제출하지 않는다.
- 목적별 안내, 독립적인 질문·답변, 카드별 앵커, 제작자·수정일·원문 출처를 제공한다.
- `llms.txt`는 본문과 같은 데이터로 만드는 보조 텍스트 안내다. AI 검색 노출에 필수인 표준이나 순위 보장 수단으로 취급하지 않는다.
- `robots.txt`는 기존처럼 크롤링을 허용한다. AI 학습 관련 정책을 별도로 바꾸지 않는다.
- 없는 주소에는 404 페이지를 제공하고, 해당 페이지는 `noindex`로 표시한다.

기준 문서: [Google AI 기능과 웹사이트](https://developers.google.com/search/docs/appearance/ai-features), [JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics), [사이트맵 작성](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), [Bing AI 검색 측정과 콘텐츠 안내](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/), [IndexNow](https://www.indexnow.org/documentation).

FAQ 구조화 데이터는 화면의 질문·답변을 설명하기 위한 것이다. 일반 개인 도구 사이트에서 Google FAQ 리치 결과나 AI 답변 인용을 보장하지 않는다.

## 모바일·접근성

1100px 이하에서는 기본 HTML `details` 메뉴를 사용한다. 작은 화면에서는 첫 화면, 도서, 확장, 웹 서비스, 협업, 채널, 소개와 하단 영역을 재배치한다. 320px에서도 내용을 읽을 수 있도록 고정 너비를 조정한다.

본문 바로가기, 키보드 초점, 메뉴의 Escape 닫기, 설명 있는 캐릭터 버튼, 이미지 크기 예약·하단 이미지 지연 로딩, 동작 줄이기 설정을 지원한다. 이 페이지의 모바일 대응과 개별 도구가 지원하는 기기는 구분해서 안내한다.

## 검사

`npm run check`는 배포 파일을 대상으로 다음을 검사한다.

- JS 실행 전 HTML에 모든 도구·설명·답변이 있는지
- 페이지 안 링크의 대상이 존재하고 ID가 중복되지 않는지
- 화면·구조화 데이터·텍스트 목록이 일치하는지
- 대표 URL·사이트맵·robots·404 설정이 맞는지
- 이미지·스타일·스크립트가 배포 파일에 존재하고 소스·의존성은 제외되는지
- 배포용 스크립트의 압축 크기가 예산을 넘지 않는지

메뉴 동작, 캐릭터 변경, 모바일의 가로 넘침과 카드 배치는 실제 브라우저에서 별도로 확인한다.

## 라이선스와 연락

페이지 콘텐츠와 제작자 캐릭터: © 205(이영호). 엔트리 블록 이미지는 [네이버 커넥트재단](https://playentry.org/)의 [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) 자료이며 페이지 하단에 출처를 표시한다.

- [제작자 웹사이트](https://205.kr/)
- [메일](mailto:205@205.kr)
- [엔트리 프로필](https://playentry.org/profile/56136825dadc91e1235b460d)
