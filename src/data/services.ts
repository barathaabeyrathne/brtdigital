import { Globe, Megaphone, Smartphone, Workflow } from 'lucide-react';

export const services = [
  {
    icon: Workflow,
    title: 'IT Consultancy',
    bullets: ['Prioritise the roadmap that protects budget and momentum', 'Choose scalable architecture decisions from day one', 'Align product, engineering, and commercial goals'],
    extra: 'Outcome: faster decisions, lower delivery risk, and stronger founder confidence.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    bullets: ['Launch conversion-focused websites that generate qualified leads', 'Build web apps that streamline operations and customer journeys', 'Deliver e-commerce flows designed to increase revenue'],
    extra: 'Outcome: measurable growth in leads, sales, and digital performance.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    bullets: ['Ship MVP mobile products fast to test real demand', 'Create reliable iOS and Android experiences users trust', 'Build a foundation that scales as usage and features grow'],
    extra: 'Outcome: faster market validation and a product ready for long-term scale.',
  },
  {
    icon: Megaphone,
    title: 'Social Media Marketing',
    bullets: ['Turn brand visibility into a predictable lead pipeline', 'Run performance campaigns focused on CAC and revenue', 'Build content systems that support sustainable growth'],
    extra: 'Outcome: consistent customer acquisition with clearer marketing ROI.',
  },
] as const;
