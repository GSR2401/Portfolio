export default function ProjectCard({ project }) {
  return (
    <li className="flex flex-col rounded-lg border border-border-subtle bg-bg-surface p-6 transition-colors hover:border-accent-violet/60">
      <p className="font-heading text-xs text-accent-teal">~/{project.id}</p>
      <h3 className="mt-1 font-heading text-lg font-semibold text-text-primary">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
        {project.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-accent-teal/30 bg-accent-teal/10 px-2.5 py-0.5 text-xs text-accent-teal"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex gap-4 text-sm font-heading">
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="text-accent-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded"
        >
          Code
        </a>
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noreferrer"
            className="text-accent-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded"
          >
            Live Demo
          </a>
        )}
      </div>
    </li>
  );
}
