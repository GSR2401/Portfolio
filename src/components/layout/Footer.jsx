import { profile, socials } from "../../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle/60 px-4 py-8 text-center sm:px-8">
      <p className="font-heading text-xs text-text-muted">
        © {new Date().getFullYear()} {profile.name} — built with React, Vite &amp; Tailwind.
      </p>
      <div className="mt-2 flex justify-center gap-4 text-xs">
        <a
          href={socials.github}
          target="_blank"
          rel="noreferrer"
          className="text-text-muted hover:text-accent-blue"
        >
          GitHub
        </a>
        <a
          href={socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-text-muted hover:text-accent-blue"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${socials.email}`}
          className="text-text-muted hover:text-accent-blue"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
