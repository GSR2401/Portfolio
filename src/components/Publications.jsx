import { publications, writing, writingIntro } from "../data/content";
import Section from "./layout/Section";

export default function Publications() {
  if (publications.length === 0 && writing.length === 0) return null;

  return (
    <Section id="publications" title="Publications & Writing">
      {publications.length > 0 && (
        <div className="mt-6">
          <h3 className="font-heading text-sm uppercase tracking-wide text-text-muted">
            Publications
          </h3>
          <ul className="mt-4 space-y-4">
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
        </div>
      )}

      {writing.length > 0 && (
        <div className="mt-10">
          <h3 className="font-heading text-sm uppercase tracking-wide text-text-muted">
            Writing
          </h3>
          <p className="mt-2 max-w-2xl text-text-muted">{writingIntro}</p>
          <ul className="mt-4 rounded-lg border border-border-subtle bg-bg-surface px-4">
            {writing.map((post) => (
              <li
                key={post.link}
                className="flex flex-col gap-1 border-b border-border-subtle py-3 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                  <span className="font-heading text-xs text-accent-teal">
                    {post.date}
                  </span>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-heading text-sm font-semibold text-text-primary hover:text-accent-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded"
                  >
                    {post.title}
                  </a>
                </div>
                <span className="font-heading text-xs text-text-muted">
                  {post.venue}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
