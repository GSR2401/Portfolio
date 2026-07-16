import { experience } from "../data/content";
import TimelineItem from "./TimelineItem";
import Section from "./layout/Section";

export default function Experience() {
  if (experience.length === 0) return null;

  return (
    <Section id="experience" title="Experience">
      <ul className="mt-8 space-y-8">
        {experience.map((item) => (
          <TimelineItem key={item.id} item={item} kind="Work" />
        ))}
      </ul>
    </Section>
  );
}
