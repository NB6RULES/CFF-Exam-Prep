// Toggle accordion card
function toggleCard(card) {
  card.classList.toggle('open');
}

// Set active topbar link based on current page
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.topbar-link').forEach(l => {
    l.classList.remove('active');
    const href = l.getAttribute('href').split('/').pop();
    if (href === path) l.classList.add('active');
  });
}

// Search within page
function initSearch(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    document.querySelectorAll('.qcard').forEach(card => {
      if (!q) { card.style.display = ''; return; }
      card.style.display = card.innerText.toLowerCase().includes(q) ? '' : 'none';
    });
  });
}

// Global topbar search — show matching sections
function initGlobalSearch() {
  const input = document.querySelector('.topbar-search');
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    document.querySelectorAll('.qcard').forEach(card => {
      if (!q) { card.style.display = ''; return; }
      const match = card.innerText.toLowerCase().includes(q);
      card.style.display = match ? '' : 'none';
      if (match) card.classList.add('open');
    });
  });
}

// Keyboard shortcut: / to focus search
document.addEventListener('keydown', e => {
  if (e.key === '/' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) {
    e.preventDefault();
    const s = document.querySelector('.topbar-search');
    if (s) s.focus();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  initGlobalSearch();
});
