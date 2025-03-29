(function() {
  function getTheme() {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty('--theme-bg', '#000000');
      document.documentElement.style.setProperty('--theme-text', '#ffffff');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty('--theme-bg', '#ffffff');
      document.documentElement.style.setProperty('--theme-text', '#000000');
    }
  }

  // Apply theme immediately
  setTheme(getTheme());
})(); 