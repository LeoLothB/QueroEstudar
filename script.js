const appSidebar = document.querySelector("#app-sidebar");
const sidebarToggles = Array.from(document.querySelectorAll("[data-sidebar-toggle]"));
const mobileToggle = document.querySelector(".sidebar-toggle--mobile");
const sidebarBackdrop = document.querySelector(".sidebar-backdrop");
const mobileViewport = window.matchMedia("(max-width: 700px)");
const sidebarPreferenceKey = "queroestudar.sidebar-collapsed";

if (appSidebar && sidebarToggles.length > 0 && mobileToggle && sidebarBackdrop) {
  if (!mobileViewport.matches && localStorage.getItem(sidebarPreferenceKey) === "true") {
    document.body.classList.add("sidebar-collapsed");
  }
  document.documentElement.classList.remove("sidebar-collapsed");

  const syncToggleState = () => {
    const expanded = mobileViewport.matches
      ? document.body.classList.contains("sidebar-open")
      : !document.body.classList.contains("sidebar-collapsed");
    const label = mobileViewport.matches
      ? (expanded ? "Fechar menu" : "Abrir menu")
      : (expanded ? "Recolher menu" : "Expandir menu");

    sidebarToggles.forEach((toggle) => {
      toggle.setAttribute("aria-expanded", String(expanded));
      toggle.setAttribute("aria-label", label);
      toggle.setAttribute("title", label);
    });
  };

  const closeMobileMenu = (restoreFocus) => {
    document.body.classList.remove("sidebar-open");
    syncToggleState();

    if (restoreFocus) {
      mobileToggle.focus();
    }
  };

  sidebarToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      if (mobileViewport.matches) {
        const wasOpen = document.body.classList.contains("sidebar-open");
        document.body.classList.toggle("sidebar-open");

        if (wasOpen && toggle.classList.contains("sidebar-toggle--sidebar")) {
          mobileToggle.focus();
        }
      } else {
        document.body.classList.toggle("sidebar-collapsed");
        localStorage.setItem(
          sidebarPreferenceKey,
          String(document.body.classList.contains("sidebar-collapsed"))
        );
      }

      syncToggleState();
    });
  });

  sidebarBackdrop.addEventListener("click", () => closeMobileMenu(true));

  appSidebar.querySelectorAll(".app-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileViewport.matches) {
        closeMobileMenu(false);
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.body.classList.contains("sidebar-open")) {
      closeMobileMenu(true);
    }
  });

  mobileViewport.addEventListener("change", () => {
    document.body.classList.remove("sidebar-open", "sidebar-collapsed");

    if (!mobileViewport.matches && localStorage.getItem(sidebarPreferenceKey) === "true") {
      document.body.classList.add("sidebar-collapsed");
    }

    syncToggleState();
  });

  syncToggleState();
}