//Interaccion 1
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });

    panels.forEach(panel => {
      panel.hidden = true;
      panel.classList.remove("active");
    });

    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");

    const panel = document.querySelector(`#panel-${tab.dataset.tab}`);
    panel.hidden = false;
    panel.classList.add("active");
  });
});

//Interaccion 2
const meters = document.querySelectorAll(".meter i");
const meterObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const level = entry.target.dataset.level;
      entry.target.style.width = `${level}%`;
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

meters.forEach(meter => meterObserver.observe(meter));

//Interaccion 3
const form = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();

    const data = new FormData(form);
    const nombre = data.get("nombre");
    const email = data.get("email");
    const mensaje = data.get("mensaje");

    const subject = encodeURIComponent(`Mensaje desde el portfolio — ${nombre}`);
    const body = encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\n\n${mensaje}`);

    formMessage.textContent = "Se abrirá tu cliente de correo para completar el envío.";
    window.location.href = `mailto:REEMPLAZAR@EMAIL.COM?subject=${subject}&body=${body}`;
  });
}


// Interaccion 4 — Match cultural
const matchButton = document.querySelector("#matchButton");
const matchResult = document.querySelector("#matchResult");

if (matchButton && matchResult) {
  const interestCards = document.querySelectorAll(".interest-grid article");

  const interests = Array.from(interestCards)
    .map(card => {
      const title = card.querySelector("h3")?.textContent.trim();
      const category = card.querySelector("p")?.textContent.trim();

      return { title, category };
    })
    .filter(item =>
      item.title &&
      item.category &&
      !item.title.toLowerCase().includes("película") &&
      !item.title.toLowerCase().includes("disco favorito") &&
      !item.category.toLowerCase().includes("género") &&
      !item.category.toLowerCase().includes("album") &&
      !item.category.toLowerCase().includes("álbum")
    );

  let lastMatch = null;

  matchButton.addEventListener("click", () => {
    if (!interests.length) {
      matchResult.textContent =
        "Completá los intereses del perfil para descubrir un match.";
      return;
    }

    let availableInterests = interests.filter(
      interest => interest !== lastMatch
    );

    if (!availableInterests.length) {
      availableInterests = interests;
    }

    const randomIndex = Math.floor(
      Math.random() * availableInterests.length
    );

    const selected = availableInterests[randomIndex];
    lastMatch = selected;

    matchResult.innerHTML = `
      <span class="match-label">TU MATCH</span>
      <strong>${selected.title}</strong>
      <span>${selected.category}</span>
    `;

    matchResult.classList.remove("match-result--visible");

    requestAnimationFrame(() => {
      matchResult.classList.add("match-result--visible");
    });
  });
}