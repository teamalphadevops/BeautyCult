// Beauty Cult emblem — an original monogram drawn from scratch for this site.
//
//  • A fine gold "C" ring with ball terminals wraps a high-contrast "B".
//  • A lotus crown made of three makeup-brush-tip petals sits in a break in the outer ring.
//  • A small four-point sparkle glints in the opening of the C.
//
// Pass a unique `id` for each emblem on the page (used for the gradient), and `draw`
// to animate the lines drawing themselves (used by the page loader).

export default function Emblem({ id = "bc", draw = false, className = "", title }) {
  const gold = `${id}-gold`;
  const goldFill = `url(#${gold})`;

  return (
    <svg
      viewBox="0 0 200 200"
      className={`emblem ${draw ? "emblem--draw" : ""} ${className}`}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <defs>
        {/* userSpaceOnUse so straight lines (zero-width boxes) still get the gold */}
        <linearGradient id={gold} gradientUnits="userSpaceOnUse" x1="20" y1="10" x2="180" y2="190">
          <stop offset="0" stopColor="#f8e7bd" />
          <stop offset="0.35" stopColor="#d4a556" />
          <stop offset="0.62" stopColor="#f3d9a0" />
          <stop offset="1" stopColor="#a87a35" />
        </linearGradient>
      </defs>

      <g fill="none" stroke={goldFill} strokeLinecap="round" strokeLinejoin="round">
        {/* outer and inner rings, open at the top for the lotus crown */}
        <path className="s s1" pathLength="1" d="M121.8 16.7 A90 90 0 1 1 78.2 16.7" strokeWidth="1.8" />
        <path className="s s1" pathLength="1" d="M123.2 23.3 A84 84 0 1 1 76.8 23.3" strokeWidth="0.8" opacity="0.6" />

        {/* C */}
        <path className="s s2" pathLength="1" d="M141 72 A52 52 0 1 0 141 136" strokeWidth="3.6" />

        {/* B: thick stem, fine bowls, serifs */}
        <path className="s s3" pathLength="1" d="M74 66 V142" strokeWidth="7.5" strokeLinecap="butt" />
        <path className="s s3" pathLength="1" d="M74 66 H95 C114 66 114 102 95 102 H74" strokeWidth="3" />
        <path className="s s3" pathLength="1" d="M74 102 H99 C122 102 122 142 99 142 H74" strokeWidth="3" />
        <path className="s s3" pathLength="1" d="M64 66 H82 M64 142 H82" strokeWidth="2.4" />
      </g>

      <g fill={goldFill}>
        {/* C ball terminals */}
        <circle className="f" cx="141" cy="72" r="3.8" />
        <circle className="f" cx="141" cy="136" r="3.8" />

        {/* lotus crown of brush-tip petals */}
        <g className="f">
          <path d="M100 3 C107.5 12 108 23 100 34 C92 23 92.5 12 100 3 Z" />
          <path d="M100 10 C106 18 106.5 26 100 34 C93.5 26 94 18 100 10 Z" transform="rotate(-40 100 34)" />
          <path d="M100 10 C106 18 106.5 26 100 34 C93.5 26 94 18 100 10 Z" transform="rotate(40 100 34)" />
          <circle cx="100" cy="39" r="2" />
        </g>

        {/* sparkle in the C opening */}
        <path className="f" d="M151 92 L153.3 101.7 L163 104 L153.3 106.3 L151 116 L148.7 106.3 L139 104 L148.7 101.7 Z" />

        {/* ring jewels */}
        <path className="f" d="M100 187 L104.5 194 L100 200 L95.5 194 Z" />
        <circle className="f" cx="10" cy="104" r="2.4" />
        <circle className="f" cx="190" cy="104" r="2.4" />
      </g>
    </svg>
  );
}
