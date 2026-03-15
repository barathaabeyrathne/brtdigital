import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import type { Project } from '../data/projects';

export function ProjectAccordion({ project }: { project: Project }) {
  return (
    <AccordionPrimitive.Root type="single" collapsible className="mt-4">
      <AccordionPrimitive.Item value={project.name} className="rounded-lg border border-zinc-800/70 bg-zinc-950/60 px-4 py-2">
        <AccordionPrimitive.Header>
          <AccordionPrimitive.Trigger className="flex w-full items-center justify-between py-2 text-left text-sm text-zinc-200">
            Details
            <ChevronDown className="h-4 w-4 shrink-0 text-brand-400 transition-transform duration-300 data-[state=open]:rotate-180" />
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content className="overflow-hidden text-sm text-zinc-300 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          <div className="space-y-3 pb-3 pt-1">
            <CaseGroup title="Problem" items={project.caseNotes.problem} />
            <CaseGroup title="Approach" items={project.caseNotes.approach} />
            <CaseGroup title="Outcome" items={project.caseNotes.outcome} />
          </div>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    </AccordionPrimitive.Root>
  );
}

function CaseGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">{title}</h4>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1 w-1 rounded-full bg-brand-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
