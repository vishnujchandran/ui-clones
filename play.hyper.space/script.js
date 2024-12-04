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
  const button = document.getElementById("toggleButtonMain");

  if (!button.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.add("hidden");
  }
});
document.addEventListener("keydown", function (event) {
  const dropdown = document.getElementById("dropdownMenuMain");
  if (event.key === "Escape") {
    dropdown.classList.add("hidden");
  }
});

const dropdownMenuMain = document.getElementById("dropdownMenuMain");
const selectedIcon = document.getElementById("selectedIcon");
const selectedText = document.getElementById("selectedText");
const selectedSubText = document.getElementById("selectedSubText");

function toggleDropdownMain(event) {
  dropdownMenuMain.classList.toggle("hidden");
  event.stopPropagation();
}

const dropdownItems = dropdownMenuMain.querySelectorAll(".dropdown-item");

dropdownItems.forEach((item) => {
  item.addEventListener("click", function () {
    const name = this.getAttribute("data-name");
    const imgSrc = this.getAttribute("data-img");
    const subText = this.getAttribute("data-subtext");

    selectedIcon.src = imgSrc;
    selectedText.textContent = name;
    selectedSubText.textContent = subText;

    dropdownMenuMain.classList.add("hidden");
  });
});

document.addEventListener("click", function (event) {
  if (
    !dropdownMenuMain.contains(event.target) &&
    !openMenuBtn.contains(event.target)
  ) {
    dropdownMenuMain.classList.add("hidden");
  }
});

dropdownMenuMain.addEventListener("click", function (event) {
  event.stopPropagation();
});

function toggleDropdown2Main(event) {
  event.stopPropagation();

  const dropdown = document.getElementById("dropdownMenu2Main");
  dropdown.classList.toggle("hidden");
}

document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("dropdownMenu2Main");
  const button = document.getElementById("toggleButton2Main");

  if (!button.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.add("hidden");
  }
});

document.addEventListener("keydown", function (event) {
  const dropdown = document.getElementById("dropdownMenu2Main");
  if (event.key === "Escape") {
    dropdown.classList.add("hidden");
  }
});
function toggleDropdown2Main(event) {
  const dropdown = document.getElementById("dropdownMenu2Main");
  dropdown.classList.toggle("hidden");
}

function selectDropdown2Item(event) {
  const button = event.currentTarget;
  const name = button.getAttribute("data-name");
  const img = button.getAttribute("data-img");

  document.getElementById("selectedText2").textContent = name;
  document.getElementById("selectedIcon2").src = img;

  document.getElementById("dropdownMenu2Main").classList.add("hidden");
}

const dropdownItems2 = document.querySelectorAll("#dropdownMenu2Main button");
dropdownItems2.forEach((item) => {
  item.addEventListener("click", selectDropdown2Item);
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

document.addEventListener("keydown", function (event) {
  const dropdown = document.getElementById("dropdownMenu");
  if (event.key === "Escape") {
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

document.addEventListener("keydown", function (event) {
  const dropdown = document.getElementById("dropdownMenu2");
  if (event.key === "Escape") {
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
const popoverMenu = document.getElementById("popoverMenu");
const openMenuBtn = document.getElementById("openMenuBtn");
const blurBg = document.getElementById("bgblur");

function openPopover() {
  popoverMenu.classList.toggle("hidden");
  blurBg.classList.toggle("hidden");
}

document.getElementById("popOverClose").addEventListener("click", function () {
  popoverMenu.classList.add("hidden");
  blurBg.classList.add("hidden");
});

document.addEventListener("click", function (event) {
  if (
    !popoverMenu.contains(event.target) &&
    !openMenuBtn.contains(event.target)
  ) {
    popoverMenu.classList.add("hidden");
    blurBg.classList.add("hidden");
  }
});

document
  .getElementById("popoverMenu")
  .addEventListener("click", function (event) {
    event.stopPropagation();
  });

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    popoverMenu.classList.add("hidden");
    blurBg.classList.toggle("hidden");
  }
});

// mobile view right sheet
const toggleButton = document.getElementById("toggle-sheet-r");
const slidingSheet = document.getElementById("sliding-sheet-r");
const closeButton = document.getElementById("close-sheet-r");

toggleButton.addEventListener("click", function () {
  slidingSheet.classList.toggle("open");
  blurBg.classList.remove("hidden");
  slidingSheet.classList.toggle("hidden");
});

closeButton.addEventListener("click", function () {
  slidingSheet.classList.remove("open");
  blurBg.classList.toggle("hidden");

  slidingSheet.classList.toggle("hidden");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    slidingSheet.classList.remove("open");
    blurBg.classList.toggle("hidden");
  }
});
// mobile view left sheet
const toggleButtonLeft = document.getElementById("toggle-sheet-l");
const slidingSheetLeft = document.getElementById("sliding-sheet-l");
const closeButtonLeft = document.getElementById("close-sheet-l");

toggleButtonLeft.addEventListener("click", function () {
  slidingSheetLeft.classList.toggle("open");
  slidingSheetLeft.classList.toggle("hidden");
  blurBg.classList.toggle("hidden");
});

closeButtonLeft.addEventListener("click", function () {
  slidingSheetLeft.classList.remove("open");
  slidingSheetLeft.classList.toggle("hidden");
  blurBg.classList.remove("hidden");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    slidingSheetLeft.classList.remove("open");
    slidingSheetLeft.classList.toggle("hidden");
    blurBg.classList.add("hidden");
  }
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
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const popoverMenu = document.getElementById("popoverMenu");
    const dropdownMenu = document.getElementById("dropdownMenuMain");
    const slidingSheet = document.getElementById("sliding-sheet-r");
    const slidingSheetLeft = document.getElementById("sliding-sheet-l");
    const blurBg = document.getElementById("bgblur");

    if (
      (popoverMenu && !popoverMenu.classList.contains("hidden")) ||
      (dropdownMenu && !dropdownMenu.classList.contains("hidden")) ||
      (slidingSheet && !slidingSheet.classList.contains("hidden")) ||
      (slidingSheetLeft && !slidingSheetLeft.classList.contains("hidden"))
    ) {
      if (popoverMenu) popoverMenu.classList.add("hidden");
      if (dropdownMenu) dropdownMenu.classList.add("hidden");
      if (slidingSheet) slidingSheet.classList.add("hidden");
      if (slidingSheetLeft) slidingSheetLeft.classList.add("hidden");

      if (blurBg) blurBg.classList.add("hidden");
    }
  }
});
