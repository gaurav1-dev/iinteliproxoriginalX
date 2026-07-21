type Props = {
  /** Mark height in px; wordmark scales proportionally. */
  size?: number;
  /** Show the "iinteliprox" wordmark next to the mark. */
  withWordmark?: boolean;
  className?: string;
};

/**
 * Original iP mark extracted from the iinteliprox business card.
 * Never recolored, stretched, or restyled.
 */
export function BrandLogo({ size = 28, withWordmark = true, className }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <img
        src="/ip-logo.png"
        alt="iinteliprox"
        width={size}
        height={size}
        style={{ height: size, width: "auto" }}
        className="block select-none"
        draggable={false}
      />
      {withWordmark ? (
        <span
          className="font-semibold tracking-tight text-foreground"
          style={{ fontSize: size * 0.62, letterSpacing: "-0.01em" }}
        >
          iinteliprox
        </span>
      ) : null}
    </span>
  );
}
