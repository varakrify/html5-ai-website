# Welcome Website

A simple one-page static website built with plain HTML, CSS and JavaScript. It uses no external libraries, frameworks or CDN links.

## File structure

```
welcome-site/
  index.html   Page markup: header, navigation, hero, About, Contact and footer
  style.css    Styling, responsive layout and focus indicators
  script.js    Call-to-action button that scrolls to the Contact section
  README.md    This file
```

## How to run

Open `welcome-site/index.html` in a web browser. No build step, server or installation is needed.

## Browser notes

- Designed for current versions of Chrome, Edge, Firefox and Safari.
- Smooth scrolling is turned off for visitors who prefer reduced motion.
- JavaScript is only used for the call-to-action button. Navigation links work without it.
- Contact details are static placeholders. There is no contact form or backend.

## Requirements covered

- Header with the brand name "Welcome" and Home, About and Contact links (#home, #about, #contact).
- Hero with one H1, a short description and a call-to-action button that scrolls to Contact.
- About and Contact sections with static placeholder details, and a footer reading "© 2026 Welcome. All rights reserved."
- Responsive layout intended for 320px, 768px and 1280px widths, with no horizontal scrolling.
- Keyboard access, skip link, visible focus indicators and a semantic navigation landmark.
- Text colours chosen to meet a 4.5:1 contrast ratio.
- No external dependencies.

## Notes

This site lives in the `welcome-site/` folder of the repository and does not change the existing project files outside it.
