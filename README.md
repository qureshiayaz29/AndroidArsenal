# Android Arsenal — V1 Validation Landing Page

A fast, SEO-friendly landing page to validate whether Android developers want Android Arsenal to exist.

**Live site:** [androidarsenal.com](https://androidarsenal.com)

## Stack

- [Astro](https://astro.build) — static site
- [Cloudflare Pages](https://pages.cloudflare.com) — hosting
- [Tally](https://tally.so) — feedback form → Google Sheets
- Cloudflare Web Analytics — page traffic

## Development

```bash
npm install
cp .env.example .env
# Set PUBLIC_TALLY_FORM_ID after creating your Tally form
npm run dev
```

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `PUBLIC_TALLY_FORM_ID` | Yes (for form) | Tally form ID from tally.so |
| `PUBLIC_CF_BEACON_TOKEN` | No | Cloudflare Web Analytics beacon token |

## Tally setup

1. Create a form at [tally.so](https://tally.so) with fields:
   - **Vote** — multiple choice: Yes, Maybe, No
   - **What should Android Arsenal be?** — long text
   - **Comments** — long text (optional)
   - **Email** — email (optional)
2. Add hidden fields: `vote`, `utm_source`, `utm_medium`, `utm_campaign`, `referrer`
3. Connect Google Sheets integration
4. Set post-submit redirect to `https://androidarsenal.com/thanks`
5. Copy form ID to `PUBLIC_TALLY_FORM_ID`

## Deploy (Cloudflare Pages)

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Environment variables:** set `PUBLIC_TALLY_FORM_ID` and optionally `PUBLIC_CF_BEACON_TOKEN` in Cloudflare Pages settings

## Project structure

```
src/
├── components/   Hero, VoteSection, SocialShare, Footer
├── layouts/      Layout.astro (SEO, OG, analytics)
├── pages/        /, /thanks, /privacy, /404
├── styles/       global.css
└── config/       site.ts
```

See [plan.md](./plan.md) for the full product plan.
