const themeToggleButton = document.getElementById("theme-toggle");

themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

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
//1
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

function toggleDropdownMain(event) {
  event.stopPropagation();

  const dropdown = document.getElementById("dropdownMenuMain");
  dropdown.classList.toggle("hidden");
}
document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("dropdownMenuMain");

  dropdown.classList.add("hidden");
});
document.addEventListener("keydown", function (event) {
  const dropdown = document.getElementById("dropdownMenuMain");
  if (event.key === "Escape") {
    dropdown.classList.add("hidden");
  }
});
//2
const dropdownMenu2Main = document.getElementById("dropdownMenu2Main");
const selectedIcon2 = document.getElementById("selectedIcon2");
const selectedText2 = document.getElementById("selectedText2");

function toggleDropdown2Main(event) {
  dropdownMenu2Main.classList.toggle("hidden");
  event.stopPropagation();
}

const dropdownItems2 = dropdownMenu2Main.querySelectorAll(".dropdown-item");

dropdownItems2.forEach((item) => {
  item.addEventListener("click", function () {
    const name = this.getAttribute("data-name");
    const imgSrc = this.getAttribute("data-img");

    selectedIcon2.src = imgSrc;
    selectedText2.textContent = name;

    dropdownMenu2Main.classList.add("hidden");
  });
});

document.addEventListener("click", function (event) {
  if (!dropdownMenu2Main.contains(event.target)) {
    dropdownMenuMain.classList.add("hidden");
  }
});

document.addEventListener("keydown", function (event) {
  const dropdown = document.getElementById("dropdownMenu2Main");
  if (event.key === "Escape") {
    dropdown.classList.add("hidden");
  }
});

// Drop down mobile
//1
const dropdownMenuMini = document.getElementById("dropdownMenu");
const selectedIconmini = document.getElementById("selectedIconmini");
const selectedTextmini = document.getElementById("selectedTextmini");
const selectedSubTextMini = document.getElementById("selectedSubTextmini");

function toggleDropdown(event) {
  dropdownMenuMini.classList.toggle("hidden");
  event.stopPropagation();
}

const dropdownItemsmini = dropdownMenuMini.querySelectorAll(".dropdown-item");

dropdownItemsmini.forEach((item) => {
  item.addEventListener("click", function () {
    const name = this.getAttribute("data-name");
    const imgSrc = this.getAttribute("data-img");
    const subText = this.getAttribute("data-subtext");

    selectedIconmini.src = imgSrc;
    selectedTextmini.textContent = name;
    selectedSubTextMini.textContent = subText;

    dropdownMenuMini.classList.add("hidden");
  });
});

document.addEventListener("click", function (event) {
  if (
    !dropdownMenuMini.contains(event.target) &&
    !openMenuBtn.contains(event.target)
  ) {
    dropdownMenuMini.classList.add("hidden");
  }
});

document.addEventListener("keydown", function (event) {
  const dropdown = document.getElementById("dropdownMenu");
  if (event.key === "Escape") {
    dropdown.classList.add("hidden");
  }
});

//2
const dropdownMenu2 = document.getElementById("dropdownMenu2");
const selectedIcon2mini = document.getElementById("selectedIcon2mini");
const selectedText2mini = document.getElementById("selectedText2mini");

function toggleDropdown2(event) {
  dropdownMenu2.classList.toggle("hidden");
  event.stopPropagation();
}

const dropdownItems2mini = dropdownMenu2.querySelectorAll(".dropdown-item");

dropdownItems2mini.forEach((item) => {
  item.addEventListener("click", function () {
    const name = this.getAttribute("data-name");
    const imgSrc = this.getAttribute("data-img");

    selectedIcon2mini.src = imgSrc;
    selectedText2mini.textContent = name;

    dropdownMenu2.classList.add("hidden");
  });
});

document.addEventListener("click", function (event) {
  if (
    !dropdownMenu2.contains(event.target) &&
    !openMenuBtn.contains(event.target)
  ) {
    dropdownMenu2.classList.add("hidden");
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
document.addEventListener("DOMContentLoaded", function () {
  const toggleButtonLeft = document.getElementById("toggle-sheet-l");
  const slidingSheetLeft = document.getElementById("sliding-sheet-l");
  const closeButtonLeft = document.getElementById("close-sheet-l");
  const blurBgLeft = document.getElementById("bgblur");

  toggleButtonLeft.addEventListener("click", function () {
    slidingSheetLeft.classList.toggle("open");
    slidingSheetLeft.classList.toggle("hidden");
    blurBgLeft.classList.toggle("hidden"); // Ensure blurBg visibility is toggled
  });

  closeButtonLeft.addEventListener("click", function () {
    slidingSheetLeft.classList.remove("open");
    slidingSheetLeft.classList.toggle("hidden");
    blurBgLeft.classList.add("hidden"); // Hide blurBg when closing the sheet
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      slidingSheetLeft.classList.remove("open");
      slidingSheetLeft.classList.toggle("hidden");
      blurBgLeft.classList.add("hidden"); // Hide blurBg when Escape is pressed
    }
  });
});

// Theme button and dropdown menu
const themeButton = document.getElementById("theme-toggle");
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

//Logo popover
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

      if (blurBg) blurBg.classList.toggle("hidden");
    }
  }
});

const dataSheet = document.getElementById("data-sheet");
const openSheetButton = document.getElementById("open-data-sheet-button");
const openSheetButton2 = document.getElementById("open-data-sheet-button2");
const closeSheetBtn = document.getElementById("close-data-sheet-button");

openSheetButton.addEventListener("click", () => {
  dataSheet.classList.remove("hidden");
  blurBg.classList.remove("hidden");
});

openSheetButton2.addEventListener("click", () => {
  dataSheet.classList.remove("hidden");
  blurBg.classList.remove("hidden");
});

function closeDataSheet() {
  dataSheet.classList.add("hidden");
  blurBg.classList.add("hidden");
}

closeSheetBtn.addEventListener("click", closeDataSheet);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDataSheet();
  }
});

// Search filter
document.getElementById("searchInput").addEventListener("input", function () {
  const searchQuery = this.value.toLowerCase();
  const sections = document.querySelectorAll(".searchable-section");
  let hasResults = false;

  sections.forEach((section) => {
    const items = section.querySelectorAll(".searchable-item");
    let sectionHasResults = false;

    items.forEach((item) => {
      const itemText = item.getAttribute("data-search-terms").toLowerCase();
      if (itemText.includes(searchQuery)) {
        item.style.display = "flex";
        sectionHasResults = true;
      } else {
        item.style.display = "none";
      }
    });

    if (sectionHasResults) {
      section.style.display = "block";
      hasResults = true;
    } else {
      section.style.display = "none";
    }
  });

  const noResultsMessage = document.getElementById("noResultsFound");
  if (hasResults) {
    noResultsMessage.style.display = "none";
  } else {
    noResultsMessage.style.display = "block";
  }
});
