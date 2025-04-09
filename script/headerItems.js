const pageItems = [
  { title: "Services", page: "services.html" },
  { title: "About Us", page: "about-us.html" },
  { title: "Contact Us", page: "contact-us.html" },
];

const navItemsContainer = document.getElementById("nav-items");
const navItemsContainerMobile = document.getElementById("nav-items-mobile");
const navItemsContainerFooter = document.getElementById("nav-items-footer");

// nav-items-footer

pageItems.forEach((item) => {
  const li = document.createElement("li");
  li.innerHTML = `<a class="px-4 py-2 hover:text-primary hover:bg-stone-200 transition-all rounded-lg block" href="/${item.page}">${item.title}</a>`;

  // Append to desktop nav
  if (navItemsContainer) {
    navItemsContainer.appendChild(li.cloneNode(true));
  }

  // Append to mobile nav (if exists)
  if (navItemsContainerMobile) {
    navItemsContainerMobile.appendChild(li.cloneNode(true));
  }

  if (navItemsContainerFooter) {
    li.innerHTML = `<a class="font-semibold hover:text-primary" href="/${item.page}">${item.title}</a>`;
    navItemsContainerFooter.appendChild(li.cloneNode(true));
  }
});

// Mobile menu toggle
const mobOpenBtn = document.getElementById("mob-open-btn");
const mobCloseBtn = document.getElementById("mob-close-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobOpenBtn?.addEventListener("click", () => {
  mobileMenu?.classList.remove("hidden");
});

mobCloseBtn?.addEventListener("click", () => {
  mobileMenu?.classList.add("hidden");
});
