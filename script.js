window.addEventListener("DOMContentLoaded", (event) => {
  const sections = document.querySelectorAll("section");
  const sidebarLinks = document.querySelectorAll(".sidebar li a");

  sections.forEach((section, index) => {
    section.addEventListener("mouseenter", () => {
      sidebarLinks.forEach((link, linkIndex) => {
        if (linkIndex === index) {
          link.parentElement.classList.add("active");
        } else {
          link.parentElement.classList.remove("active");
        }
      });
    });
  });
});
