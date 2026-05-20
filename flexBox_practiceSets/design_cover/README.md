
# Design Section — Responsive Web Page

A responsive design-themed landing page built with **HTML & CSS**. It features a two-section layout — an image panel with a bulb icon and a dark feature card panel — that stacks vertically on mobile and splits side-by-side on desktop.

---

## 📁 Project Structure

```
project/
├── index.html       # Main HTML file
├── index.css        # Stylesheet with media queries
└── README.md        # Project documentation
```

---

## 🚀 Live Preview

| Mobile (< 768px) | Desktop (≥ 768px) |
|---|---|
| Stacked column layout | Side-by-side row layout |
| Upper section: 225px tall | Upper section: 60vh tall, 50% width |
| Heading: light weight (200) | Heading: bold, 25px |
| Full-width bottom section | Bottom section shrinks (`flex-grow: 0`) |

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Flexbox layout, border-radius, media queries |
| Google Fonts | Roboto font via CDN |
| External image CDNs | Bulb, monitor, layers, lightbulb icons |

---

## 🎨 Design Tokens

| Property | Value |
|---|---|
| Upper section background | `design-section-sm-bg.png` (both breakpoints) |
| Bottom section background | `#12022f` (deep dark purple) |
| Bulb image size | `80px × 80px` |
| Heading color | `white` |
| Description heading color | `#12022f` |
| Description text color | `#7b8794` (muted grey) |
| Description heading size | `17px` |
| Description text size | `12px` |
| Feature card background | `#ffffff` |
| Feature card border radius | `2vh` |
| Feature card padding | `7px` |
| Feature image size | `10% × 10%` |
| Font family | `Roboto` |

---

## 📐 Layout Breakdown

### Mobile (default — `< 768px`)
- `.container` — `flex-direction: column` (stacked)
- `.upper-section` — `height: 225px`, column flex, centered content
- `.bottom-section` — `flex-grow: 1`, full width below
- `.heading` — `font-weight: 200` (thin)
- `.feature-container` — `flex-direction: row`, spaced icons and text

### Desktop (`min-width: 768px`)
- `.container` — `flex-direction: row` (side by side)
- `.upper-section` — `width: 50%`, `height: 60vh`, `flex-grow: 3`
- `.bottom-section` — `flex-grow: 0` (fixed size)
- `.heading` — `font-weight: bold`, `font-size: 25px`

---

## 🖼️ Images Used ---(this items also provided in the resource file)

| Image | URL |
|---|---|
| Background (upper) | `https://assets.ccbp.in/frontend/intermediate-rwd/design-section-sm-bg.png` |
| Bulb icon | `https://assets.ccbp.in/frontend/intermediate-rwd/design-section-bulb-img.png` |
| Monitor icon | `https://png.pngtree.com/png-clipart/20231014/original/pngtree-drawing-monitor-view-picture-image_13157198.png` |
| Layers icon | `https://www.svgrepo.com/show/408708/layer-stack-layers.svg` |
| Lightbulb icon | `https://png.pngtree.com/png-clipart/20250608/original/pngtree-happy-lightbulb-cartoon-character-illustration-png-image_21137103.png` |

---

## 🃏 Feature Cards

Three feature rows inside `.features-card-container`, each with:
- An icon image (left)
- A heading + description (right)

| Feature | Icon | Description |
|---|---|---|
| Design | Monitor drawing | UX/UI design explanation |
| Elements | Layers stack | Design elements overview |
| Support | Happy lightbulb | Design for support methodology |

---

## 🔤 Google Fonts Imported

```
Bree Serif, Caveat, Lobster, Monoton, Open Sans,
Playfair Display SC, Playfair Display, Roboto,
Source Sans Pro, Work Sans
```

Active font: **Roboto**

---

## 📦 How to Run

1. Download or clone the project
2. Make sure `index.html` and `index.css` are in the **same folder**
3. Open `index.html` in any modern browser

```bash
# Optional: serve locally
npx serve .
```

4. Resize the window below and above **768px** to see the responsive layout switch

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout Change |
|---|---|
| `< 768px` | Column layout — upper image on top, cards below |
| `≥ 768px` | Row layout — image left (50%), cards right |

---

## ✅ Browser Compatibility

| Browser | Status |
|---|---|
| Google Chrome | ✅ Supported |
| Mozilla Firefox | ✅ Supported |
| Microsoft Edge | ✅ Supported |
| Safari | ✅ Supported |

---

## 📄 License

Free to use for learning and personal projects.
