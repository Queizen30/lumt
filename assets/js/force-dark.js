(function() {
  try {
    document.documentElement.classList.add('theme-dark');
    localStorage.setItem('theme', 'dark');
  } catch(e) {}
})();
