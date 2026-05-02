type Props = {
  className?: string;
  title?: string;
};

export function Wordmark({ className = "", title = "Desires" }: Props) {
  return (
    <span className={`wordmark ${className}`} aria-label={title}>
      DESIRES
    </span>
  );
}
