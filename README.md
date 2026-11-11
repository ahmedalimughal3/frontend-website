
<<<<<<< HEAD
Frontdesk is a responsive product website and sample agency dashboard for a white-label AI website assistant. The interface is built with Next.js App Router, React, TypeScript, and CSS; the dashboard uses local demonstration data and does not connect to a backend.

## Routes and visitor flow

- `/` is the product landing page. Visitors can explore the product, see how setup works, compare agency and client benefits, review the early-access pricing message, and contact the team.
- The hero cycles through example conversations for BawdicSoft, Everwell Dental, and Northstar Fitness. Each chat uses its supplied company logo and matching message colors, with React-controlled CSS transitions. Visitor questions align on the left and assistant answers on the right. The rotation pauses while hovered or focused, and browsers set to reduced motion receive a non-moving preview.
- The header and hero link to `/dashboard` for a sample agency-console preview.
- `/dashboard` shows sample agency metrics, recent leads, client agents, and agent settings. The client selector filters the metrics, chart, leads, client table, and settings together.
- The early-access section follows the supplied contact-panel reference: email and WhatsApp actions sit on the left, with the headline and introduction on the right. The layout stacks on small screens. The email action can copy the contact address when clipboard access is available.
- The shared header switches to an accessible, expandable navigation menu with centered links and an action button on mobile. The footer provides consistent product and contact links on both routes.
- Landing sections and dashboard cards reflow for smaller screens; client tables remain horizontally scrollable when their columns need extra room.

## UI and icon references

- **Design reference:** the contact panel is based on the screenshot supplied for this project. Its dark-green panel, two-column desktop composition, contact rows, and responsive stacking are implemented with project-specific CSS in `app/globals.css`.
- **UI library:** no third-party component or UI framework is used. The interface uses custom React components, Next.js, and CSS.
- **Icon library:** [Lucide React](https://lucide.dev/guide/packages/lucide-react) provides the contact panel icons: `Mail`, `MessageCircle`, and `ArrowUpRight`.

## Project structure

```text
app/
  dashboard/
    page.tsx                 Dashboard route and page metadata
  globals.css                Responsive site, dashboard, and motion styles
  layout.tsx                 Root layout and global metadata
  page.tsx                   Product landing page
components/
  contact-actions.tsx        Contact links and email copy interaction
  conversation-carousel.tsx  Animated, hover-pausable conversation preview
  dashboard-view.tsx         Interactive dashboard and client filtering
  site-footer.tsx            Shared responsive footer and site links
  site-header.tsx            Shared desktop and toggleable mobile navigation
lib/
  demo-data.ts               Typed sample clients, leads, and totals helper
```

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validate and build

```bash
npm run lint
npm run build
```

## Production notes

The dashboard is a frontend demonstration. Connect the typed data model in `lib/demo-data.ts` to an authenticated API before using it with real agency or lead data. Add server-side validation, authorization, persistence, and an appropriate privacy policy as part of that integration.
 
=======
>>>>>>> 2b82d3ed297a46f34d8ed41f136e11ee9530ac17
