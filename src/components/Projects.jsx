import { projects } from "../data/content";
import ProjectCard from "./ProjectCard";
import ProjectRow from "./ProjectRow";
import CaseStudy from "./CaseStudy";

export default function Projects() {
  const featured = projects.filter((project) => project.featured);
  const more = projects.filter((project) => !project.featured);
  const caseStudyProject = projects.find(
    (project) => project.id === "private-recall",
  );

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-5xl px-4 py-16 sm:px-8 md:py-24"
    >
      <h2
        id="projects-heading"
        className="font-heading text-2xl font-semibold text-text-primary"
      >
        Projects
      </h2>
      <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>

      {caseStudyProject && <CaseStudy project={caseStudyProject} />}

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
    </section>
  );
}
