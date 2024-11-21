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
  sidebar.classList.add("hidden");
  extendedSidebar.classList.remove("hidden");
  extendedSidebar.classList.add("w-64");
  sidebar.classList.remove("w-16");
});

collapseButton.addEventListener("click", function () {
  extendedSidebar.classList.add("hidden");
  sidebar.classList.remove("hidden");
  sidebar.classList.add("w-16");
  extendedSidebar.classList.remove("w-64");
});

const textarea = document.getElementById("textarea");
const adjacentDiv = document.getElementById("adjacentDiv");

textarea.addEventListener("focus", () => {
  adjacentDiv.classList.remove("hidden"); 
  adjacentDiv.style.opacity = 1; 
});

textarea.addEventListener("blur", () => {
  adjacentDiv.classList.add("hidden"); 
  adjacentDiv.style.opacity = 0; 
});
