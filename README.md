# Khoindvn – React Vite

Portfolio & ESign/KSign iOS cert website.

## Cài đặt & Chạy local

```bash
npm install
npm run dev
```

## Deploy lên GitHub Pages (tự động)

1. Push code lên branch `main`
2. GitHub Actions tự động build → deploy vào branch `gh-pages`
3. Vào **Settings → Pages → Source** chọn branch `gh-pages`

> ✅ Source code **không bị lộ** — chỉ có file đã build (minified) được public.

## Cấu trúc

```
src/
├── components/       # UI components + CSS Modules
├── hooks/            # useTyping hook
├── data.js           # Toàn bộ app data
├── App.jsx
├── main.jsx
└── index.css         # Global styles + CSS variables
```
