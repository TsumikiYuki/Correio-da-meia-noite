// cookie-system.js

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const [key, value] = cookies[i].split("=");
    if (key === name) return value;
  }
  return null;
}

// aplica tema salvo
function applyTheme() {
  const theme = getCookie("theme");

  if (theme === "dark") {
    document.body.classList.add("dark");
  }
}

// alterna tema e salva
function toggleTheme() {
  const isDark = document.body.classList.toggle("dark");
  setCookie("theme", isDark ? "dark" : "light", 365);
  return isDark;
}
