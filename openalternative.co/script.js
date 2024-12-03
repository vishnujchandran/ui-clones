document.addEventListener("DOMContentLoaded", function () {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  if (prefersDarkScheme.matches) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  const searchButton = document.getElementById("searchButton");
  const searchInput = document.getElementById("searchInput");

  searchButton.addEventListener("click", function () {
    searchButton.classList.remove("opacity-100");
    searchButton.classList.add("opacity-0");
    searchInput.classList.remove("opacity-0");
    searchInput.classList.add("opacity-100", "w-32");
  });

  const tools = [
    {
      name: "Notion Alternatives",
      url: "https://openalternative.co/alternatives/notion",
      count: 20,
    },
    {
      name: "Monday Alternatives",
      url: "https://openalternative.co/alternatives/monday",
      count: 9,
    },
    {
      name: "ClickUp Alternatives",
      url: "https://openalternative.co/alternatives/clickup",
      count: 7,
    },
    {
      name: "Kissmetrics Alternatives",
      url: "https://openalternative.co/alternatives/kissmetrics",
      count: 11,
    },
    {
      name: "Airtable Alternatives",
      url: "https://openalternative.co/alternatives/airtable",
      count: 8,
    },
    {
      name: "BetterStack Alternatives",
      url: "https://openalternative.co/alternatives/betterstack",
      count: 9,
    },
    {
      name: "Fathom Analytics Alternatives",
      url: "https://openalternative.co/alternatives/fathom-analytics",
      count: 9,
    },
    {
      name: "Teamwork Alternatives",
      url: "https://openalternative.co/alternatives/teamwork",
      count: 6,
    },
    {
      name: "Brevo Alternatives",
      url: "https://openalternative.co/alternatives/brevo",
      count: 6,
    },
    {
      name: "Todoist Alternatives",
      url: "https://openalternative.co/alternatives/todoist",
      count: 7,
    },
    {
      name: "Typeform Alternatives",
      url: "https://openalternative.co/alternatives/typeform",
      count: 6,
    },
    {
      name: "Sendinblue Alternatives",
      url: "https://openalternative.co/alternatives/sendinblue",
      count: 6,
    },
  ];

  const toolList = document.getElementById("toolList");

  tools.forEach((tool) => {
    const toolLink = document.createElement("a");
    toolLink.href = tool.url;
    toolLink.classList.add(
      "group",
      "flex",
      "items-center",
      "text-gray-500",
      "gap-2",
      "p-0.5",
      "-m-0.5",
      "text-sm",
      "cursor-pointer",
      "hover:text-black",
      "dark:text-[#999999]",
      "dark:hover:text-[#D4D4D4]"
    );

    const toolName = document.createElement("span");
    toolName.classList.add("truncate");
    toolName.textContent = tool.name;

    const hr = document.createElement("hr");
    hr.classList.add("min-w-2", "flex-1", "dark:border-[#3C3C3C]");

    const toolCount = document.createElement("span");
    toolCount.classList.add("shrink-0", "text-xs", "max-sm:hidden");
    toolCount.textContent = tool.count;

    toolLink.appendChild(toolName);
    toolLink.appendChild(hr);
    toolLink.appendChild(toolCount);

    toolList.appendChild(toolLink);
  });

  const categories = [
    {
      name: "Developer Tools",
      url: "https://openalternative.co/categories/software-development",
      count: 57,
    },
    {
      name: "Productivity Tools",
      url: "https://openalternative.co/categories/productivity",
      count: 16,
    },
    {
      name: "Communication Tools",
      url: "https://openalternative.co/categories/communication",
      count: 19,
    },
    {
      name: "No-Code Tools",
      url: "https://openalternative.co/categories/no-code",
      count: 22,
    },
    {
      name: "AI Tools",
      url: "https://openalternative.co/categories/ai",
      count: 11,
    },
    {
      name: "Database Management Tools",
      url: "https://openalternative.co/categories/database",
      count: 14,
    },
    {
      name: "Security Tools",
      url: "https://openalternative.co/categories/security",
      count: 16,
    },
    {
      name: "CMS Tools",
      url: "https://openalternative.co/categories/cms",
      count: 19,
    },
    {
      name: "Internal Tools",
      url: "https://openalternative.co/categories/internal-tools",
      count: 19,
    },
    {
      name: "Monitoring Tools",
      url: "https://openalternative.co/categories/monitoring",
      count: 18,
    },
    {
      name: "Backend as a Service Tools",
      url: "https://openalternative.co/categories/backend-as-a-service",
      count: 13,
    },
    {
      name: "Observability Tools",
      url: "https://openalternative.co/categories/observability",
      count: 16,
    },
  ];

  const categoryList = document.getElementById("categoryList");

  categories.forEach((category) => {
    const categoryLink = document.createElement("a");
    categoryLink.href = category.url;
    categoryLink.classList.add(
      "group",
      "flex",
      "items-center",
      "text-gray-500",
      "gap-2",
      "p-0.5",
      "-m-0.5",
      "text-sm",
      "cursor-pointer",
      "hover:text-black",
      "dark:text-[#999999]",
      "dark:hover:text-[#D4D4D4]"
    );

    const categoryName = document.createElement("span");
    categoryName.classList.add("truncate");
    categoryName.textContent = category.name;

    const hr = document.createElement("hr");
    hr.classList.add("min-w-2", "flex-1", "dark:border-[#3C3C3C]");

    const categoryCount = document.createElement("span");
    categoryCount.classList.add("shrink-0", "text-xs", "max-sm:hidden");
    categoryCount.textContent = category.count;

    categoryLink.appendChild(categoryName);
    categoryLink.appendChild(hr);
    categoryLink.appendChild(categoryCount);

    categoryList.appendChild(categoryLink);
  });

  const browseLinks = [
    { name: "Alternatives", url: "https://openalternative.co/alternatives" },
    { name: "Categories", url: "https://openalternative.co/categories" },
    { name: "Languages", url: "https://openalternative.co/languages" },
    { name: "Topics", url: "https://openalternative.co/topics/letter/a" },
    { name: "Licenses", url: "https://openalternative.co/licenses" },
  ];

  const quickLinks = [
    { name: "Advertise with Us", url: "https://openalternative.co/advertise" },
    { name: "Add a Free Listing", url: "https://openalternative.co/submit" },
    { name: "About Us", url: "https://openalternative.co/about" },
    { name: "Blog", url: "https://openalternative.co/blog" },
  ];

  const otherProducts = [
    { name: "DevSuite", url: "https://devsuite.co/" },
    { name: "Superstash", url: "https://superstash.co/" },
    { name: "Chipmunk Theme", url: "https://chipmunktheme.com/" },
  ];

  function createLinkSection(sectionId, links, sectionTitle) {
    const section = document.getElementById(sectionId);
    const titleElement = document.createElement("strong");
    titleElement.classList.add(
      "bg-clip-text",
      "text-sm",
      "font-medium",
      "dark:text-[#DEDEDE]"
    );
    titleElement.textContent = sectionTitle;

    section.appendChild(titleElement);

    links.forEach((link) => {
      const linkElement = document.createElement("a");
      linkElement.href = link.url;
      linkElement.classList.add(
        "group",
        "flex",
        "items-center",
        "text-gray-500",
        "gap-2",
        "p-0.5",
        "-m-0.5",
        "text-sm",
        "cursor-pointer",
        "hover:text-black",
        "dark:text-[#999999]",
        "dark:hover:text-[#D4D4D4]"
      );

      const linkName = document.createElement("span");
      linkName.classList.add("truncate");
      linkName.textContent = link.name;

      linkElement.appendChild(linkName);
      section.appendChild(linkElement);
    });
  }

  createLinkSection("browseSection", browseLinks, "Browse:");
  createLinkSection("quickLinksSection", quickLinks, "Quick Links:");
  createLinkSection("otherProductsSection", otherProducts, "Other Products:");
});
