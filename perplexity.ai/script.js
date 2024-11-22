function updateTheme() {
  const htmlElement = document.documentElement;
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    htmlElement.setAttribute("data-color-scheme", "dark");
  } else {
    htmlElement.removeAttribute("data-color-scheme");
  }
}

window.onload = updateTheme;

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", updateTheme);

function toggleSidebar() {
  const extendedSidebar = document.getElementById("extended-sidebar");
  const collapsedSidebar = document.getElementById("sidebar");

  if (extendedSidebar.classList.contains("hidden")) {
    extendedSidebar.classList.remove("hidden");
    collapsedSidebar.classList.add("hidden");
  } else {
    extendedSidebar.classList.add("hidden");
    collapsedSidebar.classList.remove("hidden");
  }
}
