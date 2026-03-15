import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { ProjectAccordion } from '../components/Accordion';
import { Section } from '../components/Section';
import { projects } from '../data/projects';
import { fadeUp, useMotionProps } from '../lib/motion';

export function Work() {
  const motionProps = useMotionProps();

  return (
    <Section id="work" title="Case studies with business impact" eyebrow="Work">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            variants={fadeUp}
            {...motionProps}
            transition={{ ...motionProps.transition, delay: index * 0.06 }}
            className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4"
          >
            <div
              className={`relative h-44 overflow-hidden rounded-xl border border-zinc-800 bg-gradient-to-br ${project.placeholder}`}
              aria-label={`${project.name} project preview`}
              style={
                project.logo
                  ? {
                      backgroundImage: `linear-gradient(to top, rgba(9,9,11,0.9), rgba(9,9,11,0.25)), url(${project.logo})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }
                  : undefined
              }
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(16,185,129,0.15),transparent_40%)]" />
              <div className="absolute inset-x-0 bottom-0 translate-y-8 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent p-4 transition duration-300 group-hover:translate-y-0">
                <p className="text-sm text-zinc-200">{project.outcome}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-zinc-700 bg-zinc-900/80 px-2 py-1 text-[11px] text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="mt-3 inline-block text-sm text-brand-300">View case notes →</span>
              </div>
            </div>
            <div className="mt-4 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-medium text-white">{project.name}</h3>
                <p className="mt-1 text-sm text-zinc-300">{project.summary}</p>
              </div>
              {project.href ? (
                <a href={project.href} target="_blank" rel="noreferrer" className="text-brand-300 transition hover:text-brand-200" aria-label={`Visit ${project.name}`}>
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
            </div>
            <ProjectAccordion project={project} />
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
