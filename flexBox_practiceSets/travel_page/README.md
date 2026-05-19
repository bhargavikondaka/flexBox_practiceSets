## Travel Landing Page — Responsive Web Design
A responsive travel-themed landing page built with HTML & CSS. It uses different background images for mobile and desktop screens, centered content, and two CTA buttons — all without any JavaScript or frameworks.

### 📁 Project Structure
project/
├── index.html       # Main HTML file
├── index.css        # Stylesheet with media queries
└── README.md        # Project documentation

### 🚀 Live Preview
Mobile (< 768px)Desktop (≥ 768px)travel-sm-bg.png backgroundtravel-md-bg.png backgroundButtons stacked verticallyButtons side by side (row)Heading font size: 49pxHeading font size: 33pxContent width: 80%Content width: 60%

### 🛠️ Tech Stack
TechnologyUsageHTML5Semantic page structureCSS3Flexbox layout, media queries, background imagesGoogle FontsRoboto font via CDN

### 🎨 Design Tokens
PropertyValueMobile backgroundtravel-sm-bg.pngDesktop backgroundtravel-md-bg.pngBackground sizecoverText colorwhitePrimary button backgroundwhitePrimary button text color#183b56 (dark navy)Secondary button backgroundtransparentSecondary button border2px solid whiteButton width300pxButton height40pxButton border radius30pxFont familyRoboto

### 📐 Layout Breakdown
Mobile (default — < 768px)

### Background: travel-sm-bg.png
.bg-container — flex-direction: column, overflow-y: scroll
.buttons-container — flex-direction: column (stacked)
.content-container — width: 80%, text-align: center
Heading: 49px, bold

### Desktop (min-width: 768px)

Background switches to travel-md-bg.png
.buttons-container — flex-direction: row (side by side)
.content-container — width: 60%
Heading shrinks to 33px, bold


### 🖼️ Background Images
https://121clicks.com/wp-content/uploads/2024/09/best-top-travel-landscape-photography-01.jpg
https://images.stockcake.com/public/c/8/9/c898d266-3291-4cb5-af28-78c89ce2297d_large/sunset-road-trip-stockcake.jpg

### 🔤 Google Fonts Used
Active font: Roboto

### 📦 How to Run

Download or clone the project
Make sure index.html and index.css are in the same folder
Open index.html in any modern browser

bash# Optional: serve locally
npx serve .

Resize the browser window below and above 768px to see the responsive layout switch


### 📱 Responsive Breakpoints
BreakpointLayout Change< 768pxMobile layout — sm background, stacked buttons≥ 768pxDesktop layout — md background, row buttons

### ✅ Browser Compatibility
BrowserStatusGoogle Chrome✅ SupportedMozilla Firefox✅ SupportedMicrosoft Edge✅ SupportedSafari✅ Supported

### 📄 License
Free to use for learning and personal projects.
