"use client";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    
    const {theme , setTheme} = useTheme();
    return (
        <button className="fixed bottom-5 text-primary-light dark:bg-primary-light rounded-full"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
           change theme
        </button>
    )
}