import { publications } from "../data/content";

export default function Publications() {
  if (publications.length === 0) return null;

  return (
    <section
      id="publications"
      aria-labelledby="publications-heading"
      className="mx-auto max-w-5xl px-4 py-16 sm:px-8 md:py-24"
    >
      <h2
        id="publications-heading"
        className="font-heading text-2xl font-semibold text-text-primary"
      >
        Publications
      </h2>
      <ul className="mt-8 space-y-4">
        {publications.map((publication, index) => (
          <li key={publication.link} className="flex gap-3 text-sm">
            <span className="font-heading text-accent-teal">
              [{index + 1}]
            </span>
            <div>
              <a
                href={publication.link}
                target="_blank"
                rel="noreferrer"
                className="text-accent-blue leading-relaxed hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded"
              >
                {publication.title}
              </a>
              <p className="mt-1 text-xs text-text-muted">
                {publication.venue} · {publication.date}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
