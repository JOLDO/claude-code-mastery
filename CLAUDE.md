# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

이 저장소는 **개발자 웹 이력서**를 제작하는 정적 프론트엔드 프로젝트입니다. 빌드 도구나 패키지 매니저 없이 순수 HTML/CSS/JS와 TailwindCSS만으로 구성됩니다. 현재는 초기 단계이며, `ROADMAP.md`에 정의된 6단계 개발 계획을 따라 진행합니다.

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어 (모든 사용자와의 대화는 한국어로 진행)
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화** (README, ROADMAP 등): 한국어로 작성
- **변수명 / 함수명 / 클래스명**: 영어 (코드 표준 준수, snake_case·camelCase·PascalCase 등 언어 관례 준수)
- **HTML 콘텐츠**: 이력서 본문 텍스트는 한국어로 작성

## 기술 스택

- **HTML5** — 시맨틱 마크업 (`header`, `main`, `section`, `footer`, `nav` 등)
- **CSS3** — 커스텀 스타일은 `styles/custom.css`에 분리
- **Vanilla JavaScript** — 프레임워크 없음, ES6+ 문법 사용
- **TailwindCSS** — 유틸리티 클래스 기반 스타일링 (CDN 또는 CLI 방식 중 ROADMAP Phase 1에서 결정)

## 개발 및 실행

빌드 시스템이 없으므로 `index.html`을 브라우저에서 직접 열거나 간단한 정적 서버로 실행합니다.

```bash
# 로컬 정적 서버 (Python)
python3 -m http.server 8000

# 또는 Node.js
npx serve .
```

TailwindCSS를 CLI 방식으로 도입할 경우 빌드 명령이 추가되며, 그 시점에 이 섹션을 갱신합니다.

## 아키텍처 / 디렉토리 구조

`ROADMAP.md` Phase 1에서 정의한 구조를 따릅니다.

```
/
├── index.html          # 단일 페이지 진입점, 모든 섹션을 포함
├── main.js             # 전역 인터랙션 (스크롤, 다크 모드, 애니메이션 등)
├── styles/
│   └── custom.css      # Tailwind로 표현하기 어려운 커스텀 스타일
└── assets/
    ├── images/
    └── icons/
```

### 페이지 구성 (단일 페이지 스크롤 구조)

`index.html` 내부에 다음 8개 섹션이 `<section id="...">` 형태로 순서대로 배치됩니다. 네비게이션은 각 섹션의 `id`로 앵커 링크를 겁니다.

1. Header / Hero
2. About Me
3. Skills
4. Experience
5. Projects
6. Education
7. Contact
8. Footer

### JavaScript 인터랙션 계층

`main.js`는 DOM이 로드된 후 다음 기능을 등록합니다 (Phase 5):

- 스무스 스크롤 네비게이션
- 스크롤 위치에 따른 헤더 상태 변경
- 다크 모드 토글 (Tailwind `dark:` 클래스 활용)
- Intersection Observer 기반 스크롤 진입 애니메이션

기능별로 함수를 분리하고, 각 함수는 자신의 셀렉터로 DOM을 직접 조회합니다. 전역 상태 관리는 사용하지 않습니다.

## 작업 시 주의 사항

- **ROADMAP.md를 단일 출처(Single Source of Truth)로 사용합니다.** 체크박스(`- [ ]` / `- [x]`)로 진행 상황을 추적하며, 작업 완료 시 해당 항목을 체크 처리합니다.
- **모바일 우선(Mobile-first)** 으로 작성합니다. Tailwind 브레이크포인트는 기본(모바일) → `sm` → `md` → `lg` → `xl` 순으로 점진 적용합니다.
- **접근성(a11y)** 을 기본으로 합니다. `aria-*`, `alt`, 의미 있는 heading 구조, 키보드 포커스 스타일을 누락하지 않습니다.
- **이력서 콘텐츠는 `ROADMAP.md`의 예시 데이터(홍길동 등)** 를 기본값으로 두며, 실제 콘텐츠 교체는 사용자 요청 시에만 수행합니다.
