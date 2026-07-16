import { education } from "../data/content";
import TimelineItem from "./TimelineItem";
import Section from "./layout/Section";

export default function Education() {
  if (education.length === 0) return null;

  return (
    <Section id="education" title="Education">
      <ul className="mt-8 space-y-8">
        {education.map((item) => (
          <TimelineItem key={item.id} item={item} kind="Education" />
        ))}
      </ul>
    </Section>
  );
}
