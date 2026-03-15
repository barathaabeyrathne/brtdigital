You are a senior frontend engineer + designer. Build a production-ready single-page marketing website for my company: “brt digital”.

Tech stack:
- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion for micro-interactions + scroll reveal
- lucide-react for icons
- Optional but allowed: @radix-ui/react-* (for accessible components), clsx + tailwind-merge, react-intersection-observer
- Keep dependencies light

Design goals:
- Single-page (no routing). Sections with anchor navigation.
- Minimal, premium, high-contrast layout with lots of whitespace.
- Primary brand color: EMERALD GREEN (use as accent across buttons, links, borders, highlights).
- Subtle but impressive hover effects to showcase our skill: card lift, animated borders, underline animations, gradient sheen on buttons, image/project tile reveal.
- Smooth, restrained animations (no heavy parallax). Respect prefers-reduced-motion.
- Fully responsive, accessible (keyboard focus, aria labels), and fast.

Brand/content:
- Company: brt digital
- Tagline: “Build. Launch. Grow.” (use unless you propose a better one)
- Services: IT Consultancy, Web Development, Mobile Development, Social Media Marketing
- Prior work to reference in the Work section (use these names in content; links optional):
  • The Florient App — https://theflorientapp.com
  • Sunstar Caravans — https://sunstarcaranvans.com
  • EmcoToys — emcotoys.lk (currently unavailable)
  • ImSafe (mobile + web safety check-in app)
  • IOIP (Industry Outsourcing Intelligence Platform)

Single-page sections (in this order):
1) Top Nav (sticky)
   - Logo: brt digital
   - Links: Services, Work, Process, About, Contact
   - Active section indicator + hover underline animation in emerald
   - Mobile menu (accessible) using Radix or custom

2) Hero
   - Big headline + short subtext
   - Primary CTA: “Book a free consult”
   - Secondary CTA: “See our work”
   - Minimal background detail: subtle grid/noise (no mid-tone clutter), optionally animated slightly
   - Add a small “capabilities” row (e.g., Go/Node, React, AWS, Mobile, Marketing) as chips with hover

3) Services (4 cards)
   - Cards with icons + short bullets
   - Hover: lift + animated border trace + slight emerald glow; reveal extra line of text on hover
   - Services:
     - IT Consultancy (system design, cloud, audits)
     - Web Development (websites, web apps, e-commerce)
     - Mobile Development (iOS/Android, cross-platform, MVPs)
     - Social Media Marketing (management, ads, growth)

4) Work (selected projects, 5 tiles)
   - Grid of project tiles with minimal thumbnails (use tasteful abstract placeholders if no real images)
   - On hover: overlay slides up showing:
     - one-sentence outcome
     - tech stack chips
     - micro-CTA “View case notes →”
   - Each tile has a “Details” expand interaction (accordion or modal) with a short case study:
     - Problem, Approach, Outcome (2–3 bullets each)

5) Process
   - 4 steps: Discover → Design → Build → Launch/Support
   - Step cards with hover and motion; connecting line subtly animates on scroll

6) About
   - Short story + values: Quality, Speed, Transparency
   - “Why brt digital” bullets (startup-friendly, enterprise-ready, modern stack, long-term support)

7) Contact
   - Contact form (name, email, company, budget range, message)
   - Use react-hook-form + zod for validation (inline errors)
   - No backend required: on submit show success toast + log payload to console
   - Make it easy to wire later (create a `submitLead()` function stub)
   - Include placeholders for email/phone/location + social links

Footer:
- Minimal footer with copyright + quick links + small CTA

Implementation requirements:
- Clean folder structure:
  src/components (Button, Card, Section, Nav, Modal/Accordion, Toast)
  src/sections (Hero, Services, Work, Process, About, Contact, Footer)
  src/data (services.ts, projects.ts, testimonials.ts)
  src/lib (utils.ts, motion.ts, submitLead.ts)
- Use Tailwind theme config with emerald as primary:
  - Define CSS variables or Tailwind `theme.extend.colors.brand = emerald palette`
  - Provide consistent focus rings in emerald
- Add smooth scroll to anchors and highlight active section on scroll (IntersectionObserver).
- Add SEO basics:
  - index.html title “brt digital — Build. Launch. Grow.”
  - meta description
  - OpenGraph defaults
- Add Lighthouse-friendly performance (no huge images, lazy-load where needed).
- Add reduced motion support:
  - if prefers-reduced-motion, disable or reduce motion durations

Deliverables:
- Full working Vite project
- README with:
  - install/run/build commands
  - where to edit content (src/data)
  - how to wire contact form to EmailJS / API later
- Ensure `npm install` then `npm run dev` works with no errors.

Execution plan (do it, don’t ask me questions):
1) Scaffold Vite React TS
2) Tailwind setup + theme config (emerald brand)
3) Build layout + sections
4) Add data-driven content
5) Add hover effects + Framer Motion animations + reduced-motion handling
6) Polish: accessibility, responsiveness, performance, final QA
