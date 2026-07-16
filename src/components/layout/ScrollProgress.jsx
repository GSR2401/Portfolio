import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0;
      setPercent(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex"
    >
      <span className="font-heading text-xs font-semibold tabular-nums text-accent-teal">
        {Math.round(percent)}%
      </span>

      <div className="relative h-56 w-px">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--color-border-subtle) 16px, var(--color-border-subtle) calc(100% - 16px), transparent)",
          }}
        />
        <div
          className="absolute left-0 top-0 w-full bg-gradient-to-b from-accent-teal to-accent-blue shadow-[0_0_8px_rgba(56,189,248,0.7)]"
          style={{ height: `${percent}%` }}
        />
        <div
          className="absolute left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-accent-blue shadow-[0_0_8px_rgba(56,189,248,0.9)]"
          style={{ top: `${percent}%` }}
        />
      </div>

      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-border-subtle bg-bg-surface">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="text-accent-teal">
          <path
            d="M12 2.5c2.4 2.1 3.6 5 3.6 8.2 0 2.1-.5 4.1-1.4 5.9l-2.2 2.9-2.2-2.9c-.9-1.8-1.4-3.8-1.4-5.9 0-3.2 1.2-6.1 3.6-8.2z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="9.5" r="1.4" fill="currentColor" />
          <path
            d="M9.4 14.5l-2.6 1.4.6-3.1M14.6 14.5l2.6 1.4-.6-3.1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
