# Forest Guardian AI

AI-powered forest incident reporting and risk assessment platform. Citizens report illegal
logging, forest fires, poaching, pollution, encroachment, and other incidents; an AI workflow
scores the risk and routes the report to authorities.

## Tech stack

- React 19 + Vite
- Tailwind CSS
- React Router
- lucide-react (icons)

## Getting started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

```bash
npm run build     # production build to /dist
npm run preview   # preview the production build locally
```

## Connecting the report form to your backend

The Report Incident page posts each submission as JSON to a single webhook — built to plug
straight into an n8n workflow (or any endpoint that accepts a POST with a JSON body).

1. Open `src/config.js`.
2. Replace the placeholder with your endpoint:

   ```js
   export const WEBHOOK_URL = 'https://your-instance.n8n.cloud/webhook/forest-guardian';
   ```

3. The form sends:

   ```json
   {
     "name": "",
     "email": "",
     "phone": "",
     "location": "",
     "description": "",
     "timestamp": "2026-07-10T12:00:00.000Z",
     "report_source": "Citizen"
   }
   ```

4. Your webhook should respond with JSON. The success screen looks for (and gracefully skips)
   any of these fields: `incident_type`, `risk`, `priority`, `risk_score`, `recommendation`,
   `summary`.

Until `WEBHOOK_URL` is set, submitting the form shows a clear configuration error instead of
failing silently.

## Project structure

```
src/
  components/     Reusable UI: Navbar, Footer, FeatureCard, FormField,
                   SuccessCard, ErrorAlert, Treeline (signature illustration), BrandIcons
  pages/          Home, ReportIncident, About, Contact, Dashboard
  config.js       WEBHOOK_URL and form constants
  App.jsx         Routes
  main.jsx        Entry point
```

## Design notes

- Palette: deep canopy green, moss, bark brown, warm amber, and a soft paper background —
  no stock photography, the hero and section dividers use a custom layered treeline SVG.
- Type: Fraunces (display) paired with Inter (body) and JetBrains Mono for data like risk scores.
- Fully responsive from mobile through desktop, with a hamburger nav on small screens,
  visible keyboard focus states, and `prefers-reduced-motion` support.

---

© 2026 Forest Guardian AI — Developed as an SDG 15 Project
