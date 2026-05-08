/**
 * Shared service registry + slug helpers for mega menu links and Service Details page.
 */
(function () {
  function slugify(text) {
    return String(text || "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function slugToTitle(slug) {
    if (!slug) return "Service";
    return slug
      .split("-")
      .filter(Boolean)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }

  /** Default stats shown when a service has no custom badges */
  const DEFAULT_BADGES = [
    { stat: "100K+", label: "Pages Optimised" },
    { stat: "50+", label: "Industries Served" },
    { stat: "Meta", label: "Business Partner" },
  ];

  /** Rich entries: keyed by slug from slugify(service name) */
  const SERVICE_REGISTRY = {
    "web-design-services": {
      title: "Website Design",
      categoryLabel: "Web Design Services",
      description:
        "W3Era is a leading web design company serving businesses across the globe. We modernise your digital presence with conversion-focused layouts, fast performance, and brand-aligned UI—so your website earns trust and drives measurable growth.",
      badges: DEFAULT_BADGES,
    },
    "wordpress-development": {
      title: "WordPress Development",
      categoryLabel: "Web Design Services",
      description:
        "Custom WordPress builds, theme optimisation, and plugin integration engineered for speed, security, and SEO—maintainable code your team can scale with confidence.",
      badges: DEFAULT_BADGES,
    },
    "seo-packages": {
      title: "SEO Packages",
      categoryLabel: "SEO Services",
      description:
        "Structured SEO programmes—from technical foundations to content and authority building—aligned to your market and growth targets.",
      badges: DEFAULT_BADGES,
    },
    "ppc-services": {
      title: "PPC Services",
      categoryLabel: "Paid Marketing",
      description:
        "Paid search and display campaigns built around ROI: structured accounts, intent-led keywords, and continuous testing for scalable acquisition.",
      badges: DEFAULT_BADGES,
    },
    "seo-audit-tool": {
      title: "SEO Audit Tool",
      categoryLabel: "SEO Tools",
      description:
        "Automated checks for crawlability, indexation, on-page signals, and technical health—with actionable fixes prioritised by impact.",
      badges: DEFAULT_BADGES,
    },
  };

  function getService(slug) {
    const key = slugify(slug || "");
    const row = SERVICE_REGISTRY[key];
    const titleFromSlug = slugToTitle(key);

    if (row) {
      return {
        slug: key,
        title: row.title,
        categoryLabel: row.categoryLabel || "Services",
        description: row.description,
        badges: row.badges || DEFAULT_BADGES,
      };
    }

    return {
      slug: key || "service",
      title: titleFromSlug,
      categoryLabel: "Services",
      description: `Explore ${titleFromSlug} with ServiceStack—strategy-led execution, transparent reporting, and measurable outcomes tailored to your goals.`,
      badges: DEFAULT_BADGES,
    };
  }

  function serviceDetailUrl(labelOrSlug) {
    const slug = slugify(labelOrSlug);
    return `service-details.html?service=${encodeURIComponent(slug)}`;
  }

  window.servicestackSlugify = slugify;
  window.servicestackGetService = getService;
  window.servicestackServiceDetailUrl = serviceDetailUrl;
})();
