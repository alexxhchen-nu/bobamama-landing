(() => {
  const LANG_LABEL = { en: "ENG", ko: "KR", ja: "JP", tw: "TW", zh: "CN" };
  const STORAGE_KEY = "cns-redeem-lang";

  const els = {
    html: document.documentElement,
    langSelected: document.getElementById("langSelected"),
    langList: document.getElementById("langList"),
    snsList: document.getElementById("snsList"),
    logoTitle: document.getElementById("logoTitle"),
    pageTitle: document.getElementById("pageTitle"),
    managerId: document.getElementById("managerId"),
    couponId: document.getElementById("couponId"),
    findUserTitle: document.getElementById("findUserTitle"),
    findUserInfo1: document.getElementById("findUserInfo1"),
    findUserInfo2: document.getElementById("findUserInfo2"),
    getRewardBtn: document.getElementById("getRewardBtn"),
    cautionsTitle: document.getElementById("cautionsTitle"),
    caution1: document.getElementById("caution1"),
    caution2: document.getElementById("caution2"),
    caution2Sub: document.getElementById("caution2Sub"),
    caution3: document.getElementById("caution3"),
    caution4: document.getElementById("caution4"),
    caution5: document.getElementById("caution5"),
    dim: document.getElementById("dim"),
    popAlert: document.getElementById("popAlert"),
    popText: document.getElementById("popText"),
    popConfirm: document.getElementById("popConfirm"),
    form: document.getElementById("couponForm"),
  };

  let i18n = null;
  let lang = "en";
  let busy = false;

  function setLangOpen(open) {
    els.langSelected.classList.toggle("opened", open);
    els.langSelected.setAttribute("aria-expanded", open ? "true" : "false");
  }

  function showPop(message) {
    els.popText.textContent = message;
    els.dim.classList.remove("hide");
    els.dim.classList.add("show");
    els.popAlert.classList.remove("hide");
    els.popAlert.classList.add("show");
  }

  function hidePop() {
    els.dim.classList.add("hide");
    els.dim.classList.remove("show");
    els.popAlert.classList.add("hide");
    els.popAlert.classList.remove("show");
  }

  function applyLang(next) {
    if (!i18n || !i18n[next]) return;
    lang = next;
    const t = i18n[lang];
    els.html.lang = lang;
    els.langSelected.textContent = LANG_LABEL[lang] || lang.toUpperCase();
    localStorage.setItem(STORAGE_KEY, lang);

    els.logoTitle.setAttribute("aria-label", t.logoTxt);
    els.pageTitle.setAttribute("aria-label", t.titleTxt);
    els.managerId.placeholder = t.inputTxt1;
    els.couponId.placeholder = t.inputTxt2;
    els.getRewardBtn.setAttribute("aria-label", t.btnTxt);
    els.findUserTitle.textContent = t.userNumber;
    els.findUserInfo1.textContent = t.userNumberInfo1;
    els.findUserInfo2.textContent = t.userNumberInfo2;
    els.cautionsTitle.textContent = t.detailTitle;
    els.caution1.textContent = t.detailTxt1;
    els.caution2.replaceChildren(
      document.createTextNode(t.detailTxt2),
      Object.assign(document.createElement("span"), {
        id: "caution2Sub",
        textContent: t.detailTxt2Sub,
      })
    );
    els.caution2Sub = document.getElementById("caution2Sub");
    els.caution3.textContent = t.detailTxt3;
    els.caution4.textContent = t.detailTxt4;
    els.caution5.textContent = t.detailTxt5;
    els.popConfirm.setAttribute("aria-label", t.btnConfirm);

    const icons = t.snsIcons || [];
    const hrefs = t.snsHrefs || [];
    const links = els.snsList.querySelectorAll("a");
    links.forEach((a, i) => {
      if (hrefs[i]) a.href = hrefs[i];
      const img = a.querySelector("img");
      if (img && icons[i]) img.src = icons[i];
    });

    setLangOpen(false);
  }

  function validateAndSubmit(event) {
    event.preventDefault();
    if (busy || !i18n) return;
    const t = i18n[lang];
    const userId = els.managerId.value.trim();
    const code = els.couponId.value.trim().replace(/-/g, "");

    if (!userId) {
      showPop(t.popTxt1);
      return;
    }
    if (!code) {
      showPop(t.popTxt2);
      return;
    }

    // Demo-only: do not call the live redeem API.
    busy = true;
    els.getRewardBtn.classList.add("off");
    window.setTimeout(() => {
      els.getRewardBtn.classList.remove("off");
      busy = false;
      showPop(t.popTxt9);
    }, 600);
  }

  async function init() {
    const res = await fetch("./assets/i18n.json");
    i18n = await res.json();
    const saved = localStorage.getItem(STORAGE_KEY);
    applyLang(saved && i18n[saved] ? saved : "en");

    els.langSelected.addEventListener("click", (e) => {
      e.preventDefault();
      setLangOpen(!els.langSelected.classList.contains("opened"));
    });
    els.langSelected.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setLangOpen(!els.langSelected.classList.contains("opened"));
      }
    });

    els.langList.querySelectorAll("a[data-lang]").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        applyLang(a.dataset.lang);
      });
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".lang-box")) setLangOpen(false);
    });

    els.form.addEventListener("submit", validateAndSubmit);
    els.popConfirm.addEventListener("click", (e) => {
      e.preventDefault();
      hidePop();
    });
    els.popConfirm.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        hidePop();
      }
    });
    els.dim.addEventListener("click", (e) => {
      if (e.target === els.dim) hidePop();
    });
  }

  init().catch((err) => {
    console.error("Failed to load redeem clone", err);
  });
})();
