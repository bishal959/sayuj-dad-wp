function openSidebar() {
  document.getElementById("sidebar").style.right = "0";
  document.body.classList.add("no-scroll");
}

function closeSidebar() {
  document.getElementById("sidebar").style.right = "-150vh";
  document.body.classList.remove("no-scroll");
}
