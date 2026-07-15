import { skills } from "../data/content";

export default function Skills() {
  const categories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="mx-auto max-w-5xl px-4 py-16 sm:px-8 md:py-24"
    >
      <h2
        id="skills-heading"
        className="font-heading text-2xl font-semibold text-text-primary"
      >
        Skills
      </h2>
      <div className="mt-8 space-y-6">
        {categories.map((category) => (
          <div key={category}>
            <p className="font-heading text-xs uppercase tracking-wide text-accent-teal">
              {category}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <li
                    key={skill.name}
                    className="rounded-md border border-border-subtle bg-bg-surface px-3 py-1.5 font-heading text-sm text-text-primary"
                  >
                    {skill.name}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
