# Nexity Studio Portfolio

![Preview](preview.jpg) <!-- Optional preview image -->

A futuristic, minimal portfolio website for Nexity Studio featuring smooth animations and a dark theme with neon accents.

## Features

- Dark mode with glowing accents
- Scroll-triggered animations
- Apple-inspired smooth transitions
- Responsive design
- GSAP-powered animations
- Clean, minimalist layout

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nexity-studio.git
```

2. Open in browser:
```bash
cd nexity-studio
open index.html  # Or just double-click the file
```

## Troubleshooting

If CSS isn't loading:

1. Verify files are in same directory:
   - `index.html`
   - `style.css` 
   - `app.js`

2. Check browser console for errors (F12 > Console)

3. Ensure correct path in HTML:
```html
<link rel="stylesheet" href="style.css"> <!-- Not ./style.css or /style.css -->
```

## Customization

Edit these variables in `style.css`:
```css
:root {
    --bg-dark: #0a0a0a;
    --accent: #00f0ff; /* Change accent color */
    --accent-secondary: #7b2dff;
}
```

## Credits

- Font: [Syne](https://fonts.google.com/specimen/Syne)
- Animation: [GSAP](https://greensock.com/gsap/)