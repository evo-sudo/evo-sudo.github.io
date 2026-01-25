const terminalInput = document.getElementById("terminalInput");
const terminalScreen = document.getElementById("terminal-screen");
const portfolio = document.getElementById("portfolio");
const terminalBody = document.getElementById("terminalBody");

if (terminalInput && terminalScreen && portfolio && terminalBody) {
  terminalInput.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;

    const command = terminalInput.value.trim().toLowerCase();

    if (command === "resume.exe") {
      terminalBody.insertAdjacentHTML("beforeend", "<p>Launching resume.exe...</p>");
      terminalScreen.classList.add("fade-out");

      setTimeout(() => {
        terminalScreen.style.display = "none";
        portfolio.classList.remove("hidden");
        portfolio.classList.add("fade-in");

        // optional: jump to main content after reveal
        document.getElementById("main")?.focus();
      }, 800);

    } else if (command === "help") {
      terminalBody.insertAdjacentHTML(
        "beforeend",
        "<p>Available commands:</p><p>- resume.exe</p><p>- help</p>"
      );

    } else {
      terminalBody.insertAdjacentHTML(
        "beforeend",
        `<p>'${command}' is not recognized as a command.</p>`
      );
    }

    terminalInput.value = "";
    terminalBody.scrollTop = terminalBody.scrollHeight;
  });
}



// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when clicking a link (mobile)
  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Dark mode (saved to localStorage)
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") document.body.classList.add("dark");

if (themeToggle) {
  const setIcon = () => {
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  };
  setIcon();

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
    setIcon();
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Fake contact form confirmation (no backend)
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (contactForm && formNote) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formNote.textContent =
      "✅ Message captured (demo). To make this real, you’d connect a backend or form service.";
    contactForm.reset();
  });
}
