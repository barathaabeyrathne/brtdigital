export type Project = {
  name: string;
  href?: string;
  outcome: string;
  stack: string[];
  summary: string;
  placeholder: string;
  logo?: string;
  caseNotes: {
    problem: string[];
    approach: string[];
    outcome: string[];
  };
};

export const projects: Project[] = [
  {
    name: 'The Florient App',
    href: 'https://theflorientapp.com',
    outcome: 'Sharper positioning and conversion flow increased qualified founder and partner inquiries.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Analytics'],
    summary: 'Reframed product messaging and UX to improve inbound pipeline quality.',
    placeholder: 'from-emerald-500/20 via-zinc-900 to-zinc-950',
    logo: '/work/the-florient-app.png',
    caseNotes: {
      problem: ['Product value was not clear to first-time visitors.', 'Lead journey had friction across key decision points.'],
      approach: ['Restructured messaging around business outcomes.', 'Redesigned page flows for clearer next actions.', 'Improved page speed and conversion tracking baseline.'],
      outcome: ['Stronger top-of-funnel engagement.', 'Better quality inbound conversations.', 'More consistent demo and consultation requests.'],
    },
  },
  {
    name: 'Sunstar Caravans',
    href: 'https://sunstarcaranvans.com',
    outcome: 'A modern buying journey improved trust and lifted high-intent inquiries for premium models.',
    stack: ['React', 'Node', 'CMS', 'SEO'],
    summary: 'Modernized digital showroom experience to support sales conversations.',
    placeholder: 'from-cyan-500/20 via-zinc-900 to-zinc-950',
    logo: '/work/sunstar-caravans.png',
    caseNotes: {
      problem: ['Prospective buyers struggled to compare products quickly.', 'Digital presence did not match brand quality.'],
      approach: ['Redesigned site architecture around buyer intent.', 'Introduced clearer model highlights and inquiry pathways.', 'Implemented SEO improvements for local discovery.'],
      outcome: ['Higher engagement with key product pages.', 'Increased quality and volume of inquiries.', 'Stronger confidence in online-first sales touchpoints.'],
    },
  },
  {
    name: 'EmcoToys',
    href: 'https://emcotoys.lk',
    outcome: 'Prepared a relaunch-ready commerce foundation focused on conversion and growth.',
    stack: ['E-commerce', 'Brand Systems', 'Performance'],
    summary: 'Built scalable storefront direction to support future online revenue growth.',
    placeholder: 'from-fuchsia-500/20 via-zinc-900 to-zinc-950',
    logo: '/work/emcotoys.png',
    caseNotes: {
      problem: ['Legacy storefront experience limited conversion potential.', 'Inconsistent digital presentation diluted trust.'],
      approach: ['Defined a reusable commerce component system.', 'Optimized product listing and detail page structure.', 'Planned phased rollout for lower relaunch risk.'],
      outcome: ['Clear relaunch roadmap with delivery confidence.', 'Improved readiness for paid and organic traffic.', 'Stronger baseline for sustainable e-commerce growth.'],
    },
  },
  {
    name: 'ImSafe',
    outcome: 'Cross-platform release improved user reliability and confidence in safety check-ins.',
    stack: ['React Native', 'React', 'Firebase', 'Maps'],
    summary: 'Delivered mobile and web workflows built for speed, trust, and retention.',
    placeholder: 'from-amber-500/20 via-zinc-900 to-zinc-950',
    logo: '/work/im-safe.png',
    caseNotes: {
      problem: ['Users needed rapid status updates during high-stress moments.', 'Reliability across mobile and web was critical.'],
      approach: ['Designed clear emergency-state product flows.', 'Implemented resilient sync and notification patterns.', 'Optimized onboarding to reduce adoption friction.'],
      outcome: ['Faster and clearer safety communication.', 'Higher trust in daily check-in usage.', 'Stable foundation for feature expansion and partnerships.'],
    },
  },
  {
    name: 'IOIP',
    outcome: 'Unified intelligence views helped teams make faster, more confident outsourcing decisions.',
    stack: ['Next.js', 'Data Pipelines', 'Cloud'],
    summary: 'Transformed fragmented operational reporting into an actionable platform.',
    placeholder: 'from-violet-500/20 via-zinc-900 to-zinc-950',
    logo: '/work/ioip.png',
    caseNotes: {
      problem: ['Decision-makers lacked a single source of operational insight.', 'Manual reporting slowed strategic action.'],
      approach: ['Designed dashboard-led workflows for leadership use cases.', 'Modeled data into clear decision support views.', 'Added secure role-based access for enterprise teams.'],
      outcome: ['Faster internal reporting cycles.', 'Improved confidence in strategic decisions.', 'Reduced operational overhead across teams.'],
    },
  },
];
