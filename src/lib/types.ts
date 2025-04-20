export interface GradientColors {
  colorOne: string;
  colorTwo: string;
  colorThree: string;
  angle: number;
  type: 'linear' | 'radial';
}

export interface ThemeColors {
  primary: string;
  accent: string;
  background: string;
  foreground: string;
  text: string;
  mutedText: string;
  border: string;
}

export interface ThemeConfig {
  colors: ThemeColors;
  gradient: GradientColors;
  name: string;
  isDark: boolean;
}

export interface UserSettings {
  theme: ThemeConfig;
  sidebarCollapsed: boolean;
  clockFormat24h: boolean;
  showDate: boolean;
  showClock: boolean;
}
