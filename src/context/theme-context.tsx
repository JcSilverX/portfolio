'use client';

import { Theme } from '@/lib/types';
import React, { useEffect, useState, createContext } from 'react'

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps ) {
  const [theme, setTheme] = useState<Theme>('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      window.localStorage.setItem('theme', 'dark');

      document.documentElement.setAttribute('data-jsx-theme', 'dark');
    } else {
      setTheme('light');
      window.localStorage.setItem('theme', 'light');

      document.documentElement.setAttribute('data-jsx-theme', 'light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null;

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === 'dark') {
        document.documentElement.setAttribute('data-jsx-theme', 'dark');
      }

    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.setAttribute('data-jsx-theme', 'dark');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
