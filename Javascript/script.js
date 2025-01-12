entListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.querySelector("nav");
  menuToggle.onclick = () => {
    nav.classList.toggle("nav");
  };
});
