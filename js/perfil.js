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
