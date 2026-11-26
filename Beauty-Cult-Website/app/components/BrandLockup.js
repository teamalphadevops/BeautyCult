import Emblem from "./Emblem";

// Full logo: emblem + name + tagline + categories.
export default function BrandLockup({ id = "lockup" }) {
  return (
    <div className="lockup" role="img" aria-label="Beauty Cult — Beauty Beyond Ordinary. Hair, Skin, Nails, Makeup, Wellness">
      <Emblem id={id} className="lockup-emblem" />
      <div className="lockup-name">Beauty Cult</div>
      <div className="lockup-tag">
        <span className="lockup-line" />
        Beauty Beyond Ordinary
        <span className="lockup-line" />
      </div>
      <div className="lockup-cats">
        {["Hair", "Skin", "Nails", "Makeup", "Wellness"].map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>
    </div>
  );
}
