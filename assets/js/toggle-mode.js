(() => {
  // updateIcon(document.documentElement.getAttribute('data-theme'));
  updateIcon(localStorage.getItem("theme"));
})();

function updateIcon(theme) {
  const button = document.getElementById("themeToggle");
  if (!button) return;
  // console.log(theme);
  button.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  button.querySelector('.icon-sun').style.display = theme === 'dark' ? 'block' : 'none';
  button.querySelector('.icon-moon').style.display = theme === 'dark' ? 'none' : 'block';
}

function toggleMode() {
  const current = document.documentElement.getAttribute("data-theme");
  const next    = current === "dark" ? "light" : "dark";

  // document.documentElement.setAttribute("data-theme", next);
  if (!document.startViewTransition) {
    document.documentElement.setAttribute('data-theme', next);
  } else {
    document.startViewTransition (() => {
      document.documentElement.setAttribute('data-theme', next);
    });
  }
  localStorage.setItem("theme", next);
  updateIcon(next);
};
