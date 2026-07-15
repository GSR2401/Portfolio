import { profile } from "../data/content";

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="mx-auto flex max-w-5xl flex-col items-start px-4 py-24 sm:px-8 md:py-32"
    >
      <p className="mb-4 font-heading text-sm text-accent-teal">Hi, I'm</p>
      <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl lg:text-6xl">
        {profile.name}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-text-muted sm:text-xl">
        {profile.tagline}
      </p>
      <p className="mt-3 font-heading text-xs text-text-muted">
        <span className="text-accent-teal">Currently exploring:</span>{" "}
        {profile.currentlyExploring}
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="rounded-md bg-accent-blue px-5 py-2.5 font-heading text-sm font-semibold text-bg-primary transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-md border border-border-subtle px-5 py-2.5 font-heading text-sm font-semibold text-text-primary transition-colors hover:border-accent-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
