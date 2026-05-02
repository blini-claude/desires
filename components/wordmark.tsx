type Props = {
  className?: string;
  variant?: "horizontal" | "stamp";
  title?: string;
};

export function Wordmark({ className = "", variant = "horizontal", title = "Desires" }: Props) {
  if (variant === "stamp") {
    return (
      <svg
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label={title}
        role="img"
      >
        <circle cx="60" cy="60" r="58" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="0.6" />
        <text
          x="60"
          y="56"
          textAnchor="middle"
          fontFamily="var(--font-anton), Anton, sans-serif"
          fontSize="22"
          letterSpacing="2"
          fill="currentColor"
        >
          DESIRES
        </text>
        <text
          x="60"
          y="74"
          textAnchor="middle"
          fontFamily="var(--font-jetbrains), monospace"
          fontSize="6.5"
          letterSpacing="3"
          fill="currentColor"
        >
          WEAR · THE · WANT
        </text>
        <text
          x="60"
          y="92"
          textAnchor="middle"
          fontFamily="var(--font-jetbrains), monospace"
          fontSize="5"
          letterSpacing="2"
          fill="currentColor"
          opacity="0.7"
        >
          EST · MMXXVI
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 720 140"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={title}
      role="img"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <filter id="rough">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="3" />
          <feDisplacementMap in="SourceGraphic" scale="1.6" />
        </filter>
      </defs>
      <text
        x="0"
        y="105"
        fontFamily="var(--font-anton), Anton, sans-serif"
        fontSize="140"
        letterSpacing="-2"
        fill="currentColor"
        filter="url(#rough)"
      >
        DESIRES
      </text>
      <line x1="0" y1="125" x2="720" y2="125" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <text
        x="0"
        y="138"
        fontFamily="var(--font-jetbrains), monospace"
        fontSize="9"
        letterSpacing="6"
        fill="currentColor"
        opacity="0.6"
      >
        EST · MMXXVI · LOS ANGELES
      </text>
    </svg>
  );
}
