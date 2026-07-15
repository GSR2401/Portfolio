import { writing, writingIntro } from "../data/content";

export default function Writing() {
  if (writing.length === 0) return null;

  return (
    <section
      id="writing"
      aria-labelledby="writing-heading"
      className="mx-auto max-w-5xl px-4 py-16 sm:px-8 md:py-24"
    >
      <h2
        id="writing-heading"
        className="font-heading text-2xl font-semibold text-text-primary"
      >
        Writing
      </h2>
      <p className="mt-4 max-w-2xl text-text-muted">{writingIntro}</p>
      <ul className="mt-8 rounded-lg border border-border-subtle bg-bg-surface px-4">
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
    </section>
  );
}
