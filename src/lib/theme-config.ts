import { ThemeConfig } from './types';

export const defaultDarkTheme: ThemeConfig = {
  name: 'Default Dark',
  isDark: true,
  colors: {
    primary: '#2f2e2e',
    accent: '#2cba79',
    background: '#090909',
    foreground: '#121212',
    text: '#ffffff',
    mutedText: '#8f8f8f',
    border: '#333333',
  },
  gradient: {
    colorOne: '#1a1a1a',
    colorTwo: '#2a2a2a',
    colorThree: '#333333',
    angle: 135,
    type: 'linear',
  },
};

export const oceanBlueTheme: ThemeConfig = {
  name: 'Ocean Blue',
  isDark: true,
  colors: {
    primary: '#152450',
    accent: '#2f65cc',
    background: '#090909',
    foreground: '#0c1428',
    text: '#ffffff',
    mutedText: '#8f8f8f',
    border: '#1f3366',
  },
  gradient: {
    colorOne: '#101c3c',
    colorTwo: '#1e3a6d',
    colorThree: '#254a8a',
    angle: 145,
    type: 'linear',
  },
};

export const emeraldTheme: ThemeConfig = {
  name: 'Emerald',
  isDark: true,
  colors: {
    primary: '#0f261a',
    accent: '#2cba79',
    background: '#090909',
    foreground: '#0d1f16',
    text: '#ffffff',
    mutedText: '#8f8f8f',
    border: '#1b5b3a',
  },
  gradient: {
    colorOne: '#0a1a12',
    colorTwo: '#153828',
    colorThree: '#1b5b3a',
    angle: 125,
    type: 'linear',
  },
};

export const themes: ThemeConfig[] = [
  defaultDarkTheme,
  oceanBlueTheme,
  emeraldTheme,
];

export function getThemeByName(name: string): ThemeConfig {
  const found = themes.find((theme) => theme.name === name);
  return found || defaultDarkTheme;
}

export function getGradientBackground(theme: ThemeConfig): string {
  const { gradient } = theme;
  const { colorOne, colorTwo, colorThree, angle, type } = gradient;

  if (type === 'linear') {
    return `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo}, ${colorThree})`;
  }

  return `radial-gradient(circle, ${colorOne}, ${colorTwo}, ${colorThree})`;
}
