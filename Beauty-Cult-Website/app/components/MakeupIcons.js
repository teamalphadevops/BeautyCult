// Small brand-coloured makeup illustrations used in the loading "rain".
const GOLD = "#d9ad62";
const GOLD_DARK = "#a87a35";
const CREAM = "#f6e9cf";
const PINK = "#d81b60";
const BLUSH = "#f4a7b9";
const INK = "#1c0505";

const icons = [
  // Lipstick
  <svg key="lipstick" viewBox="0 0 40 40">
    <path d="M16 18 L16 8 L24 3 L24 18 Z" fill={PINK} />
    <rect x="15" y="17" width="10" height="5" rx="1" fill={GOLD_DARK} />
    <rect x="14" y="22" width="12" height="16" rx="2" fill={GOLD} />
    <rect x="16" y="24" width="2" height="12" rx="1" fill="#fff" opacity="0.35" />
  </svg>,

  // Makeup brush
  <svg key="brush" viewBox="0 0 40 40">
    <path d="M20 1.5 C15 5.5 14 10.5 15 16 L25 16 C26 10.5 25 5.5 20 1.5 Z" fill={BLUSH} />
    <path d="M20 1.5 C17.5 3.5 16.6 6 16.4 8.5 L23.6 8.5 C23.4 6 22.5 3.5 20 1.5 Z" fill={PINK} />
    <rect x="15" y="15.5" width="10" height="6" rx="1" fill={GOLD} />
    <path d="M16 21.5 L24 21.5 L22.5 38 Q20 39.5 17.5 38 Z" fill={INK} stroke={GOLD} strokeWidth="1" />
  </svg>,

  // Nail polish
  <svg key="polish" viewBox="0 0 40 40">
    <rect x="16" y="2" width="8" height="12" rx="1.5" fill={GOLD} />
    <rect x="15" y="13" width="10" height="3.5" rx="1" fill={GOLD_DARK} />
    <rect x="9" y="16" width="22" height="21" rx="6" fill={PINK} />
    <rect x="12" y="19" width="3" height="14" rx="1.5" fill="#fff" opacity="0.35" />
  </svg>,

  // Compact powder
  <svg key="compact" viewBox="0 0 40 40">
    <circle cx="20" cy="20" r="17" fill={GOLD} />
    <circle cx="20" cy="20" r="13" fill="#f2c9b8" />
    <circle cx="23" cy="23" r="6.5" fill="#fbe3d6" />
    <path d="M11 15 A10 10 0 0 1 17 9.5" stroke="#fff" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round" />
  </svg>,

  // Mascara
  <svg key="mascara" viewBox="0 0 40 40">
    <rect x="16.5" y="2" width="7" height="20" rx="3.5" fill={GOLD} />
    <rect x="15.5" y="21" width="9" height="17" rx="3" fill={INK} stroke={GOLD} strokeWidth="1" />
    <rect x="18" y="5" width="1.6" height="14" rx="0.8" fill="#fff" opacity="0.4" />
  </svg>,

  // Perfume bottle
  <svg key="perfume" viewBox="0 0 40 40">
    <rect x="15.5" y="2" width="9" height="7" rx="1.5" fill={GOLD} />
    <rect x="18" y="9" width="4" height="4" fill={GOLD_DARK} />
    <rect x="8" y="13" width="24" height="25" rx="5" fill={CREAM} opacity="0.75" stroke={CREAM} strokeWidth="1" />
    <rect x="10.5" y="22" width="19" height="13.5" rx="3.5" fill={BLUSH} />
    <rect x="11" y="15.5" width="3" height="5" rx="1.5" fill="#fff" opacity="0.6" />
  </svg>,

  // Lips
  <svg key="lips" viewBox="0 0 40 40">
    <path d="M3 20 C8 11 15 10.5 20 15 C25 10.5 32 11 37 20 C32 29 26 32.5 20 32.5 C14 32.5 8 29 3 20 Z" fill={PINK} />
    <path d="M5 20 Q20 24 35 20" stroke="#7a0000" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    <path d="M12 26 Q16 28.5 20 28.5" stroke="#fff" strokeWidth="1.4" fill="none" opacity="0.45" strokeLinecap="round" />
  </svg>,

  // Sparkle
  <svg key="sparkle" viewBox="0 0 40 40">
    <path d="M20 2 L23.5 16.5 L38 20 L23.5 23.5 L20 38 L16.5 23.5 L2 20 L16.5 16.5 Z" fill={GOLD} />
    <circle cx="20" cy="20" r="3" fill="#fff5dc" />
  </svg>,
];

export const ICON_COUNT = icons.length;

export function MakeupIcon({ index }) {
  return icons[index % icons.length];
}
