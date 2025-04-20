"use client";

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { ThemeConfig, UserSettings } from "@/lib/types";
import { defaultDarkTheme, getGradientBackground } from "@/lib/theme-config";

// Default settings
const defaultSettings: UserSettings = {
  theme: defaultDarkTheme,
  sidebarCollapsed: false,
  clockFormat24h: true,
  showDate: true,
  showClock: true,
};

interface ThemeContextProps {
  settings: UserSettings;
  updateTheme: (theme: ThemeConfig) => void;
  updateSettings: (settings: Partial<UserSettings>) => void;
  resetToDefaults: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<UserSettings>(defaultSettings);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem("sunset-settings");
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
      } catch (e) {
        console.error("Failed to parse settings from localStorage", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save settings to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("sunset-settings", JSON.stringify(settings));
    }
  }, [settings, isLoaded]);

  // Apply CSS variables based on theme
  useEffect(() => {
    if (!isLoaded) return;

    const root = document.documentElement;
    const { colors, gradient } = settings.theme;

    // Set color variables
    root.style.setProperty("--primary", colors.primary);
    root.style.setProperty("--accent", colors.accent);
    root.style.setProperty("--background", colors.background);
    root.style.setProperty("--foreground", colors.foreground);
    root.style.setProperty("--text", colors.text);
    root.style.setProperty("--muted-text", colors.mutedText);
    root.style.setProperty("--border", colors.border);

    // Set gradient variables
    root.style.setProperty("--gradient-1", gradient.colorOne);
    root.style.setProperty("--gradient-2", gradient.colorTwo);
    root.style.setProperty("--gradient-3", gradient.colorThree);
    root.style.setProperty("--gradient-angle", `${gradient.angle}deg`);

    // Set gradient background
    const gradientBg = getGradientBackground(settings.theme);
    root.style.setProperty("--gradient-background", gradientBg);

  }, [settings.theme, isLoaded]);

  const updateTheme = (theme: ThemeConfig) => {
    setSettings((prev) => ({ ...prev, theme }));
  };

  const updateSettings = (newSettings: Partial<UserSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const resetToDefaults = () => {
    setSettings(defaultSettings);
  };

  return (
    <ThemeContext.Provider
      value={{ settings, updateTheme, updateSettings, resetToDefaults }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
