import { useEffect, useState } from "react";
import { BrandLogo } from "./brand-logo";

export function LoadingSplash() {
  const [gone, setGone] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setGone(true), 900);
    const t2 = setTimeout(() => setHide(true), 1500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (hide) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500"
      style={{ opacity: gone ? 0 : 1, pointerEvents: gone ? "none" : "auto" }}
    >
      <div
        className="transition-transform duration-700 ease-out"
        style={{ transform: gone ? "scale(1)" : "scale(0.96)" }}
      >
        <BrandLogo size={56} withWordmark={false} />
      </div>
    </div>
  );
}
