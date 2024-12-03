document.addEventListener("DOMContentLoaded", function () {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  if (prefersDarkScheme.matches) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("searchButton");
  const searchInput = document.getElementById("searchInput");

  searchButton.addEventListener("click", function () {
    searchButton.classList.remove("opacity-100");
    searchButton.classList.add("opacity-0");
    searchInput.classList.remove("opacity-0");
    searchInput.classList.add("opacity-100", "w-32");
  });
});
