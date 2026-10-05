const toggle = document.querySelector("#menuToggle");
const links = document.querySelector("#navLinks");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  });

  links.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menú");
    });
  });
}
