(function () {
  var WA = "https://wa.me/201289541850";
  var root = document.documentElement;
  var stored = localStorage.getItem("seenlead-preview-theme");
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  var theme = stored || (prefersDark ? "dark" : "light");
  root.setAttribute("data-theme", theme);

  var isAr =
    (root.getAttribute("lang") || "").toLowerCase().startsWith("ar");

  function themeLabel(forNext) {
    if (isAr) {
      return forNext === "light"
        ? "التبديل إلى الوضع الفاتح"
        : "التبديل إلى الوضع الداكن";
    }
    return forNext === "light"
      ? "Switch to light theme"
      : "Switch to dark theme";
  }

  function setTheme(next) {
    theme = next;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("seenlead-preview-theme", theme);
    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      btn.setAttribute(
        "aria-label",
        themeLabel(theme === "dark" ? "light" : "dark")
      );
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setTheme(theme === "dark" ? "light" : "dark");
      });
    });
    setTheme(theme);

    var menuBtn = document.querySelector("[data-menu-toggle]");
    var mobileNav = document.querySelector("[data-mobile-nav]");
    if (menuBtn && mobileNav) {
      menuBtn.addEventListener("click", function () {
        mobileNav.classList.toggle("open");
        menuBtn.setAttribute(
          "aria-expanded",
          mobileNav.classList.contains("open") ? "true" : "false"
        );
      });
    }

    document.querySelectorAll('a[href^="https://wa.me"]').forEach(function (a) {
      if (!a.getAttribute("href") || a.getAttribute("href") === "#") {
        a.setAttribute("href", WA);
      }
    });

    var spend = document.querySelector("[data-spend]");
    var spendValue = document.querySelector("[data-spend-value]");
    var yearly = document.querySelector("[data-yearly]");
    var adBar = document.querySelector("[data-ad-bar]");
    if (spend && spendValue) {
      function updateSpend() {
        var n = Number(spend.value);
        if (isAr) {
          spendValue.textContent =
            n.toLocaleString("ar-EG") + " دولار / شهر";
          if (yearly) {
            yearly.textContent =
              "مثال إيجار الإعلانات السنوي: " +
              (n * 12).toLocaleString("ar-EG") +
              " دولار";
          }
        } else {
          spendValue.textContent =
            "$" + n.toLocaleString("en-US") + " / month";
          if (yearly) {
            yearly.textContent =
              "Example annual ad rent: $" + (n * 12).toLocaleString("en-US");
          }
        }
        if (adBar) {
          var pct = Math.max(28, Math.min(92, (n / 8000) * 100));
          adBar.style.width = pct + "%";
        }
      }
      spend.addEventListener("input", updateSpend);
      updateSpend();
    }
  });
})();
