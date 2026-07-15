import { education } from "../data/content";
import TimelineItem from "./TimelineItem";

export default function Education() {
  if (education.length === 0) return null;

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="mx-auto max-w-5xl px-4 py-16 sm:px-8 md:py-24"
    >
      <h2
        id="education-heading"
        className="font-heading text-2xl font-semibold text-text-primary"
      >
        Education
      </h2>
      <ul className="mt-8 space-y-8">
        {education.map((item) => (
          <TimelineItem key={item.id} item={item} kind="Education" />
        ))}
      </ul>
    </section>
  );
}
