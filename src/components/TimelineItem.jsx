export default function TimelineItem({ item, kind }) {
  const coursework = item.coursework
    ? item.coursework.split(",").map((entry) => entry.trim())
    : [];

  return (
    <li className="relative pl-8">
      <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-accent-violet shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
      <span className="absolute left-1.5 top-4 bottom-[-2rem] w-px bg-border-subtle last:hidden" />

      <p className="font-heading text-xs uppercase tracking-wide text-accent-teal">
        {kind} · {item.dates}
      </p>
      <h3 className="mt-1 font-heading text-lg font-semibold text-text-primary">
        {item.role}
      </h3>
      <p className="text-sm text-text-muted">
        {item.org}
        {item.location && <span className="text-text-muted/70"> — {item.location}</span>}
      </p>

      {item.bullets && (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-text-muted">
          {item.bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      )}

      {item.roles && item.roles.length > 0 && (
        <ul className="mt-4 space-y-2">
          {item.roles.map((role) => (
            <li
              key={role.title}
              className="border-l-2 border-accent-violet/40 pl-3"
            >
              <p className="font-heading text-xs text-text-primary">
                {role.title}
              </p>
              <p className="text-xs text-text-muted">{role.detail}</p>
            </li>
          ))}
        </ul>
      )}

      {coursework.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {coursework.map((course) => (
            <li
              key={course}
              className="rounded-sm border border-border-subtle px-2 py-0.5 text-xs text-text-muted"
            >
              {course}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
