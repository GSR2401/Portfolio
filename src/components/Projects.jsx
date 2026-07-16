import { projects } from "../data/content";
import ProjectCard from "./ProjectCard";
import ProjectRow from "./ProjectRow";
import Section from "./layout/Section";

export default function Projects() {
  const featured = projects.filter((project) => project.featured);
  const more = projects.filter((project) => !project.featured);

  return (
    <Section id="projects" title="Projects">
      <ul className="mt-8 flex flex-col gap-4">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>

      {more.length > 0 && (
        <div className="mt-12">
          <h3 className="font-heading text-sm uppercase tracking-wide text-text-muted">
            More Projects
          </h3>
          <ul className="mt-4 rounded-lg border border-border-subtle bg-bg-surface px-4">
            {more.map((project) => (
              <ProjectRow key={project.id} project={project} />
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
