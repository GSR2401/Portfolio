import profileImage from "../assets/profile.png";

export default function ProfilePortrait() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-lg border border-border-subtle bg-bg-surface shadow-[0_0_20px_rgba(45,212,191,0.15)]">
      <div className="border-b border-border-subtle px-3 py-2 text-center">
        <p className="font-heading text-xs text-text-muted">~/shreyas.png</p>
      </div>
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={profileImage}
          alt="Shreyas Reddy Gaddampally"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
