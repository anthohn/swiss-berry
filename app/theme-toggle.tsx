"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Définir mounted à true une fois que le composant est monté côté client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Rendu par défaut pour le serveur (cohérent avec defaultTheme="system")
  if (!mounted) {
    return (
      <button
        className="text-primary-light dark:text-primary-dark"
        onClick={() => setTheme("light")}
        aria-label="Changer le thème"
      >
        ☀️
      </button>
    );
  }

  // Rendu côté client après montage
  return (
    <button
      className="text-primary-light dark:text-primary-dark"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Changer le thème"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}