// Theme
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

if (prefersDarkScheme.matches) {
  document.body.classList.add("dark");
}

document.addEventListener("DOMContentLoaded", function () {
  const collapseButton = document.getElementById("right-collapse");
  const sidebar = document.getElementById("sidebar");
  const buttonIcon = collapseButton.querySelector("svg");

  if (collapseButton && sidebar && buttonIcon) {
    collapseButton.addEventListener("click", () => {
      sidebar.classList.toggle("sidebar-collapsed");

      buttonIcon.classList.toggle("rotate-180");
    });
  }
});

// carousel
const container = document.getElementById("newsContainer");

container.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();

    const scrollAmount = e.deltaY * 2.5;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  },
  { passive: false }
);

let touchStartX = 0;
let isScrolling = false;

container.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
  isScrolling = true;
});

container.addEventListener("touchmove", (e) => {
  if (!isScrolling) return;

  const touchMoveX = e.touches[0].clientX;
  const deltaX = (touchStartX - touchMoveX) * 5.0;

  container.scrollBy({
    left: deltaX,
    behavior: "smooth",
  });

  touchStartX = touchMoveX;
});

container.addEventListener("touchend", () => {
  isScrolling = false;
});

const scrollInterval = setInterval(() => {
  container.scrollBy({
    left: 200,
    behavior: "smooth",
  });
}, 2000);

// Drop down Main
function toggleDropdownMain(event) {
  event.stopPropagation();

  const dropdown = document.getElementById("dropdownMenuMain");
  dropdown.classList.toggle("hidden");
}

document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("dropdownMenuMain");
  const button = document.querySelector('button[type="button"]');

  if (!button.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.add("hidden");
  }
});

function toggleDropdown2Main(event) {
  event.stopPropagation();

  const dropdown = document.getElementById("dropdownMenu2Main");
  dropdown.classList.toggle("hidden");
}

document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("dropdownMenu2Main");
  const button = document.querySelector('button[type="button"]');

  if (!button.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.add("hidden");
  }
});

// Drop down mobile
function toggleDropdown(event) {
  event.stopPropagation();

  const dropdown = document.getElementById("dropdownMenu");
  dropdown.classList.toggle("hidden");
}

document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("dropdownMenu");
  const button = document.querySelector('button[type="button"]');

  if (!button.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.add("hidden");
  }
});

function toggleDropdown2(event) {
  event.stopPropagation();

  const dropdown = document.getElementById("dropdownMenu2");
  dropdown.classList.toggle("hidden");
}

document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("dropdownMenu2");
  const button = document.querySelector('button[type="button"]');

  if (!button.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.add("hidden");
  }
});

// Show password Main
function togglePasswordVisibilityMain() {
  const passwordInput = document.getElementById("apiKeyInputMain");
  const showButton = document.getElementById("showButtonMain");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showButton.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    showButton.textContent = "Show";
  }
}

// Show password
function togglePasswordVisibility() {
  const passwordInput = document.getElementById("apiKeyInput");
  const showButton = document.getElementById("showButton");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showButton.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    showButton.textContent = "Show";
  }
}

// Opacity
function toggleOpacity(button) {
  if (button.style.opacity === "0.15") {
    button.style.opacity = "1";
  } else {
    button.style.opacity = "0.15";
  }
}

// Open Menu
const mainDiv = document.getElementById("main");

function openPopover() {
  const popoverMenu = document.getElementById("popoverMenu");

  popoverMenu.classList.toggle("hidden");
}

document.getElementById("popOverClose").addEventListener("click", function () {
  const popoverMenu = document.getElementById("popoverMenu");
  popoverMenu.classList.add("hidden");
});

document.addEventListener("click", function (event) {
  const popoverMenu = document.getElementById("popoverMenu");
  const openMenuBtn = document.getElementById("openMenuBtn");
});

document
  .getElementById("popoverMenu")
  .addEventListener("click", function (event) {
    event.stopPropagation();
  });

// mobile view right sheet
const toggleButton = document.getElementById("toggle-sheet-r");
const slidingSheet = document.getElementById("sliding-sheet-r");
const closeButton = document.getElementById("close-sheet-r");

toggleButton.addEventListener("click", function () {
  slidingSheet.classList.toggle("open");
  slidingSheet.classList.toggle("hidden");
});

closeButton.addEventListener("click", function () {
  slidingSheet.classList.remove("open");
  slidingSheet.classList.toggle("hidden");
});

// mobile view left sheet
const toggleButtonLeft = document.getElementById("toggle-sheet-l");
const slidingSheetLeft = document.getElementById("sliding-sheet-l");
const closeButtonLeft = document.getElementById("close-sheet-l");

toggleButtonLeft.addEventListener("click", function () {
  slidingSheetLeft.classList.toggle("open");
  slidingSheetLeft.classList.toggle("hidden");
});

closeButtonLeft.addEventListener("click", function () {
  slidingSheetLeft.classList.remove("open");
  slidingSheetLeft.classList.toggle("hidden");
});

// Theme button and dropdown menu
const themeButton = document.getElementById("theme-btn");
const dropdownMenu = document.getElementById("dropdown-menu-main");

themeButton.addEventListener("click", function (e) {
  e.stopPropagation();
  dropdownMenu.classList.toggle("hidden");
});

window.addEventListener("click", function (e) {
  if (!themeButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.add("hidden");
  }
});

function toggleLogoPopover(e) {
  const popoverLogo = document.getElementById("popoverLogoContent");
  popoverLogo.classList.toggle("hidden");

  const popoverMain = document.getElementById("popoverLogoContentMain");
  popoverMain.classList.add("hidden");

  e.stopPropagation();
}

function popoverLogoContentMain(e) {
  const popoverLogo = document.getElementById("popoverLogoContentMain");
  popoverLogo.classList.toggle("hidden");

  const popover = document.getElementById("popoverLogoContent");
  popover.classList.add("hidden");

  e.stopPropagation();
}

document.addEventListener("click", function (e) {
  const popoverLogo = document.getElementById("popoverLogoContent");
  const popoverMain = document.getElementById("popoverLogoContentMain");
  const button = document.querySelector("button");

  if (
    !popoverLogo.contains(e.target) &&
    !popoverMain.contains(e.target) &&
    !button.contains(e.target)
  ) {
    popoverLogo.classList.add("hidden");
    popoverMain.classList.add("hidden");
  }
});
