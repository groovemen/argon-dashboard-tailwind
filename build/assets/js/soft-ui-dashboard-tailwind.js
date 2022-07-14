var page = window.location.pathname.split("/").pop().split(".")[0];

loadStylesheet("../assets/css/perfect-scrollbar.css");
loadJS("../assets/js/perfect-scrollbar.js", true);

if (page != "sign-in" && page != "sign-up") {
  loadJS("../assets/js/fixed-plugin.js", true);
  loadJS("../assets/js/sidenav-burger.js", true);
  loadJS("../assets/js/dropdown.js", true);
  loadJS("https://buttons.github.io/buttons.js", true);
  if (page != "profile") {
    loadJS("../assets/js/navbar-sticky.js", true);
  } else {
    loadJS("../assets/js/nav-pills.js", true);
  }
  if (page != "tables") {
    loadJS("../assets/js/tooltips.js", true);
    loadStylesheet("../assets/css/tooltips.css");
  }
} else {
  loadJS("../assets/js/navbar-collapse.js", true);
}

if (page == "dashboard" || page == "rtl") {
  loadJS("../assets/js/chart-1.js", true);
  loadJS("../assets/js/chart-2.js", true);
}

function loadJS(FILE_URL, async) {
  let dynamicScript = document.createElement("script");

  dynamicScript.setAttribute("src", FILE_URL);
  dynamicScript.setAttribute("type", "text/javascript");
  dynamicScript.setAttribute("async", async);

  document.head.appendChild(dynamicScript);
}

function loadStylesheet(FILE_URL) {
  let dynamicStylesheet = document.createElement("link");

  dynamicStylesheet.setAttribute("href", FILE_URL);
  dynamicStylesheet.setAttribute("type", "text/css");
  dynamicStylesheet.setAttribute("rel", "stylesheet");

  document.head.appendChild(dynamicStylesheet);
}
