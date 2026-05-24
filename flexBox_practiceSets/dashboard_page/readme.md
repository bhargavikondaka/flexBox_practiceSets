# 🏠 Dashboard Favourites

A responsive dashboard UI with a fixed sidebar and scrollable favourites grid (Cars, Bikes, Houses) built using HTML & CSS.

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure |
| CSS3 | Flexbox layout, media queries |
| Google Fonts | Open Sans font |
| Font Awesome | Sidebar icons |

---

## 📁 Project Structure

```
project/
├── index.html
├── index.css
└── README.md
```

---

## 💡 Key Concepts Covered

- **Flexbox** — `flex-grow`, `flex-shrink`, `flex-wrap`, `align-self`
- **Fixed sidebar** — `width: 150px` + `flex-shrink: 0`
- **Scroll section** — `overflow-y: auto` on favourites panel
- **Image grid** — `flex-wrap: wrap` for responsive image rows
- **vh units** — `height: 100vh` / `90vh` for viewport sizing
- **Media queries** — image size increases at `min-width: 500px`
- **Circular image** — `border-radius: 50px` on profile photo

> ⚠️ **Bug to fix:** Media query has a typo — `fav-images` should be `.fav-images`

---

## 🎨 Design Tokens

| Property | Value |
|---|---|
| Sidebar color | `#002159` (navy) |
| Font | `Open Sans` |
| Image size | `90px × 90px` (mobile), `100px × 100px` (desktop) |
| Breakpoint | `min-width: 500px` |

---

## 📖 Resources

| Topic | Link |
|---|---|
| Flexbox guide | css-tricks.com/snippets/css/a-guide-to-flexbox |
| Flexbox practice | flexboxfroggy.com |
| Media queries | developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries |
| CSS units | developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units |


> learning purpose 📖📚🛄
