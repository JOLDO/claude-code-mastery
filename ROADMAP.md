# 개발자 웹 이력서 ROADMAP

## 프로젝트 개요

HTML, CSS, JavaScript, TailwindCSS를 사용하여 반응형 개발자 웹 이력서를 제작합니다.

### 기술 스택
- **HTML5**: 시맨틱 마크업
- **CSS3**: 커스텀 스타일링
- **JavaScript (Vanilla)**: 인터랙션 및 동적 기능
- **TailwindCSS**: 유틸리티 기반 스타일링

---

## 이력서 구성 섹션

1. **Header / Hero** — 이름, 직함, 한 줄 소개
2. **About Me** — 자기소개
3. **Skills** — 기술 스택
4. **Experience** — 경력 사항
5. **Projects** — 주요 프로젝트
6. **Education** — 학력
7. **Contact** — 연락처 및 SNS 링크
8. **Footer** — 저작권 정보

---

## 개발 단계

### Phase 1: 프로젝트 셋업
- [x] 프로젝트 디렉토리 구조 설계
  ```
  /
  ├── index.html
  ├── main.js
  ├── styles/
  │   └── custom.css
  └── assets/
      ├── images/
      └── icons/
  ```
- [x] TailwindCSS CDN 또는 CLI 방식 연동 (CDN 방식 채택)
- [x] 기본 메타 태그 및 favicon 설정
- [x] 한글 폰트(Pretendard, Noto Sans KR 등) 적용 (Pretendard Variable)

### Phase 2: 레이아웃 및 마크업
- [x] 시맨틱 HTML 구조 작성 (`header`, `main`, `section`, `footer`)
- [x] 각 섹션별 기본 마크업 구성
- [x] 네비게이션 바 작성
- [x] 접근성(a11y) 속성 추가 (`aria-*`, `alt` 등)

### Phase 3: 스타일링 (TailwindCSS)
- [x] 컬러 팔레트 및 디자인 토큰 정의 (`tailwind.config.js`)
- [x] 타이포그래피 시스템 구성
- [x] Hero 섹션 스타일링
- [x] Skills 섹션 카드/배지 디자인
- [x] Projects 섹션 카드 디자인
- [x] Experience 섹션 타임라인 디자인

### Phase 4: 반응형 디자인
- [x] 모바일 우선(Mobile-first) 레이아웃 적용
- [x] 브레이크포인트별 검증 (sm, md, lg, xl)
- [x] 모바일 햄버거 메뉴 구현
- [x] 이미지 반응형 최적화

### Phase 5: JavaScript 인터랙션
- [x] 스무스 스크롤 네비게이션
- [x] 스크롤 시 헤더 상태 변경
- [x] 다크 모드 토글 (Tailwind `dark:` 활용)
- [x] 스크롤 애니메이션 (Intersection Observer)
- [ ] Projects 필터링 기능 (선택)
- [ ] 타이핑 애니메이션 효과 (선택)

### Phase 6: 최적화 및 배포
- [ ] 이미지 최적화 (WebP, lazy loading)
- [ ] Lighthouse 점수 측정 및 개선
- [ ] SEO 메타 태그(Open Graph, Twitter Card) 추가
- [ ] 크로스 브라우저 테스트
- [ ] GitHub Pages 또는 Vercel/Netlify 배포

---

## 이력서 콘텐츠 (예시)

### Header
- **이름**: 홍길동
- **직함**: Frontend Developer
- **한 줄 소개**: 사용자 경험을 고민하는 웹 개발자

### About Me
> 안녕하세요, 웹 프론트엔드 개발자 홍길동입니다.
> 깔끔한 코드와 좋은 사용자 경험을 만드는 것을 좋아합니다.

### Skills
- **Frontend**: HTML, CSS, JavaScript, TailwindCSS, React
- **Tools**: Git, GitHub, VS Code, Figma
- **Etc.**: 반응형 웹, 웹 접근성

### Experience
- **○○ 회사** — Frontend Developer (2023.01 ~ 현재)
  - 웹 서비스 프론트엔드 개발 및 유지보수
  - 컴포넌트 라이브러리 구축

### Projects
- **개인 포트폴리오 사이트** — HTML, TailwindCSS
- **Todo 앱** — JavaScript, LocalStorage 활용

### Education
- ○○ 대학교 컴퓨터공학과 (2019 ~ 2023)

### Contact
- Email: example@email.com
- GitHub: github.com/username
- Blog: blog.example.com

---

## 참고 자료
- [TailwindCSS 공식 문서](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org)
- [웹 접근성 가이드 (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
