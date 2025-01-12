// // script.js
// document.addEventListener('DOMContentLoaded', () => {
//   const navbarLinks = document.querySelectorAll('.navbar a');

//   navbarLinks.forEach(link => {
//       link.addEventListener('click', e => {
//           e.preventDefault();
//           const targetId = e.target.getAttribute('href').substring(1);
//           const targetSection = document.getElementById(targetId);

//           window.scrollTo({
//               top: targetSection.offsetTop - 50,
//               behavior: 'smooth',
//           });
//       });
//   });
// });
// script.js
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.querySelector("nav");
  menuToggle.onclick = () => {
    nav.classList.toggle("nav");
  };
});
