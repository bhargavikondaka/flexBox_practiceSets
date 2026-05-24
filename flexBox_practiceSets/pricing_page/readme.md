# Pricing Plans — Responsive Web Page

A responsive pricing plans page built with **HTML & CSS**. It displays three pricing cards on a dark black background with orange accent colours, each containing an icon, price, description, feature list, and a CTA button.

---

## 📁 Project Structure

```
project/
├── index.html       # Main HTML file
├── index.css        # Custom stylesheet
└── README.md        # Project documentation
```

---

## 🚀 Features

- 💳 **Three pricing cards** — Basic ($10), Pro ($80), Standard ($30)
- 🌑 **Dark theme** — Black background with dark card containers
- 🟠 **Orange accent** — Brand colour `#da551c` for headings and featured button
- 📱 **Responsive layout** — Cards wrap on small screens, full height on `≥ 500px`
- 🖼️ **Icon per card** — Unique image for each plan (house, heart, building)
- ✅ **30-day free trial** badge in the heading description

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Flexbox layout, media queries, border-radius |
| Google Fonts | Roboto font via CDN |
| External PNG CDNs | PNGtree, Flaticon icons per card |

---

## 🎨 Design Tokens

| Property | Value |
|---|---|
| Page background | `#000000` (black) |
| Card background | `#2c353d` (dark slate) |
| Plans heading color | `#da551c` (orange) |
| Description text color | `#e2e8f0` (light grey) |
| Per month text color | `#e2e8f0` |
| Price font size | `29px` |
| Description font size | `12px` |
| Card width | `30%` |
| Card border radius | `2vh` |
| Card padding | `20px` |
| Card margin | `7px` |
| Icon size | `50px × 50px` |
| Button background (default) | `#f8fafc` (white) |
| Button text color (default) | `#2d3748` (dark) |
| Button background (featured) | `#da551c` (orange) |
| Button text color (featured) | `#f8fafc` (white) |
| Button height | `5vh` |
| Button border radius | `2vh` |
| Font family | `Roboto` |

---

## 💳 Pricing Cards

| Plan | Price | Icon Source | Button Style |
|---|---|---|---|
| Basic | `$10.00/mo` | PNGtree cute cartoon house | Default (white) |
| Pro ⭐ | `$80.00/mo` | PNGtree orange heart shape | Featured (orange) |
| Standard | `$30.00/mo` | Flaticon building icon | Default (white) |

### Plan Features

**Basic — $10.00/mo**
- 2 Crore Xeon CPU
- 1 GB RAM
- 32 GB SSD

**Pro — $80.00/mo** *(Featured)*
- 2 Crore Xeon CPU
- 8 GB RAM
- 300 GB SSD
- Unlimited Transfer

**Standard — $30.00/mo**
- 4 Crore Xeon CPU
- 2 GB RAM
- 100 GB SSD

---

## 🖼️ Images Used

| Card | Image URL |
|---|---|
| Basic (House) | `https://png.pngtree.com/png-vector/20241210/ourmid/pngtree-cute-cartoon-house-clipart-illustration-png-image_14686303.png` |
| Pro (Heart) | `https://png.pngtree.com/png-clipart/20240310/original/pngtree-orange-heart-shape-infinity-png-image_14560114.png` |
| Standard (Building) | `https://cdn-icons-png.flaticon.com/512/5988/5988831.png` |

---

## 📐 Layout Breakdown

### Mobile (default — `< 500px`)
- `.bg-container` — `flex-direction: column`, `align-items: center`
- `.pricings-container` — `flex-direction: row`, `flex-wrap: wrap`
- Cards wrap to next line when space runs out
- No fixed height on `.bg-container`

### Desktop (`min-width: 500px`)
- `.bg-container` — `height: 100vh` (full viewport height)
- Cards remain in a row with wrapping enabled

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

4. Resize the window below and above **500px** to see the height change

---

## 💡 Key CSS Techniques Used

| Technique | Where used |
|---|---|
| `flex-direction: column` | Main container layout |
| `flex-direction: row` + `flex-wrap: wrap` | Pricing cards row with wrapping |
| `flex-grow: 1` | `.list` grows to push button to bottom |
| `align-self: flex-end` | Icon aligns to right of card |
| `align-self: stretch` | Button stretches full card width |
| `align-self: center` | Per month text vertically centred |
| `border-radius: 2vh` | Rounded card corners & buttons |
| `height: 100vh` at 500px | Full screen on desktop |

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout Change |
|---|---|
| `< 500px` | Cards wrap, no fixed height |
| `≥ 500px` | Full `100vh` height on bg-container |

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
