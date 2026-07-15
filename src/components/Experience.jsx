import { experience } from "../data/content";
import TimelineItem from "./TimelineItem";

export default function Experience() {
  if (experience.length === 0) return null;

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto max-w-5xl px-4 py-16 sm:px-8 md:py-24"
    >
      <h2
        id="experience-heading"
        className="font-heading text-2xl font-semibold text-text-primary"
      >
        Experience
      </h2>
      <ul className="mt-8 space-y-8">
        {experience.map((item) => (
          <TimelineItem key={item.id} item={item} kind="Work" />
        ))}
      </ul>
    </section>
  );
}
