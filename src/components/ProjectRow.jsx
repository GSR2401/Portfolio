export default function ProjectRow({ project }) {
  const stackSummary = project.tags.slice(0, 4).join(" · ");

  return (
    <li className="flex flex-col gap-1 border-b border-border-subtle py-3 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
        <span className="font-heading text-sm font-semibold text-text-primary">
          {project.title}
        </span>
        <span className="font-heading text-xs text-text-muted">
          {stackSummary}
        </span>
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="font-heading text-xs text-accent-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded"
      >
        Code →
      </a>
    </li>
  );
}
