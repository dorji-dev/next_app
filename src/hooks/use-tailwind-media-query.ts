import { TailwindBreakPoints } from "@/lib/types/misc";
import { useEffect, useState } from "react";

/**
 * A hook to dynamically query device size based on tailwind default breakpoints.
 * Checks for the minimum width query: `(min-width: ${tailwindMediaWidth}px)` to make it compliant with 
 * tailwind default media breakpoint classes like `sm | md | lg | xl | 2xl`
 * @param tailwindMediaWidth: "640" | "768" | "1024" | "1280" | "1536"
 * @returns
 */
export function useTailwindMediaQuery(
  tailwindMediaWidth: TailwindBreakPoints
) {
  const [mediaMatches, setMediaMatches] = useState(false);
  const [isChecking, setIsChecking] = useState(false); // 

  useEffect(() => {
    setIsChecking(true);
    const mediaWatcher = window.matchMedia(
      `(min-width: ${tailwindMediaWidth}px)`
    );
    setMediaMatches(mediaWatcher.matches);
    setIsChecking(false);

    function updateMediaMatch(e: MediaQueryListEvent) {
      setMediaMatches(e.matches);
    }

    mediaWatcher.addEventListener("change", updateMediaMatch);

    return function cleanup() {
      mediaWatcher.removeEventListener("change", updateMediaMatch);
    };
  }, [tailwindMediaWidth]);

  return {
    mediaMatches,
    isChecking,
  };
}
