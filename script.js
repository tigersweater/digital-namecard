// ===== 다크/라이트 모드 토글 =====
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');

// 지금 다크 모드인지 확인 (직접 고른 값 → 없으면 컴퓨터 설정)
function isDark() {
  const chosen = root.getAttribute('data-theme');
  if (chosen) return chosen === 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// 버튼 아이콘을 현재 모드에 맞게 바꾸기
function updateIcon() {
  toggle.classList.toggle('is-dark', isDark());
}

toggle.addEventListener('click', () => {
  const next = isDark() ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) {}
  updateIcon();
});

updateIcon();

// ===== 이메일 주소 복사 =====
const copyBtn = document.getElementById('copyEmail');

copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('minsu@example.com');
    copyBtn.textContent = '복사 완료!';
  } catch (e) {
    copyBtn.textContent = 'minsu@example.com';
  }
  setTimeout(() => { copyBtn.textContent = '이메일 주소 복사'; }, 1800);
});
