import { useEffect, useState } from "react";

function getScrollProgress() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollableHeight <= 0) return 0;

  return Math.min(1, Math.max(0, window.scrollY / scrollableHeight));
}

export default function useScrollProgress() {
  const [progress, setProgress] = useState(getScrollProgress);

  useEffect(() => {
    let frameId = null;

    const updateProgress = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        setProgress(getScrollProgress());
      });
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return progress;
}
