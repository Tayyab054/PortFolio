# 🌈✨ Portfolio ✨🌈

💎 **Tayyab Ali – Frontend Developer** 💻🚀

🎨 Crafting vibrant, modern web experiences with **React + Vite + Tailwind CSS**. Passionate about building **interactive projects**, **responsive designs**, and **optimized web applications**. 🌟💡

⚡ Always exploring new **technologies** and turning ideas into **pixel-perfect digital solutions**. 🌍🔥

---

## 🔗🌍 Live Demo

* **Website:** [**tayyab054.github.io/portfolio/**](https://tayyab054.github.io/portfolio/ "https://tayyab054.github.io/portfolio/")

## 🖼️📸 Screenshots

> Drop images in `/public` or `/assets` and update paths.

| 🏠 Home | 💼 Projects |
| ------- | ----------- |
|         |             |

---

## ✨🌟 Features

* 🎨 Modern, clean UI with responsive design
* 🌙☀️ Dark/Light theme toggle with persistence
* 📝 Blog & project notes support
* 📩 Contact form (EmailJS / API)
* ⚡ Lightning-fast builds with Vite & code-splitting
* 💯 Optimized Lighthouse scores (Performance, SEO, Accessibility)

## 🧰🛠️ Tech Stack

* 💻 **Frontend:** React, Vite, Tailwind CSS
* 🖌️ **UI:** shadcn/ui or Headless UI + Radix
* 🚀 **Deployment:** GitHub Pages

---

## 📁📂 Project Structure

```bash
├─ public/                # 📦 Static assets
├─ src/
│  ├─ assets/            # 🖼️ Images, icons, fonts
│  ├─ components/        # ⚛️ Reusable UI components
│  ├─ data/              # 🗂️ JSON/TS data (projects, skills, timeline)
│  ├─ pages/             # 📄 Route-level pages
│  ├─ hooks/             # 🪝 Custom hooks
│  ├─ styles/            # 🎨 Global styles
│  ├─ App.jsx/tsx        # 🌟 App root
│  └─ main.jsx/tsx       # 🏁 Entry
├─ .github/workflows/    # 🤖 CI/CD workflows
├─ package.json
└─ vite.config.js/ts
```

---

## ⚙️🔧 Quick Start

### 1️⃣ Prerequisites

* 📦 Node.js LTS (≥ 20 recommended)
* 📥 npm

### 2️⃣ Clone & Install

```bash
# Using HTTPS
git clone https://github.com/Tayyab054/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### 3️⃣ Run Locally

```bash
npm run dev
# Visit local URL (e.g., http://localhost:5173)
```

### 4️⃣ Build & Preview

```bash
npm run build
npm run preview
```

---

## 🔒🔑 Environment Variables (Optional)

Create a `.env` file in the project root for analytics or contact forms.

> Vite exposes variables prefixed with `VITE_`.

```bash
# .env
VITE_GA_ID=G-XXXXXXXXXX
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

---

## 🚢⚓ Deployment

### 🅰️ GitHub Pages (Vite)

1. Set `base` in `vite.config.js`:

```js
export default { base: '/portfolio/' }
```

2. Add deploy scripts in `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Install: `npm i -D gh-pages`
4. Push repo and run: `npm run deploy`
5. In GitHub Settings → Pages → set branch to `gh-pages`

---

## ♿✅ Accessibility Checklist

* ⌨️ Keyboard navigable
* 🎨 High color contrast
* 🏷️ Proper `aria-*` attributes
* 🖼️ Alt text for images & labels for inputs

## 🤝❤️ Contributing

PRs welcome! 🍴 Fork → 🌿 create a branch → 💾 commit → 🔀 open PR. Include screenshots for UI changes.

---

## 🐞🔧 Troubleshooting

* ⚠️ Port in use? Run `npm run dev -- --port 5174`
* ❌ Build fails on GH Pages? Check base path and 404.html
* 🖼️ Missing icons? Verify asset paths & casing
* 🎨 CSS issues? Check Tailwind config & content paths

---

## 👋💼 Contact

**Tayyab Ali** — Frontend Developer

* 📧 Email: [2024cs491@student.uet.edu.pk](mailto:2024cs491@student.uet.edu.pk)
* 🐙 GitHub: [https://github.com/Tayyab054](https://github.com/Tayyab054)

> ⭐ Star this repo if you like it!

