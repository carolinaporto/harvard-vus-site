# mariacarolinaporto — Personal Fundraising Website

Personal fundraising campaign website for **Maria Carolina Porto**, a Computer Engineering student at Insper (Brazil) accepted to the **Harvard College Visiting Undergraduate Students Program** for the 2026/2027 academic year.

The site tells Carol's story, explains the financial need transparently, and invites visitors to donate, share, or connect.

---

## Tech stack

| Tool | Purpose |
|---|---|
| React 19 + TypeScript | UI and type safety |
| Vite 8 | Build tool and dev server |
| styled-components | All styling |
| Framer Motion | Scroll animations and transitions |
| @phosphor-icons/react | Icons |

---

## Running locally

```bash
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

---

## Content

All site content lives in `src/data/content.ts` — bilingual (PT + EN) in a single file. To update any text, edit that file.

### Progress bar (donations received)

The progress bar reads live from a Google Sheets CSV. To update the amount raised:

1. Open the Google Sheet linked in `src/hooks/useProgress.ts`
2. Update cell **B1** (raised amount in USD)
3. The site reflects the change within ~5 minutes — no deploy needed

If the Sheet URL is not configured yet, paste it in `src/hooks/useProgress.ts`:
```ts
const SHEET_CSV_URL = 'YOUR_GOOGLE_SHEETS_CSV_URL_HERE';
```

---

## Remaining TODOs before publishing

- [ ] **PIX key** — `pixKey` in `src/data/content.ts`
- [ ] **International transfer info** — `intlInfo` (Wise or bank account)
- [ ] **OG image** — add `/public/og-image.jpg` for WhatsApp/LinkedIn previews (1200×630px recommended)
- [ ] **HeroSection photo** — already added (`public/photos/hero.jpg`)

---

## Contact

Carol Porto — [carolporto04@gmail.com](mailto:carolporto04@gmail.com)
