type Theme = 'light' | 'dark';

const isClient = typeof window !== 'undefined';

export function getTheme(): Theme {
  if (!isClient) return 'light';
  
  if (localStorage.getItem('theme')) {
    return localStorage.getItem('theme') as Theme;
  }
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function setTheme(theme: Theme) {
  if (!isClient) return;

  localStorage.setItem('theme', theme);
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(theme);
}

// Initialize theme on page load
export function initTheme() {
  if (!isClient) return;
  setTheme(getTheme());
}