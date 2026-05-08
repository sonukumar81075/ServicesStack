(function () {
  function renderBadges(container, badges) {
    if (!container || !Array.isArray(badges)) return;
    container.innerHTML = badges
      .map(
        (b) => `
      <div class="relative flex min-h-[118px] w-[118px] flex-col items-center justify-center rounded-full border border-black/10 bg-white p-3 text-center shadow-[0_14px_44px_rgba(0,0,0,0.35)] ring-1 ring-[#eab308]/25 sm:min-h-[148px] sm:w-[148px] md:min-h-[155px] md:w-[155px]">
        <span class="absolute -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#eab308] text-black shadow-md ring-4 ring-black">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7"/></svg>
        </span>
        <span class="text-lg font-extrabold text-[#eab308] sm:text-xl md:text-2xl">${escapeHtml(b.stat)}</span>
        <span class="mt-1 max-w-[12ch] text-[10px] font-semibold leading-tight text-neutral-800 sm:text-[11px] md:text-xs">${escapeHtml(b.label)}</span>
      </div>`
      )
      .join("");
  }

  function escapeHtml(s) {
    const d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function init() {
    const params = new URLSearchParams(window.location.search);
    const slugParam = params.get("service") || "";
    const getSvc = window.servicestackGetService;
    if (typeof getSvc !== "function") return;

    const data = getSvc(slugParam);

    document.title = `${data.title} | ServiceStack`;

    const h1 = document.getElementById("serviceDetailTitle");
    const desc = document.getElementById("serviceDetailDesc");
    const crumb = document.getElementById("serviceBreadcrumbCategory");
    const overview = document.getElementById("serviceOverviewText");
    const badgesEl = document.getElementById("serviceBadges");

    if (h1) h1.textContent = data.title;
    if (desc) desc.textContent = data.description;
    if (crumb) crumb.textContent = data.categoryLabel;
    if (overview) overview.textContent = data.description;
    renderBadges(badgesEl, data.badges);
  }

  function initHubCard() {
    const hubCard = document.getElementById("hubCard");
    const hubReveal = document.getElementById("hubReveal");
    if (!hubCard || !hubReveal) return;

    const open = () => {
      hubReveal.style.transform = "translateY(0)";
      hubCard.classList.add("is-revealed");
    };
    const close = () => {
      hubReveal.style.transform = "translateY(100%)";
      hubCard.classList.remove("is-revealed");
    };

    hubCard.addEventListener("mouseenter", open);
    hubCard.addEventListener("mouseleave", close);

    hubCard.addEventListener("click", () => {
      if (hubCard.classList.contains("is-revealed")) close();
      else open();
    });
  }

  function initNewsletterForm() {
    const form = document.getElementById("newsletterForm");
    if (!form) return;
    const btn = form.querySelector('button[type="submit"]');
    const label = btn ? btn.querySelector("[data-newsletter-label]") : null;
    if (!btn || !label) return;

    const SUCCESS_HTML =
      '<svg class="mr-1 inline h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg> Subscribed!';

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (btn.dataset.busy === "true") return;
      btn.dataset.busy = "true";
      btn.style.opacity = "0.85";
      btn.style.cursor = "not-allowed";
      label.textContent = "Subscribing...";

      window.setTimeout(() => {
        label.innerHTML = SUCCESS_HTML;
        try {
          form.reset();
        } catch (err) {}
        window.setTimeout(() => {
          btn.style.opacity = "";
          btn.style.cursor = "";
          btn.dataset.busy = "false";
          label.textContent = "Subscribe Now";
        }, 2400);
      }, 1100);
    });
  }

  function bootstrap() {
    init();
    initHubCard();
    initNewsletterForm();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }
})();
