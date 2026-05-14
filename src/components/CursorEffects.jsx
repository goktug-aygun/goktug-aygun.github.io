import { useEffect, useRef, useState } from "react";

export default function CursorEffects() {
  const visualRef = useRef(null);
  const frameRef = useRef(0);
  const currentPointRef = useRef({ x: -400, y: -400 });
  const targetPointRef = useRef({ x: -400, y: -400 });
  const [isDesktopPointer, setIsDesktopPointer] = useState(false);

  useEffect(() => {
    const pointerQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 992px)",
    );
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncPointerMode = () => {
      setIsDesktopPointer(pointerQuery.matches && !motionQuery.matches);
    };

    syncPointerMode();
    pointerQuery.addEventListener("change", syncPointerMode);
    motionQuery.addEventListener("change", syncPointerMode);

    return () => {
      pointerQuery.removeEventListener("change", syncPointerMode);
      motionQuery.removeEventListener("change", syncPointerMode);
    };
  }, []);

  useEffect(() => {
    const visual = visualRef.current;

    if (!isDesktopPointer || !visual) {
      visual?.classList.remove("is-visible");
      return undefined;
    }

    const moveGlow = () => {
      const current = currentPointRef.current;
      const target = targetPointRef.current;
      const nextX = current.x + (target.x - current.x) * 0.07;
      const nextY = current.y + (target.y - current.y) * 0.07;

      currentPointRef.current = { x: nextX, y: nextY };

      const { x, y } = currentPointRef.current;
      visual.style.setProperty("--cursor-x", `${x}px`);
      visual.style.setProperty("--cursor-y", `${y}px`);

      if (Math.abs(target.x - x) > 0.2 || Math.abs(target.y - y) > 0.2) {
        frameRef.current = window.requestAnimationFrame(moveGlow);
      } else {
        frameRef.current = 0;
      }
    };

    const handlePointerMove = (event) => {
      targetPointRef.current = { x: event.clientX, y: event.clientY };
      visual.classList.add("is-visible");

      if (!frameRef.current) {
        frameRef.current = window.requestAnimationFrame(moveGlow);
      }
    };

    const handlePointerLeave = () => {
      visual.classList.remove("is-visible");
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = 0;
      }
    };
  }, [isDesktopPointer]);

  if (!isDesktopPointer) return null;

  return (
    <div className="cursor-effect-layer" aria-hidden="true">
      <div ref={visualRef} className="cursor-effect-visual" />
    </div>
  );
}
