# Inspiring Quotes to Start Your Day — Responsive Web Page

A responsive inspirational quotes page built with **HTML & CSS**. It features five quote cards on a purple radial gradient background, each displaying a famous quote, person name, portrait image, and a coloured opening quotation mark icon from Font Awesome.

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

- 💬 **Five quote cards** — APJ Abdul Kalam, Albert Einstein, Swami Vivekananda, Subhas Chandra Bose, Mahatma Gandhi
- 🟣 **Purple radial gradient background** — `radial-gradient(#8a6397, #37367d)`
- 🎨 **Coloured quote icons** — four unique purple/blue shades per card
- 🖼️ **Portrait images** — rounded corners, right-aligned in each card
- 📱 **Responsive layout** — font sizes and image sizes reduce on mobile (`≤ 768px`)
- ⚡ **Font Awesome icons** — `fa-quote-left` icon for opening quote marks

---

## 🛠️ Tech Stack

| Technology | Version / CDN | Usage |
|---|---|---|
| HTML5 | — | Page structure |
| CSS3 | — | Flexbox, radial gradient, media queries |
| Google Fonts | CDN | Roboto and other font families |
| Font Awesome | Kit: `fac54f0bd8` | Quote left icon (`fa-solid fa-quote-left`) |

---

## 🎨 Design Tokens

| Property | Value |
|---|---|
| Background | `radial-gradient(#8a6397, #37367d)` |
| Page text color | `white` |
| Heading color | `white` |
| Heading font size (desktop) | `46px` |
| Heading font size (mobile) | `36px` |
| Card background | `white` |
| Card border radius | `10px` |
| Card padding | `10px` |
| Card margin | `10px` |
| Card width | `90%` |
| Quote text color | `#6e798c` (muted blue-grey) |
| Quote font size | `17px` |
| Person name color | `#081f32` (dark navy) |
| Person name font size | `20px` |
| Image width (desktop) | `120px` |
| Image width (mobile) | `80px` |
| Image border radius | `30px` |
| Font family | `Roboto` |
| Body padding | `7px` |

---

## 🎨 Quote Icon Colours

| Class | Color | Used for |
|---|---|---|
| `.open-quote1` | `#5d408c` (purple) | APJ Abdul Kalam |
| `.open-quote2` | `#2a4eaa` (blue) | Albert Einstein |
| `.open-quote3` | `#9e619b` (pink-purple) | Mahatma Gandhi |
| `.open-quote4` | `#391484` (deep indigo) | Vivekananda & Bose |

**Desktop font size**: `90px` · **Mobile font size**: `50px`

---

## 💬 Quote Cards

| # | Person | Quote |
|---|---|---|
| 1 | **A.P.J Abdul Kalam** | "You have to dream before your dream comes true" |
| 2 | **Albert Einstein** | "A person who never made a mistake never tried anything new" |
| 3 | **Swami Vivekananda** | "Arise, awake, stop not until your goal is achieved" |
| 4 | **Subhas Chandra Bose** | "Freedom is not given, it is taken..." |
| 5 | **Mahatma Gandhi** | "You must be the change you wish to see in your world" |

---

## 🖼️ Portrait Images Used

| Person | Image URL |
|---|---|
| APJ Abdul Kalam | `https://track2training.com/wp-content/uploads/2021/07/apj.jpg?w=540` |
| Albert Einstein | `https://cdn.pixabay.com/photo/2023/06/05/07/19/einstein-8041625_640.png` |
| Swami Vivekananda | `https://www.shutterstock.com/image-vector/...swami-vivekananda...` |
| Subhas Chandra Bose | `https://upload.wikimedia.org/wikipedia/commons/4/44/Subhas_Chandra_Bose_NRB.jpg` |
| Mahatma Gandhi | `https://static.vecteezy.com/system/resources/.../mahatma-gandhi...` |

---

## 📐 Layout Breakdown

### Each Quote Card (`.quote-card`)
- `display: flex` · `flex-direction: row`
- `justify-content: space-between` — quote text left, image right
- `align-items: center` — vertically centred
- `text-align: start` — left-aligned text inside card

### Main Container (`.bg-container`)
- `display: flex` · `flex-direction: column`
- `align-items: center` · `text-align: center`
- Gradient background covers full page

---

## 📱 Responsive Breakpoints

### Desktop (default — `> 768px`)
- Heading: `46px`
- Quote icons: `90px`
- Portrait image: `120px` wide

### Mobile (`max-width: 768px`)
- Heading: `36px`
- Quote icons: `50px`
- Portrait image: `80px` wide

---

## 🔤 Google Fonts Imported

```
Bree Serif, Caveat, Lobster, Monoton, Open Sans,
Playfair Display SC, Playfair Display, Roboto,
Source Sans Pro, Work Sans
```

Active font: **Roboto**

---

## ⚡ Font Awesome Setup

```html
<script src="https://kit.fontawesome.com/fac54f0bd8.js" crossorigin="anonymous"></script>
```

Icon used: `fa-solid fa-quote-left`

---

## 📦 How to Run

1. Download or clone the project
2. Make sure `index.html` and `index.css` are in the **same folder**
3. Open `index.html` in any modern browser

```bash
# Optional: serve locally
npx serve .
```

> ⚠️ Font Awesome icons require an internet connection to load from CDN

---

## 💡 Key CSS Techniques Used

| Technique | Where used |
|---|---|
| `radial-gradient()` | Purple gradient background |
| `flex-direction: row` | Quote + image side by side in card |
| `justify-content: space-between` | Text left, image right in card |
| `flex-grow: 1` | Cards expand to fill available space |
| `flex-shrink: 1` | Content shrinks if needed |
| `border-radius: 30px` | Rounded portrait images |
| `max-width: 768px` media query | Mobile font & image size reduction |

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
