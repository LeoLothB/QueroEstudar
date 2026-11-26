(() => {
  const isMobile = window.matchMedia("(max-width: 700px)").matches;
  const isCollapsed = localStorage.getItem("queroestudar.sidebar-collapsed") === "true";

  if (!isMobile && isCollapsed) {
    document.documentElement.classList.add("sidebar-collapsed");
  }
})();
