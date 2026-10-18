export const site = {
  url: "https://entry-tools.205.kr/",
  name: "205 엔트리 도구 모음",
  title: "205 엔트리 도구 모음 | 작품 합치기·바이브코딩·크롬 확장",
  description: "이영호(205)가 만든 엔트리 웹 서비스 7개, 크롬 확장프로그램 3개, 도서 2권을 한곳에서 만나세요. 작품 합치기, 변수 확인, 세이브, 온라인 멀티플레이, AI 체크와 바이브코딩 안내를 제공합니다.",
  updated: "2026-10-18",
  source: "https://github.com/205sla/entry-tools-site",
};

export const defaultTweaks = { theme: "light", density: "comfortable", blockMotif: true, heroVariant: "minimal" };

export const choices = [
  { title: "작품 파일을 합치고 싶어요", text: "EntryMerge로 여러 .ent 파일을 하나로 합쳐 보세요.", href: "#entrymerge-web", label: "EntryMerge 웹 버전" },
  { title: "AI와 게임을 만들고 싶어요", text: "환경 준비와 제작 프롬프트는 바이브코딩 안내에서 시작하세요.", href: "#entry-vibe-coding", label: "엔트리 바이브코딩" },
  { title: "변수와 리스트를 확인하고 싶어요", text: "디버깅 툴로 실행 중인 작품의 값을 살펴보세요.", href: "#entry-debug", label: "엔트리 디버깅 툴" },
  { title: "게임 진행을 저장하고 싶어요", text: "Save Manager로 지정한 변수와 리스트를 브라우저에 저장하세요.", href: "#entry-save-manager", label: "Entry Save Manager" },
  { title: "친구와 함께 플레이하고 싶어요", text: "같은 방에서 변수와 리스트를 공유하는 멀티플레이를 연결하세요.", href: "#entry-online", label: "엔트리 온라인" },
  { title: "블록 코딩 문제를 풀고 싶어요", text: "CODE 205에서 엔트리 블록으로 알고리즘 문제를 연습하세요.", href: "#code205", label: "CODE 205" },
];

export const questions = [
  {
    id: "faq-what",
    question: "205 엔트리 도구 모음은 어떤 사이트인가요?",
    answer: "이영호(205)가 만든 엔트리 관련 웹 서비스, 크롬 확장프로그램, 도서와 커뮤니티 링크를 모은 개인 소개 사이트입니다. 웹 서비스 7개, 크롬 확장프로그램 3개와 엔트리 입문서 2권을 목적에 맞게 찾아볼 수 있습니다.",
    links: [{ label: "제작자 소개", href: "#about" }],
  },
  {
    id: "faq-merge",
    question: "여러 엔트리 작품을 하나로 합치려면 무엇을 쓰나요?",
    answer: "EntryMerge를 사용하면 됩니다. 별도 확장 설치 없이 작품 파일(.ent)을 합치려면 웹 버전을, Chrome에서 확장프로그램으로 사용하려면 Chrome Web Store 버전을 선택하세요. 파일 수와 용량 등 현재 이용 조건은 각 도구의 안내를 확인하세요.",
    links: [{ label: "EntryMerge 웹 버전", href: "#entrymerge-web" }, { label: "EntryMerge 크롬 확장", href: "#entrymerge-extension" }],
  },
  {
    id: "faq-debug-save",
    question: "디버깅 툴과 Save Manager는 어떻게 다른가요?",
    answer: "엔트리 디버깅 툴은 변수와 리스트의 값을 실시간으로 확인하고 수정하는 도구입니다. Entry Save Manager는 이름 앞에 @를 붙인 변수와 리스트를 브라우저 로컬에 저장하고 복원하는 도구입니다. 오류를 찾을 때는 디버깅 툴, 게임 진행을 저장할 때는 Save Manager를 살펴보세요.",
    links: [{ label: "디버깅 툴", href: "#entry-debug" }, { label: "Save Manager", href: "#entry-save-manager" }],
  },
  {
    id: "faq-vibe-coding",
    question: "AI로 엔트리 게임을 만들려면 어디서 시작하나요?",
    answer: "엔트리 바이브코딩 시작 안내를 열어 보세요. AI 코딩 도우미에게 작업 폴더의 환경 준비를 요청하는 방법과 게임 제작 프롬프트, 만들어진 작품을 실행해 확인하는 순서를 영상과 글로 안내합니다. 실제 제작에는 컴퓨터와 파일·명령을 다룰 수 있는 AI 코딩 도우미가 필요합니다.",
    links: [{ label: "엔트리 바이브코딩 시작 안내", href: "https://xn--o01b54khubg9qb1j.xn--oy2b95t44j.org/" }],
  },
  {
    id: "faq-multiplayer",
    question: "엔트리 작품에 멀티플레이를 연결할 수 있나요?",
    answer: "엔트리 온라인은 같은 방에 있는 플레이어끼리 작품의 변수와 리스트를 실시간으로 공유하는 서비스입니다. 작품에 멀티플레이를 연결하는 방법과 다른 사용자가 만든 온라인 작품은 엔트리 온라인 사이트에서 확인할 수 있습니다.",
    links: [{ label: "엔트리 온라인", href: "https://online.205.kr/" }],
  },
  {
    id: "faq-mobile",
    question: "휴대폰에서도 이용할 수 있나요?",
    answer: "이 도구 모음의 소개와 링크는 휴대폰에서도 볼 수 있습니다. 각 도구에서 실제로 지원하는 기능과 기기는 다릅니다. 크롬 확장프로그램은 PC의 Chrome 환경에서 사용하고, 바이브코딩의 환경 준비와 작품 제작도 컴퓨터에서 진행하세요.",
    links: [{ label: "웹 서비스 목록", href: "#sites" }, { label: "크롬 확장프로그램 목록", href: "#extensions" }],
  },
  {
    id: "faq-ai-check",
    question: "AI 체크 결과로 AI 사용 여부를 확정할 수 있나요?",
    answer: "확정할 수 없습니다. 엔트리 AI 체크는 공개 작품의 AI 생성 가능성을 살펴보는 참고용 검사입니다. 오탐과 미탐이 있을 수 있으므로 결과만으로 제작 방식이나 제작자의 행동을 단정하지 마세요.",
    links: [{ label: "엔트리 AI 체크", href: "https://ai.205.kr/" }],
  },
  {
    id: "faq-official",
    question: "엔트리 공식 사이트인가요?",
    answer: "아닙니다. 이 사이트와 여기 소개된 개인 도구는 이영호(205)가 운영하는 비공식 프로젝트입니다. 엔트리 플랫폼은 네이버 커넥트재단에서 운영합니다. 엔트리 공식 플랫폼과 개인 도구의 안내를 구분해 이용해 주세요.",
    links: [{ label: "엔트리 공식 사이트", href: "https://playentry.org/" }, { label: "제작자 웹사이트", href: "https://205.kr/" }],
  },
];
