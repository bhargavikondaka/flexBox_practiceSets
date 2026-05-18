# Move Messenger — Responsive Landing Page

A clean, responsive landing page for **Move Messenger**, built with HTML and CSS. The layout adapts from a single-column mobile view to a side-by-side desktop layout using media queries.

---

## 📁 Project Structure

```
project/
├── index.html       # Main HTML file
├── style.css        # Stylesheet (or embedded in HTML)
└── README.md        # Project documentation
```

---

## 🚀 Features

- **Responsive design** — stacks vertically on mobile, switches to a horizontal row on screens ≥ 768px
- **Google Fonts** — uses the Roboto font family via CDN
- **Call-to-action button** — styled "View more" button in brand yellow (`#f1b80b`)
- **Lightweight** — pure HTML & CSS, no JavaScript or frameworks required

---

## 🖥️ Preview

| Mobile (< 768px) | Desktop (≥ 768px) |
|---|---|
| Image on top, text below | Image on right, text on left |
| Single column layout | Side-by-side row layout |

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling, Flexbox layout, media queries |
| Google Fonts | Typography — Roboto and other font families |

---

## 📐 Layout Breakdown

### Mobile (default)
- `.bg-container` uses `flex-direction: column`
- Image and text stack vertically, centred

### Desktop (`min-width: 768px`)
- `.bg-container` switches to `flex-direction: row`
- Image moves to the **right** (`order: 1`) using CSS order property
- Text description appears on the **left**

---

## 🎨 Design Tokens

| Property | Value |
|---|---|
| Background colour | `#fef7e7` (warm cream) |
| Heading colour | `#333333` (dark grey) |
| Description colour | `#858a8f` (muted grey) |
| Button colour | `#f1b80b` (brand yellow) |
| Button size | `150px × 50px`, `border-radius: 20px` |
| Heading font size | `28px`, bold |
| Description font size | `20px` |

---

## 📦 How to Run

1. **Clone or download** the project files
2. Open `index.html` in any modern browser
3. Resize the browser window to see the responsive layout in action

```bash
# Or serve locally with VS Code Live Server / any static server
npx serve .
```

---

## 🖼️ Image Source

The messenger illustration is loaded from:
```
[https://assets.ccbp.in/frontend/intermediate-rwd/move-messenger-img.png](https://png.pngtree.com/png-clipart/20230913/original/pngtree-assistant-clipart-cartoon-character-female-cartoon-girl-at-the-home-office-png-image_11067774.png
```
Replace this URL with a local asset if deploying independently.

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `< 768px` | Single column (mobile) |
| `≥ 768px` | Two column row (tablet & desktop) |

---

## ✅ Browser Compatibility

- Google Chrome ✅
- Mozilla Firefox ✅
- Microsoft Edge ✅
- Safari ✅

---

## 📄 License

This project is open source and free to use for learning and personal projects.
