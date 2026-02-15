import { useState, useEffect, useCallback } from "react";

type Theme = "light" | "dark";

// TODO: Light/Dark mode temporarily disabled for branding consistency
// Can be re-enabled in future release by removing the forced "dark" return
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, [theme]);

  // TODO: Re-enable toggle when light mode branding is finalized
  const toggleTheme = useCallback(() => {
    // setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggleTheme };
}
