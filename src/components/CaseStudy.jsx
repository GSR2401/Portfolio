export default function CaseStudy({ project }) {
  return (
    <div className="mt-12 rounded-lg border border-accent-violet/40 bg-bg-surface p-6 sm:p-8">
      <p className="font-heading text-xs uppercase tracking-wide text-accent-violet">
        Case Study
      </p>
      <h3 className="mt-1 font-heading text-xl font-semibold text-text-primary">
        {project.title}
      </h3>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div>
          <p className="font-heading text-xs uppercase tracking-wide text-accent-teal">
            The Problem
          </p>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">
            Most personal-memory tools require uploading screenshots, voice
            notes, and files to a cloud provider to get captioning,
            transcription, or semantic search. For anything sensitive, that's
            a non-starter.
          </p>
        </div>
        <div>
          <p className="font-heading text-xs uppercase tracking-wide text-accent-teal">
            The Approach
          </p>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">
            The entire pipeline runs on-device: screenshots are captioned
            locally with BLIP, voice notes transcribed locally with Whisper,
            and both embedded and indexed with FAISS and SQLite. A Streamlit
            interface sits on top for natural-language search, weekly
            reflections, and optional local summarization through Ollama —
            nothing ever leaves the machine.
          </p>
        </div>
        <div>
          <p className="font-heading text-xs uppercase tracking-wide text-accent-teal">
            Trade-offs
          </p>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">
            Keeping everything local means giving up the scale of a hosted
            vector database and hosted captioning/transcription APIs. FAISS
            and SQLite comfortably handle a single user's archive but
            wouldn't scale to a multi-tenant product without real
            re-architecture — an acceptable trade when the product's entire
            value is that your data never leaves your machine.
          </p>
        </div>
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-block font-heading text-sm text-accent-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded"
      >
        Code →
      </a>
    </div>
  );
}
