import { profile } from "../data/content";
import Section from "./layout/Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-text-muted sm:text-lg">
        {profile.bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-4 text-sm text-text-muted">{profile.location}</p>
    </Section>
  );
}
