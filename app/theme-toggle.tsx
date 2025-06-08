"use client";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
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