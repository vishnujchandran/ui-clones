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

const sidebar = document.getElementById("sidebar");
const extendedSidebar = document.getElementById("extended-sidebar");
const expandButton = document.getElementById("expandSidebar");
const collapseButton = document.getElementById("collapseSidebar");

expandButton.addEventListener("click", function () {
  sidebar.classList.add("hidden"); // Hide the small sidebar
  extendedSidebar.classList.remove("hidden"); // Show the extended sidebar
  extendedSidebar.classList.add("w-64"); // Set width of extended sidebar
  sidebar.classList.remove("w-16"); // Reset width of small sidebar
});

collapseButton.addEventListener("click", function () {
  extendedSidebar.classList.add("hidden"); // Hide the extended sidebar
  sidebar.classList.remove("hidden"); // Show the small sidebar
  sidebar.classList.add("w-16"); // Set width of small sidebar
  extendedSidebar.classList.remove("w-64"); // Reset width of extended sidebar
});
