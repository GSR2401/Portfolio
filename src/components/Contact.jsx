import { socials } from "../data/content";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-5xl px-4 py-16 sm:px-8 md:py-24"
    >
      <h2
        id="contact-heading"
        className="font-heading text-2xl font-semibold text-text-primary"
      >
        Contact
      </h2>
      <p className="mt-4 max-w-xl text-text-muted">
        Interested in AI agents, or just want to say hi? Reach out through any
        of the channels below.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={`mailto:${socials.email}`}
          className="rounded-md bg-accent-blue px-5 py-2.5 font-heading text-sm font-semibold text-bg-primary transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
        >
          Email Me
        </a>
        <a
          href={socials.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          className="rounded-md border border-border-subtle px-5 py-2.5 font-heading text-sm font-semibold text-text-primary transition-colors hover:border-accent-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
        >
          GitHub
        </a>
        <a
          href={socials.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          className="rounded-md border border-border-subtle px-5 py-2.5 font-heading text-sm font-semibold text-text-primary transition-colors hover:border-accent-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
