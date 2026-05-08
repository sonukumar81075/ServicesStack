(() => {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMegaBtn = document.getElementById("mobileMegaBtn");
  const mobileMegaPanel = document.getElementById("mobileMegaPanel");
  const mobileMegaIcon = document.getElementById("mobileMegaIcon");
  const mobileSearchBtn = document.getElementById("mobileSearchBtn");
  const mobileSearchPanel = document.getElementById("mobileSearchPanel");
  const mobileSearchIcon = document.getElementById("mobileSearchIcon");
  const mobilePackagesBtn = document.getElementById("mobilePackagesBtn");
  const mobilePackagesPanel = document.getElementById("mobilePackagesPanel");
  const mobilePackagesIcon = document.getElementById("mobilePackagesIcon");
  const mobileToolsBtn = document.getElementById("mobileToolsBtn");
  const mobileToolsPanel = document.getElementById("mobileToolsPanel");
  const mobileToolsIcon = document.getElementById("mobileToolsIcon");
  const megaTriggers = document.querySelectorAll("[data-mega-trigger]");
  const navLinks = document.querySelectorAll(".nav-link");
  const desktopMegaMenu = document.getElementById("desktopMegaMenu");
  const desktopMegaContent = document.getElementById("desktopMegaContent");
  let megaCloseTimer = null;
  let activeMegaKey = null;
  const megaCol1Title = document.getElementById("megaCol1Title");
  const megaCol2Title = document.getElementById("megaCol2Title");
  const megaCol3Title = document.getElementById("megaCol3Title");
  const megaCol4Title = document.getElementById("megaCol4Title");
  const megaCol1Links = document.getElementById("megaCol1Links");
  const megaCol2Links = document.getElementById("megaCol2Links");
  const megaCol3Links = document.getElementById("megaCol3Links");
  const megaCol4Button = document.getElementById("megaCol4Button");

  const megaMenuContent = {
    searchMarketing: {
      col1Title: "SEO Services",
      col1Links: ["SEO Packages", "Ecommerce SEO Packages", "Local SEO Packages", "Guest Posting Services", "Link Building Packages"],
      col2Title: "Paid Marketing",
      col2Links: ["PPC Services", "Google Ads Management", "Conversion Optimization", "Display Advertising", "Retargeting Campaigns"],
      col3Title: "Insights & Growth",
      col3Links: ["SEO Case Studies", "Keyword Research Reports", "Competitor Analysis", "Technical SEO Audit", "Monthly Performance Reports"],
      col4Title: "Need Expert Help?",
      col4ButtonText: "Book SEO Call"
    },
    semSolutions: {
      col1Title: "Web Development Services",
      col1Links: ["Web Development Services", "Magento Web Development", "Laravel Development Services", "PHP Development Services", "ASP Dot Net Development Services"],
      col2Title: "Web Design Services",
      col2Links: ["Web Design Services", "WordPress Development", "Logo Design", "Mobile Responsive Website", "Website Speed Optimization"],
      col3Title: "Learn About Us",
      col3Links: ["SEO Case Studies", "Client Testimonials", "Read Our Super Blogs", "Website Migration Guide", "Website Migration Plugins"],
      col4Title: "For More Information",
      col4ButtonText: "Contact Us"
    },
    ourPackages: {
      col1Title: "SEO Packages",
      col1Links: ["Starter SEO Package", "Growth SEO Package", "Enterprise SEO Package", "Local SEO Package", "Ecommerce SEO Package"],
      col2Title: "Development Packages",
      col2Links: ["Basic Website Package", "Business Website Package", "Ecommerce Website Package", "Custom Web App Package", "Maintenance Package"],
      col3Title: "Marketing Packages",
      col3Links: ["PPC Starter Package", "Social Media Package", "Content Marketing Package", "ORM Package", "Full SEM Bundle"],
      col4Title: "Need Custom Quote?",
      col4ButtonText: "Get Proposal"
    },
    tools: {
      col1Title: "SEO Tools",
      col1Links: ["SEO Audit Tool", "Keyword Finder", "Rank Tracker", "Backlink Checker", "Site Health Checker"],
      col2Title: "Content Tools",
      col2Links: ["Meta Tag Generator", "Schema Markup Helper", "Title Optimizer", "Content Brief Tool", "Blog Topic Finder"],
      col3Title: "Analysis Tools",
      col3Links: ["Competitor Gap Tool", "Traffic Estimator", "Page Speed Checker", "SERP Preview Tool", "Broken Link Scanner"],
      col4Title: "Try Our Tools",
      col4ButtonText: "Open Tools"
    }
  };

  function renderMegaLinks(container, items) {
    if (!container) return;
    container.innerHTML = items
      .map((text) => `<a href="#" class="block hover:text-[#e71348]">${text}</a>`)
      .join("");
  }

  function setMegaContent(key) {
    const data = megaMenuContent[key] || megaMenuContent.semSolutions;
    if (megaCol1Title) megaCol1Title.textContent = data.col1Title;
    if (megaCol2Title) megaCol2Title.textContent = data.col2Title;
    if (megaCol3Title) megaCol3Title.textContent = data.col3Title;
    if (megaCol4Title) megaCol4Title.textContent = data.col4Title;
    if (megaCol4Button) megaCol4Button.textContent = data.col4ButtonText;
    renderMegaLinks(megaCol1Links, data.col1Links);
    renderMegaLinks(megaCol2Links, data.col2Links);
    renderMegaLinks(megaCol3Links, data.col3Links);
  }

  function animateMegaContentSwitch(key) {
    const nextKey = key || "semSolutions";
    if (!desktopMegaMenu || !desktopMegaContent) {
      setMegaContent(nextKey);
      activeMegaKey = nextKey;
      return;
    }

    const isMenuOpen = desktopMegaMenu.classList.contains("opacity-100");
    if (!isMenuOpen || activeMegaKey === null) {
      setMegaContent(nextKey);
      activeMegaKey = nextKey;
      return;
    }

    if (activeMegaKey === nextKey) return;

    desktopMegaContent.classList.remove("opacity-100", "translate-y-0");
    desktopMegaContent.classList.add("opacity-0", "translate-y-1");

    window.setTimeout(() => {
      setMegaContent(nextKey);
      activeMegaKey = nextKey;
      desktopMegaContent.classList.remove("opacity-0", "translate-y-1");
      desktopMegaContent.classList.add("opacity-100", "translate-y-0");
    }, 120);
  }

  function openDesktopMega() {
    if (!desktopMegaMenu) return;
    if (megaCloseTimer) {
      window.clearTimeout(megaCloseTimer);
      megaCloseTimer = null;
    }
    desktopMegaMenu.classList.remove("invisible", "opacity-0", "translate-y-2", "pointer-events-none");
    desktopMegaMenu.classList.add("visible", "opacity-100", "translate-y-0", "pointer-events-auto");
  }

  function closeDesktopMega() {
    if (!desktopMegaMenu) return;
    desktopMegaMenu.classList.add("invisible", "opacity-0", "translate-y-2", "pointer-events-none");
    desktopMegaMenu.classList.remove("visible", "opacity-100", "translate-y-0", "pointer-events-auto");
  }

  function scheduleMegaClose() {
    if (megaCloseTimer) window.clearTimeout(megaCloseTimer);
    megaCloseTimer = window.setTimeout(() => {
      if (!desktopMegaMenu?.matches(":hover")) {
        closeDesktopMega();
        clearActiveNav();
      }
    }, 120);
  }

  function clearActiveNav() {
    navLinks.forEach((link) => {
      link.style.opacity = "";
    });
  }

  function setActiveNav(trigger) {
    const link = trigger.querySelector(".nav-link");
    if (!link) return;
    clearActiveNav();
    link.style.opacity = "0.8";
  }

  if (megaTriggers.length && desktopMegaMenu) {
    megaTriggers.forEach((trigger) => {
      trigger.addEventListener("mouseenter", () => {
        animateMegaContentSwitch(trigger.dataset.megaKey);
        setActiveNav(trigger);
        openDesktopMega();
      });
      trigger.addEventListener("mouseleave", scheduleMegaClose);
    });

    desktopMegaMenu.addEventListener("mouseenter", openDesktopMega);
    desktopMegaMenu.addEventListener("mouseleave", scheduleMegaClose);
  }

  menuBtn?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("hidden");
  });

  mobileMegaBtn?.addEventListener("click", () => {
    mobileMegaPanel?.classList.toggle("hidden");
    mobileMegaIcon?.classList.toggle("rotate-180");
  });

  mobileSearchBtn?.addEventListener("click", () => {
    mobileSearchPanel?.classList.toggle("hidden");
    mobileSearchIcon?.classList.toggle("rotate-180");
  });

  mobilePackagesBtn?.addEventListener("click", () => {
    mobilePackagesPanel?.classList.toggle("hidden");
    mobilePackagesIcon?.classList.toggle("rotate-180");
  });

  mobileToolsBtn?.addEventListener("click", () => {
    mobileToolsPanel?.classList.toggle("hidden");
    mobileToolsIcon?.classList.toggle("rotate-180");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1024) {
      closeDesktopMega();
      clearActiveNav();
      activeMegaKey = null;
    }
  });

  const topInfoBar = document.getElementById("topInfoBar");
  if (topInfoBar) {
    const syncTopInfoBar = () => {
      const atTop = window.scrollY <= 8;
      topInfoBar.classList.toggle("is-collapsed", !atTop);
    };

    syncTopInfoBar();
    window.addEventListener("scroll", syncTopInfoBar, { passive: true });
  }

  const footerYear = document.getElementById("footerYear");
  if (footerYear) {
    footerYear.textContent = String(new Date().getFullYear());
  }

  const backToTop = document.getElementById("backToTop");
  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const track = document.getElementById("slider-track");
  const bgImages = document.querySelectorAll(".bg-img");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  if (track && bgImages.length && nextBtn && prevBtn) {
    let currentIndex = 0;
    const totalSlides = bgImages.length;
    let slideInterval;

    function updateSlider() {
      const offset = currentIndex * -33.333;
      track.style.transform = `translateX(${offset}%)`;

      bgImages.forEach((img, index) => {
        img.classList.remove("ken-burns");
        if (index === currentIndex) {
          void img.offsetWidth;
          img.classList.add("ken-burns");
        }
      });
    }

    function startAutoSlide() {
      slideInterval = window.setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
      }, 5000);
    }

    function resetTimer() {
      window.clearInterval(slideInterval);
      startAutoSlide();
    }

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
      resetTimer();
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlider();
      resetTimer();
    });

    window.addEventListener("load", () => {
      document.body.classList.add("is-loaded");
      updateSlider();
      startAutoSlide();
    });
  }

  /* Project interactions moved from index.html */
const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".header-reveal, .card-wrapper").forEach((el) => observer.observe(el));

    const partnerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          partnerObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".partner-reveal").forEach((el) => partnerObserver.observe(el));
    document.getElementById("partner-header")?.classList.add("animate");
    document.querySelectorAll(".corporate-reload-reveal").forEach((el) => el.classList.add("animate"));
    const heroPlatformTrack = document.getElementById("heroPlatformTrack");
    if (heroPlatformTrack) {
      const heroPlatformBaseCards = heroPlatformTrack.innerHTML;
      heroPlatformTrack.innerHTML = heroPlatformBaseCards + heroPlatformBaseCards + heroPlatformBaseCards;
    }
    const awardsSliderTrack = document.getElementById("awardsSliderTrack");
    if (awardsSliderTrack && !awardsSliderTrack.dataset.cloned) {
      awardsSliderTrack.innerHTML += awardsSliderTrack.innerHTML;
      awardsSliderTrack.dataset.cloned = "true";
    }
    const footerBadgeTrack = document.getElementById("footerBadgeTrack");
    if (footerBadgeTrack && !footerBadgeTrack.dataset.cloned) {
      footerBadgeTrack.innerHTML += footerBadgeTrack.innerHTML;
      footerBadgeTrack.dataset.cloned = "true";
    }

    const heroTypewriter = document.getElementById("heroTypewriter");
    if (heroTypewriter) {
      const heroTypePhrases = ["Software Company.", "IT Solutions Hub.", "Digital Growth Team."];
      let phraseIndex = 0;
      let charIndex = 0;
      let deleting = false;

      const runHeroTypewriter = () => {
        const currentPhrase = heroTypePhrases[phraseIndex];

        if (deleting) {
          charIndex -= 1;
        } else {
          charIndex += 1;
        }

        heroTypewriter.textContent = currentPhrase.slice(0, charIndex);

        let delay = deleting ? 55 : 95;

        if (!deleting && charIndex === currentPhrase.length) {
          delay = 1100;
          deleting = true;
        } else if (deleting && charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % heroTypePhrases.length;
          delay = 260;
        }

        setTimeout(runHeroTypewriter, delay);
      };

      heroTypewriter.textContent = "";
      setTimeout(runHeroTypewriter, 500);
    }

    document.querySelectorAll(".semfaq-trigger").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const parent = trigger.parentElement;
        const isActive = parent.classList.contains("active");

        document.querySelectorAll(".semfaq-item").forEach((item) => {
          item.classList.remove("active");
        });

        if (!isActive) {
          parent.classList.add("active");
        }
      });
    });

    window.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        document.querySelector(".semfaq-item")?.classList.add("active");
      }, 300);
    });

    (() => {
      const semGoalData = [
        {
          title: "Build a strong online presence from scratch.",
          items: ["Website Design & Development", "Technical SEO Setup", "Content Writing & Blogging", "SEO Strategy Planning"],
        },
        {
          title: "Dominate search engines and attract visitors.",
          items: ["Keyword Research", "On-Page Optimization", "Backlink Building", "Competitor Analysis"],
        },
        {
          title: "Convert casual browsers into loyal customers.",
          items: ["PPC Campaign Management", "Landing Page Audit", "Conversion Rate Optimization", "Lead Magnet Creation"],
        },
        {
          title: "Scale your sales with precision marketing.",
          items: ["Google Shopping Ads", "Remarketing Strategies", "E-commerce SEO", "ROI Tracking"],
        },
        {
          title: "Capture the market in your neighborhood.",
          items: ["Google Business Profile", "Local Citations", "Review Management", "Geo-targeted Ads"],
        },
      ];

      const semGoalButtons = Array.from(document.querySelectorAll("[data-sem-goal-tab]"));
      const semGoalTitle = document.getElementById("semGoalContentTitle");
      const semGoalList = document.getElementById("semGoalContentList");
      const semGoalContent = document.getElementById("semGoalTabContent");

      if (!semGoalButtons.length || !semGoalTitle || !semGoalList || !semGoalContent) return;

      const renderSemGoalList = (index) => {
        semGoalList.innerHTML = semGoalData[index].items
          .map(
            (item, i) => `
                <li class="flex items-center gap-4 text-slate-700 font-semibold group cursor-pointer opacity-0" 
                    style="animation: sem-goal-fade-up 0.4s ease forwards ${0.2 + i * 0.1}s">
                    <span class="text-yellow-500 font-bold">→</span> ${item}
                </li>
            `
          )
          .join("");
      };

      const switchSemGoalTab = (index) => {
        semGoalButtons.forEach((btn, i) => btn.classList.toggle("sem-goal-tab-active", i === index));
        semGoalContent.style.opacity = 0;

        setTimeout(() => {
          semGoalTitle.textContent = semGoalData[index].title;
          renderSemGoalList(index);
          semGoalContent.style.opacity = 1;
        }, 200);
      };

      semGoalButtons.forEach((button, index) => {
        button.addEventListener("click", () => switchSemGoalTab(index));
      });

      renderSemGoalList(0);
    })();

    (() => {
      let currentSlide = 0;
      const slides = document.querySelectorAll(".enterprise-slide-item");
      const navButtons = document.querySelectorAll(".enterprise-service-btn");
      const dots = document.querySelectorAll(".enterprise-dot");
      const container = document.getElementById("enterprise-slider-container");
      const prevButton = document.getElementById("enterprise-prev");
      const nextButton = document.getElementById("enterprise-next");
      const duration = 3000;
      let slideInterval;

      if (!slides.length || !container || !prevButton || !nextButton) return;

      const updateSlider = () => {
        slides.forEach((slide, i) => {
          const active = i === currentSlide;
          slide.classList.toggle("active", active);
          navButtons[i]?.classList.toggle("active", active);
          dots[i]?.classList.toggle("active", active);

          if (active) {
            const reveals = slide.querySelectorAll(".enterprise-reveal");
            reveals.forEach((el) => {
              el.style.animation = "none";
              el.offsetHeight;
              el.style.animation = null;
            });
          }
        });
      };

      const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
      };

      const prevSlide = () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
      };

      const goToSlide = (index) => {
        currentSlide = index;
        updateSlider();
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, duration);
      };

      navButtons.forEach((button, index) => {
        button.addEventListener("click", () => goToSlide(index));
      });

      dots.forEach((dot, index) => {
        dot.addEventListener("click", () => goToSlide(index));
      });

      prevButton.addEventListener("click", () => {
        prevSlide();
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, duration);
      });

      nextButton.addEventListener("click", () => {
        nextSlide();
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, duration);
      });

      updateSlider();
      slideInterval = setInterval(nextSlide, duration);

      container.addEventListener("mouseenter", () => {
        clearInterval(slideInterval);
      });

      container.addEventListener("mouseleave", () => {
        slideInterval = setInterval(nextSlide, duration);
      });
    })();

})();

