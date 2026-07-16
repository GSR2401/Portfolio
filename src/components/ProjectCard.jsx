import { useState } from "react";

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const shortBio =
    project.description.length > 140
      ? `${project.description.slice(0, 140).trim()}…`
      : project.description;

  return (
    <li
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      onClick={() => setExpanded((value) => !value)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setExpanded((value) => !value);
        }
      }}
      className="group flex w-full cursor-pointer flex-col rounded-lg border border-border-subtle bg-bg-surface p-6 transition-colors hover:border-accent-violet/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-heading text-xs text-accent-teal">~/{project.id}</p>
          <h3 className="mt-1 font-heading text-lg font-semibold text-text-primary">
            {project.title}
          </h3>
        </div>

        <ul className="flex flex-wrap gap-2 sm:max-w-md sm:justify-end">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-accent-teal/30 bg-accent-teal/10 px-2.5 py-0.5 text-xs text-accent-teal"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {expanded ? (
        <p className="mt-4 text-sm leading-relaxed text-text-muted">
          {project.description}
        </p>
      ) : (
        <p className="mt-4 max-h-0 overflow-hidden text-sm leading-relaxed text-text-muted opacity-0 transition-all duration-200 group-hover:max-h-16 group-hover:opacity-100">
          {shortBio}
        </p>
      )}

      <div
        className="mt-5 flex gap-4 text-sm font-heading"
        onClick={(event) => event.stopPropagation()}
      >
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="text-accent-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded"
        >
          GitHub
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
