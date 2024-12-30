window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const darkMode = document.body.classList.contains("dark-mode");

  if (window.scrollY > 50) {
    header.style.backgroundColor = darkMode ? "#333" : "#fff"; // Сірий або білий
  } else {
    header.style.backgroundColor = "transparent"; // Прозорий
  }
});
