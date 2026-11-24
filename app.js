(function () {
  "use strict";

  function still() {
    return !!(
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  var pearls = 0;
  var pearlEl = document.getElementById("pearls");
  var hud = document.querySelector(".hud");

  function addPearls(n) {
    pearls += n;
    pearlEl.textContent = String(pearls);
    hud.classList.remove("pop");
    if (!still()) {
      void hud.offsetWidth;
      hud.classList.add("pop");
    }
  }

  var lines = {
    grandma: [
      "Come sit. Order a drink. We'll fix your tones between customers.",
      "You understand every word. Now answer me — rising or falling?",
      "Five minutes a day in the shop beats a year of silent understanding.",
    ],
    learner: [
      "I grew up hearing Taiwanese. Speaking still feels scary.",
      "Yesterday I unlocked Auntie's snack chat. Still locked for you!",
      "Tone 2 is my nemesis. Grandma keeps making me sigh it out.",
    ],
    auntie: ["Come back after a few chapters — Auntie Lin's lane isn't open yet."],
    driver: ["Uncle Chen drives the delivery scooter. His stories unlock later."],
  };
  var names = {
    grandma: "Bobamama",
    learner: "A-Ming",
    auntie: "Auntie Lin",
    driver: "Uncle Chen",
  };
  var idx = {};
  var who = document.getElementById("who");
  var say = document.getElementById("say");
  var bubble = document.getElementById("bubble");

  function speak(key) {
    var list = lines[key] || [];
    var i = idx[key] || 0;
    idx[key] = (i + 1) % list.length;
    who.textContent = names[key] || key;
    say.textContent = list[i] || "";
    bubble.classList.remove("swap");
    if (!still()) {
      void bubble.offsetWidth;
      bubble.classList.add("swap");
    }
  }

  document.querySelectorAll(".cast-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var key = btn.getAttribute("data-who");
      var open = btn.getAttribute("data-open") === "true";
      if (!open) {
        speak(key);
        return;
      }
      speak(key);
      addPearls(1);
    });
  });

  var paths = {
    flat: "M70,46 C130,44 220,48 300,50",
    rise: "M70,134 C140,132 220,92 300,62",
    fall: "M70,50 C150,56 220,128 300,154",
  };
  var res = {
    flat: [
      "Close, but your voice stayed up.",
      'Tone 1 stays high and flat. "má" starts high and then slides down. Let it fall.',
      "bad",
    ],
    rise: [
      "Tone 5 → try falling.",
      'Your voice went up, like a question. "má" starts high and slides down, like a sigh.',
      "bad",
    ],
    fall: [
      "Perfect fall. That's tone 2!",
      "That's how you say grandma. +3 pearls for you.",
      "good",
    ],
  };
  var tp = document.getElementById("try-path");
  var verdict = document.getElementById("verdict");
  var chips = document.querySelectorAll(".chip");

  chips.forEach(function (c) {
    c.addEventListener("click", function () {
      var k = c.getAttribute("data-try");
      chips.forEach(function (x) {
        x.setAttribute("aria-pressed", x === c ? "true" : "false");
      });
      tp.setAttribute("d", paths[k]);
      tp.style.opacity = "1";
      tp.style.strokeDasharray = "1";
      tp.style.strokeDashoffset = "0";
      tp.style.animation = "none";
      if (!still()) {
        void tp.getBoundingClientRect();
        tp.style.animation = "draw .9s ease-out both";
      }
      document.getElementById("v-title").textContent = res[k][0];
      document.getElementById("v-body").textContent = res[k][1];
      verdict.setAttribute("data-state", res[k][2]);
      verdict.classList.remove("anim");
      if (!still()) {
        void verdict.offsetWidth;
        verdict.classList.add("anim");
      }
      if (k === "fall") addPearls(3);
    });
  });

  var form = document.getElementById("signup");
  var thanks = document.getElementById("thanks");
  var email = document.getElementById("email");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!email.value || !email.checkValidity()) {
      thanks.hidden = true;
      email.focus();
      if (email.reportValidity) email.reportValidity();
      return;
    }
    thanks.hidden = false;
    document.getElementById("thanks-msg").textContent =
      "Saved you a seat at the stall! (Prototype: nothing was sent.)";
    addPearls(5);
  });
})();
