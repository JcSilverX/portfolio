import { useActiveSectionContext } from "@/context/active-section-context";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from './types';
import { ThemeContext } from "@/context/theme-context";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}

export function useTheme() {
  const context = useContext(ThemeContext);
  
  if (context === null) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }

  return context;
}