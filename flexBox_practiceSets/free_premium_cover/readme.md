# Social Proof & Freemium Shift — Responsive Web Page
A responsive feature section page built with HTML & CSS. It displays two content blocks — Social Proof and Freemium Shift — that stack vertically on mobile and arrange side-by-side on desktop using Flexbox and media queries.

### 📁 Project Structure
project/
├── index.html       # Main HTML file
├── index.css        # Stylesheet with media queries
└── README.md        # Project documentation

### 🚀 Live Preview
Mobile (< 768px)Desktop (≥ 768px)Column layout — image on top, text belowRow layout — image and text side by sideImages: width: 20vhImages: width: 12vhText centeredText aligned left (text-align: start)Full-width horizontal lineHorizontal line width: 100vhSecond container: columnSecond container: row with space-aroundImage 2: normal orderImage 2: order: 1 (moves to right)

### 🛠️ Tech Stack
TechnologyUsageHTML5Semantic page structureCSS3Flexbox layout, media queries, order propertyGoogle FontsRoboto font via CDNExternal image CDNsStar rating & SHAREit logo images

### 🎨 Design Tokens
PropertyValueBackground color#0b3b5b (deep navy blue)Text colorwhiteDescription color#f4f3f3 (off-white)Font familyRobotoImage border radius17pxFeature container margin12pxDesktop heading size29pxDesktop container width80%Horizontal line color#f4f3f3

### 📐 Layout Breakdown
Mobile (default — < 768px)

.bg-container — flex-direction: column
.feature-container — flex-direction: column, centered
.second-container — flex-direction: column, centered
.desc-container — text-align: center
.image — width: 20vh
.image2 — width: 20vh, normal order
.horizontal-line — width: 80%

Desktop (min-width: 768px)

.bg-container — flex-direction: column, items centered, align-items: center
.feature-container — flex-direction: row, width: 80%
.second-container — flex-direction: row, justify-content: space-around, width: 80%
.desc-container — text-align: start
.image — width: 12vh, margin: 15px
.image2 — width: 12vh, margin: 15px, order: 1 (shifts right)
.horizontal-line — width: 100vh
.heading — font-size: 29px


### 🖼️ Images Used
SectionImage URLSocial Proofhttps://thumbs.dreamstime.com/z/vector-illustration-vote-measurement-customer-satisfaction-star-rating-satisfactory-hand-show-class-shows-sign-social-187758511.jpgFreemium Shifthttps://images.seeklogo.com/logo-png/34/1/shareit-logo-png_seeklogo-347430.png

### 📄 Content Sections
1. Social Proof

Image: Star rating / customer satisfaction illustration
Heading: Social Proof
Description: Explains how customers buy products that improve them

2. Freemium Shift

Image: SHAREit logo (used as freemium brand visual)
Heading: Freemium Shift
Description: We provide premium package to customers
Note: Image uses order: 1 on desktop — moves it to the right of the text

Divider

<hr class="horizontal-line"> separates the two sections
Mobile: width: 80%
Desktop: width: 100vh


### 🔤 Google Fonts Imported
Bree Serif, Caveat, Lobster, Monoton, Open Sans,
Playfair Display SC, Playfair Display, Roboto,
Source Sans Pro, Work Sans
Active font: Roboto

### 📦 How to Run

Download or clone the project
Make sure index.html and index.css are in the same folder
Open index.html in any modern browser

bash# Optional: serve locally
npx serve .

Resize the browser window below and above 768px to see the responsive layout switch


### 💡 Key CSS Techniques Used
TechniqueWhere usedflex-direction: column → rowLayout switch at 768px breakpointorder: 1Moves image2 to right side on desktoptext-align: center → startText alignment switch on desktopwidth: 20vh → 12vhImage size reduction on desktopborder-radius: 17pxRounded corners on images

### 📱 Responsive Breakpoints
BreakpointLayout Change< 768pxStacked column — image above text, centered≥ 768pxSide-by-side row — image beside text, left-aligned

### ✅ Browser Compatibility
BrowserStatusGoogle Chrome✅ SupportedMozilla Firefox✅ SupportedMicrosoft Edge✅ SupportedSafari✅ Supported

### 📄 License
Free to use for learning and personal projects.
