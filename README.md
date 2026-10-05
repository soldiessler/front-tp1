# TP1 IFTS 29 - Grupo 34

Sitio web grupal desarrollado para el Trabajo Práctico Grupal 1 de Desarrollo de Sistemas Web / Front End.

## Descripción

El proyecto presenta una portada grupal, perfiles individuales, navegación interna y una bitácora del proceso. La estética toma como referencia una dirección editorial, cálida y experimental, adaptada a los requisitos técnicos de la consigna.

## Integrantes

- Laclau Paula — [GitHub](https://github.com/laclaupau)
- Mallqui Valdez Wilmer Ediñho — [GitHub](https://github.com/wemvaldez1122)
- Peralta Diessler Maria Sol — [GitHub](https://github.com/soldiessler)


## Tecnologías

- HTML5 semántico
- CSS3
- Flexbox
- CSS Grid
- JavaScript vanilla
- Google Fonts: Manrope + Space Mono
- Git / GitHub
- Vercel

## Estructura

```text
/
├── index.html
├── perfil-integrante.html
├── bitacora.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   ├── menu.js
│   ├── portada.js
│   └── perfil.js
└── img/
```

## Guía visual

### Paleta

| Token | Hex | Uso |
|---|---|---|
| Cream | `#f8f0e5` | Fondos secundarios |
| Cream Light | `#fffaf3` | Fondo principal |
| Terracotta | `#c85c42` | Acentos y enlaces |
| Terracotta Dark | `#9f402d` | Contraste |
| Brown | `#34251f` | Texto principal |
| Brown Soft | `#69564d` | Texto secundario |
| Peach | `#f2c5ad` | Tarjetas y destacados |

### Tipografía

- Manrope: cuerpo, títulos y navegación.
- Space Mono: etiquetas, números y elementos técnicos.

## JavaScript

### Portada — `js/portada.js`

Se utiliza `IntersectionObserver` para revelar progresivamente las tarjetas cuando entran en el viewport.

### Perfil — `js/perfil.js`

1. Pestañas dinámicas para películas, discos y sección personal.
2. Barras de habilidades animadas al entrar en pantalla.
3. Validación básica del formulario y generación de un enlace `mailto:`.

### Menú — `js/menu.js`

Menú responsive para pantallas pequeñas, con actualización de `aria-expanded`.

## Responsive

Se contemplan los breakpoints pedidos:

- 400 px: ajustes para celulares pequeños.
- 900 px: navegación móvil y cambio a una columna.
- 1200 px: ajuste de espaciado y composición de escritorio.

## Bitácora

La página `bitacora.html` registra el proceso del proyecto.

## Publicación

- URL de Vercel: https://ifts-front-g34-tp1.vercel.app/
- Repositorio: https://github.com/soldiessler/front-tp1

## Uso de IA

Utilizamos ChatGPT para redactar una base para la documentación, misma que fue revisada manualmente y adaptada por el equipo antes de incorporarl al repositorio.
