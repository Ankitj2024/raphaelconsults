import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';
type AccentColor = 'orange' | 'blue';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    isDark: boolean;
    accentColor: AccentColor;
    toggleAccentColor: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: 'dark',
    toggleTheme: () => {},
    isDark: true,
    accentColor: 'blue',
    toggleAccentColor: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        const saved = localStorage.getItem('rc-theme');
        return (saved as Theme) || 'dark';
    });

    const [accentColor, setAccentColor] = useState<AccentColor>(() => {
        const saved = localStorage.getItem('rc-accent-color');
        return (saved as AccentColor) || 'blue';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('rc-theme', theme);
        // Sync browser chrome theme colour
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', theme === 'dark' ? '#050505' : '#f4f1eb');
    }, [theme]);

    useEffect(() => {
        document.documentElement.setAttribute('data-accent-color', accentColor);
        localStorage.setItem('rc-accent-color', accentColor);
    }, [accentColor]);

    const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    const toggleAccentColor = () => setAccentColor(prev => prev === 'orange' ? 'blue' : 'orange');

    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme,
            isDark: theme === 'dark',
            accentColor,
            toggleAccentColor
        }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
