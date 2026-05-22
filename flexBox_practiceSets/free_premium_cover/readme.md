# Social Proof & Freemium Shift — Responsive Web Page

A responsive feature section page built with **HTML & CSS**. It displays two content blocks — Social Proof and Freemium Shift — that stack vertically on mobile and arrange side-by-side on desktop using Flexbox and media queries.

---

### 📁 Project Structure

```
project/
├── index.html       # Main HTML file
├── index.css        # Stylesheet with media queries
└── README.md        # Project documentation
```

---

### 🚀 Live Preview

| Mobile (< 768px) | Desktop (≥ 768px) |
|---|---|
| Column layout — image on top, text below | Row layout — image and text side by side |
| Images: `width: 20vh` | Images: `width: 12vh` |
| Text centered | Text aligned left (`text-align: start`) |
| Full-width horizontal line | Horizontal line `width: 100vh` |
| Second container: column | Second container: row with space-around |
| Image 2: normal order | Image 2: `order: 1` (moves to right) |

---

### 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Flexbox layout, media queries, order property |
| Google Fonts | Roboto font via CDN |
| External image CDNs | Star rating & SHAREit logo images |

---

### 🎨 Design Tokens

| Property | Value |
|---|---|
| Background color | `#0b3b5b` (deep navy blue) |
| Text color | `white` |
| Description color | `#f4f3f3` (off-white) |
| Font family | `Roboto` |
| Image border radius | `17px` |
| Feature container margin | `12px` |
| Desktop heading size | `29px` |
| Desktop container width | `80%` |
| Horizontal line color | `#f4f3f3` |

---

## 📐 Layout Breakdown

### Mobile (default — `< 768px`)
- `.bg-container` — `flex-direction: column`
- `.feature-container` — `flex-direction: column`, centered
- `.second-container` — `flex-direction: column`, centered
- `.desc-container` — `text-align: center`
- `.image` — `width: 20vh`
- `.image2` — `width: 20vh`, normal order
- `.horizontal-line` — `width: 80%`

### Desktop (`min-width: 768px`)
- `.bg-container` — `flex-direction: column`, items centered, `align-items: center`
- `.feature-container` — `flex-direction: row`, `width: 80%`
- `.second-container` — `flex-direction: row`, `justify-content: space-around`, `width: 80%`
- `.desc-container` — `text-align: start`
- `.image` — `width: 12vh`, `margin: 15px`
- `.image2` — `width: 12vh`, `margin: 15px`, `order: 1` (shifts right)
- `.horizontal-line` — `width: 100vh`
- `.heading` — `font-size: 29px`

---

### 🖼️ Images Used

| Section | Image URL |
|---|---|
| Social Proof | `https://thumbs.dreamstime.com/z/vector-illustration-vote-measurement-customer-satisfaction-star-rating-satisfactory-hand-show-class-shows-sign-social-187758511.jpg` |
| Freemium Shift | `https://images.seeklogo.com/logo-png/34/1/shareit-logo-png_seeklogo-347430.png` |

---

## 📄 Content Sections

### 1. Social Proof
- **Image**: Star rating / customer satisfaction illustration
- **Heading**: Social Proof
- **Description**: Explains how customers buy products that improve them

### 2. Freemium Shift
- **Image**: SHAREit logo (used as freemium brand visual)
- **Heading**: Freemium Shift
- **Description**: We provide premium package to customers
- **Note**: Image uses `order: 1` on desktop — moves it to the right of the text

### Divider
- `<hr class="horizontal-line">` separates the two sections
- Mobile: `width: 80%`
- Desktop: `width: 100vh`

---

### 🔤 Google Fonts Imported

```
Bree Serif, Caveat, Lobster, Monoton, Open Sans,
Playfair Display SC, Playfair Display, Roboto,
Source Sans Pro, Work Sans
```

Active font: **Roboto**

---

### 📦 How to Run

1. Download or clone the project
2. Make sure `index.html` and `index.css` are in the **same folder**
3. Open `index.html` in any modern browser

```bash
# Optional: serve locally
npx serve .
```

4. Resize the browser window below and above **768px** to see the responsive layout switch

---

### 💡 Key CSS Techniques Used

| Technique | Where used |
|---|---|
| `flex-direction: column → row` | Layout switch at 768px breakpoint |
| `order: 1` | Moves image2 to right side on desktop |
| `text-align: center → start` | Text alignment switch on desktop |
| `width: 20vh → 12vh` | Image size reduction on desktop |
| `border-radius: 17px` | Rounded corners on images |

---

### 📱 Responsive Breakpoints

| Breakpoint | Layout Change |
|---|---|
| `< 768px` | Stacked column — image above text, centered |
| `≥ 768px` | Side-by-side row — image beside text, left-aligned |

---

### ✅ Browser Compatibility

| Browser | Status |
|---|---|
| Google Chrome | ✅ Supported |
| Mozilla Firefox | ✅ Supported |
| Microsoft Edge | ✅ Supported |
| Safari | ✅ Supported |

---

### 📄 License

> Free to use for learning and personal projects.
