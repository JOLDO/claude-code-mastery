// 개발자 웹 이력서 — 전역 인터랙션
// DOMContentLoaded 후 각 기능을 초기화합니다.
// 각 함수는 자신의 셀렉터로 DOM을 직접 조회하며, 전역 상태는 사용하지 않습니다.

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initStickyHeaderState();
  initDarkModeToggle();
  initMobileMenu();
  initScrollAnimations();
  initActiveNavHighlight();
});

// 앵커 링크 클릭 시 스무스 스크롤
function initSmoothScroll() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });

      // URL 해시 갱신 (히스토리 누적 없이)
      history.replaceState(null, '', href);
    });
  });
}

// 스크롤 위치에 따라 헤더에 is-scrolled 클래스 토글
function initStickyHeaderState() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const update = () => {
    if (window.scrollY > 8) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
}

// 다크모드 토글 (초기 상태는 head 인라인 스크립트가 결정)
function initDarkModeToggle() {
  const toggleButton = document.getElementById('theme-toggle');
  if (!toggleButton) return;

  toggleButton.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (_) {
      // localStorage 접근 불가 환경은 무시
    }
  });
}

// 모바일 햄버거 메뉴 열고 닫기
function initMobileMenu() {
  const button = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  if (!button || !menu) return;

  const setOpen = (open) => {
    menu.classList.toggle('hidden', !open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  };

  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    setOpen(!expanded);
  });

  // 메뉴 안 링크 클릭 시 자동으로 닫기
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  // ESC 키로 닫기
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });

  // 데스크탑 사이즈로 늘어나면 강제로 닫기 (Tailwind md: 기준 768px)
  const mediaQuery = window.matchMedia('(min-width: 768px)');
  const handleResize = (event) => {
    if (event.matches) setOpen(false);
  };
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', handleResize);
  } else {
    mediaQuery.addListener(handleResize);
  }
}

// 섹션이 뷰포트에 진입할 때 페이드/슬라이드 애니메이션
function initScrollAnimations() {
  const targets = document.querySelectorAll('[data-animate]');
  if (targets.length === 0) return;

  // IntersectionObserver 미지원 환경은 즉시 노출
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
  );

  targets.forEach((el) => observer.observe(el));
}

// 현재 보이는 섹션의 nav 링크에 aria-current="true" 부여
function initActiveNavHighlight() {
  const navLinks = document.querySelectorAll('[data-nav-link]');
  if (navLinks.length === 0) return;

  // 섹션 id → 그 id를 가리키는 nav 링크들의 매핑
  const linksBySection = new Map();
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    const id = href.slice(1);
    if (!linksBySection.has(id)) linksBySection.set(id, []);
    linksBySection.get(id).push(link);
  });

  const sections = Array.from(linksBySection.keys())
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (sections.length === 0 || !('IntersectionObserver' in window)) return;

  const clearActive = () => {
    navLinks.forEach((link) => link.removeAttribute('aria-current'));
  };

  const observer = new IntersectionObserver(
    (entries) => {
      // 가장 위쪽에 위치한 가시 섹션을 활성으로 표시
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visible.length === 0) return;

      const activeId = visible[0].target.id;
      clearActive();
      (linksBySection.get(activeId) || []).forEach((link) =>
        link.setAttribute('aria-current', 'true')
      );
    },
    { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}
