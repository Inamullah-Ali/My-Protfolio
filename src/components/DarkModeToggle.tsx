import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-20 right-6 z-50 p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:bg-accent transition-all duration-300 shadow-lg dark:border-primary/40 dark:shadow-[0_0_20px_rgba(124,58,237,0.3)] dark:hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-foreground" />
      ) : (
        <Moon className="w-5 h-5 text-foreground" />
      )}
    </button>
  );
}
