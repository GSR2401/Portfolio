export default function Section({
  id,
  title,
  children,
  className = "",
  fullHeight = true,
}) {
  const headingId = `${id}-heading`;
  const heightClasses = fullHeight
    ? "min-h-[calc(100vh-65px)] justify-center"
    : "justify-start";

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`mx-auto flex max-w-5xl flex-col ${heightClasses} px-4 py-16 sm:px-8 md:py-24 ${className}`}
    >
      <h2
        id={headingId}
        className="font-heading text-2xl font-semibold text-text-primary"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
