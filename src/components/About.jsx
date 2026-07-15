import { profile } from "../data/content";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-5xl px-4 py-16 sm:px-8 md:py-24"
    >
      <h2
        id="about-heading"
        className="font-heading text-2xl font-semibold text-text-primary"
      >
        About
      </h2>
      <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-text-muted sm:text-lg">
        {profile.bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-4 text-sm text-text-muted">{profile.location}</p>
    </section>
  );
}
