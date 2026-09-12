const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconLeaf({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 20C4 11 10 4 20 4c0 10-7 16-16 16Z" />
      <path d="M4 20c3-5 7-8 12-10" />
    </svg>
  );
}

export function IconSprout({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 20V11" />
      <path d="M12 11c0-3.5-2.5-6-7-6 0 3.8 2.8 6 7 6Z" />
      <path d="M12 8c0-2.5 2-4.5 5-4.5 0 2.7-2 4.5-5 4.5Z" />
    </svg>
  );
}

export function IconSatchel({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="4" y="9" width="16" height="11" rx="2" />
      <path d="M8 9V7a4 4 0 0 1 8 0v2" />
    </svg>
  );
}

export function IconMarket({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 9h16l-1.5 10H5.5L4 9Z" />
      <path d="M8 9V6a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export function IconUser({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c1.5-4 4-6 7-6s5.5 2 7 6" />
    </svg>
  );
}

export function IconDumbbell({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M6 8v8M18 8v8M2 11v2M22 11v2M6 12h12" />
    </svg>
  );
}

export function IconBook({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z" />
      <path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5v-13Z" />
    </svg>
  );
}

export function IconDroplet({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 3c3.5 4.2 6 7.6 6 10.5a6 6 0 1 1-12 0C6 10.6 8.5 7.2 12 3Z" />
    </svg>
  );
}

export function IconFlame({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 2c1 3-3 4.5-3 8a3 3 0 1 0 6 0c1.5 1.3 2 3 2 4.5A5 5 0 0 1 7 14c0-4.5 4-6 5-12Z" />
    </svg>
  );
}