"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { BottomNav } from "@/components/BottomNav";
import { useTheme } from "@/contexts/ThemeContext";
import { themes } from "@/lib/theme-config";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
  const { settings, updateTheme, updateSettings, resetToDefaults } = useTheme();
  const { theme } = settings;

  const [customTheme, setCustomTheme] = useState({ ...theme });

  // Apply custom theme
  const applyCustomTheme = () => {
    updateTheme(customTheme);
  };

  // Handle color input changes
  const handleColorChange = (type: string, color: string) => {
    if (type === 'primary') {
      setCustomTheme(prev => ({
        ...prev,
        colors: { ...prev.colors, primary: color }
      }));
    } else if (type === 'accent') {
      setCustomTheme(prev => ({
        ...prev,
        colors: { ...prev.colors, accent: color }
      }));
    }
  };

  // Handle gradient color changes
  const handleGradientChange = (position: number, color: string) => {
    if (position === 1) {
      setCustomTheme(prev => ({
        ...prev,
        gradient: { ...prev.gradient, colorOne: color }
      }));
    } else if (position === 2) {
      setCustomTheme(prev => ({
        ...prev,
        gradient: { ...prev.gradient, colorTwo: color }
      }));
    } else if (position === 3) {
      setCustomTheme(prev => ({
        ...prev,
        gradient: { ...prev.gradient, colorThree: color }
      }));
    }
  };

  // Handle gradient angle change
  const handleAngleChange = (value: number[]) => {
    setCustomTheme(prev => ({
      ...prev,
      gradient: { ...prev.gradient, angle: value[0] }
    }));
  };

  // Handle gradient type change
  const handleGradientTypeChange = (type: 'linear' | 'radial') => {
    setCustomTheme(prev => ({
      ...prev,
      gradient: { ...prev.gradient, type }
    }));
  };

  // Preview style for gradient
  const gradientPreviewStyle = {
    background: customTheme.gradient.type === 'linear'
      ? `linear-gradient(${customTheme.gradient.angle}deg, ${customTheme.gradient.colorOne}, ${customTheme.gradient.colorTwo}, ${customTheme.gradient.colorThree})`
      : `radial-gradient(circle, ${customTheme.gradient.colorOne}, ${customTheme.gradient.colorTwo}, ${customTheme.gradient.colorThree})`
  };

  return (
    <main className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-14">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-y-auto p-4 pb-20 bg-background">
          <h1 className="text-2xl font-bold mb-6">Settings</h1>

          <Tabs defaultValue="appearance">
            <TabsList className="mb-4">
              <TabsTrigger value="appearance">Appearance</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>

            <TabsContent value="appearance">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Theme Selection</CardTitle>
                    <CardDescription>Choose from predefined themes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {themes.map((themeOption) => (
                        <div
                          key={themeOption.name}
                          className="p-4 border border-border rounded-md cursor-pointer hover:bg-foreground/5 transition-colors"
                          onClick={() => updateTheme(themeOption)}
                        >
                          <div
                            className="h-20 rounded-md mb-2"
                            style={{
                              background: `linear-gradient(${themeOption.gradient.angle}deg, ${themeOption.gradient.colorOne}, ${themeOption.gradient.colorTwo}, ${themeOption.gradient.colorThree})`
                            }}
                          />
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{themeOption.name}</span>
                            <div className="flex gap-2">
                              <div
                                className="w-4 h-4 rounded-full border border-border"
                                style={{ background: themeOption.colors.primary }}
                              />
                              <div
                                className="w-4 h-4 rounded-full border border-border"
                                style={{ background: themeOption.colors.accent }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Custom Theme</CardTitle>
                    <CardDescription>Create your own custom theme</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="h-40 rounded-md mb-4" style={gradientPreviewStyle} />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-medium mb-3">Primary Colors</h3>
                          <div className="space-y-4">
                            <div>
                              <Label>Primary Color</Label>
                              <div className="flex items-center gap-2 mt-1">
                                <div
                                  className="w-8 h-8 rounded-md border border-border"
                                  style={{ background: customTheme.colors.primary }}
                                />
                                <Input
                                  type="text"
                                  value={customTheme.colors.primary}
                                  onChange={(e) => handleColorChange('primary', e.target.value)}
                                />
                                <Input
                                  type="color"
                                  value={customTheme.colors.primary}
                                  className="w-10 h-10 p-0 overflow-hidden"
                                  onChange={(e) => handleColorChange('primary', e.target.value)}
                                />
                              </div>
                            </div>

                            <div>
                              <Label>Accent Color</Label>
                              <div className="flex items-center gap-2 mt-1">
                                <div
                                  className="w-8 h-8 rounded-md border border-border"
                                  style={{ background: customTheme.colors.accent }}
                                />
                                <Input
                                  type="text"
                                  value={customTheme.colors.accent}
                                  onChange={(e) => handleColorChange('accent', e.target.value)}
                                />
                                <Input
                                  type="color"
                                  value={customTheme.colors.accent}
                                  className="w-10 h-10 p-0 overflow-hidden"
                                  onChange={(e) => handleColorChange('accent', e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium mb-3">Gradient</h3>
                          <div className="space-y-4">
                            <div className="flex items-center gap-3">
                              <div>
                                <Label>Type</Label>
                                <div className="flex items-center gap-2 mt-1">
                                  <button
                                    className={`px-3 py-1 rounded-md ${customTheme.gradient.type === 'linear' ? 'bg-foreground/20' : 'bg-foreground/5'}`}
                                    onClick={() => handleGradientTypeChange('linear')}
                                  >
                                    Linear
                                  </button>
                                  <button
                                    className={`px-3 py-1 rounded-md ${customTheme.gradient.type === 'radial' ? 'bg-foreground/20' : 'bg-foreground/5'}`}
                                    onClick={() => handleGradientTypeChange('radial')}
                                  >
                                    Radial
                                  </button>
                                </div>
                              </div>

                              {customTheme.gradient.type === 'linear' && (
                                <div className="flex-1">
                                  <Label>Angle: {customTheme.gradient.angle}°</Label>
                                  <Slider
                                    value={[customTheme.gradient.angle]}
                                    min={0}
                                    max={360}
                                    step={1}
                                    onValueChange={handleAngleChange}
                                    className="mt-1"
                                  />
                                </div>
                              )}
                            </div>

                            <div>
                              <Label>Color 1</Label>
                              <div className="flex items-center gap-2 mt-1">
                                <div
                                  className="w-8 h-8 rounded-md border border-border"
                                  style={{ background: customTheme.gradient.colorOne }}
                                />
                                <Input
                                  type="text"
                                  value={customTheme.gradient.colorOne}
                                  onChange={(e) => handleGradientChange(1, e.target.value)}
                                />
                                <Input
                                  type="color"
                                  value={customTheme.gradient.colorOne}
                                  className="w-10 h-10 p-0 overflow-hidden"
                                  onChange={(e) => handleGradientChange(1, e.target.value)}
                                />
                              </div>
                            </div>

                            <div>
                              <Label>Color 2</Label>
                              <div className="flex items-center gap-2 mt-1">
                                <div
                                  className="w-8 h-8 rounded-md border border-border"
                                  style={{ background: customTheme.gradient.colorTwo }}
                                />
                                <Input
                                  type="text"
                                  value={customTheme.gradient.colorTwo}
                                  onChange={(e) => handleGradientChange(2, e.target.value)}
                                />
                                <Input
                                  type="color"
                                  value={customTheme.gradient.colorTwo}
                                  className="w-10 h-10 p-0 overflow-hidden"
                                  onChange={(e) => handleGradientChange(2, e.target.value)}
                                />
                              </div>
                            </div>

                            <div>
                              <Label>Color 3</Label>
                              <div className="flex items-center gap-2 mt-1">
                                <div
                                  className="w-8 h-8 rounded-md border border-border"
                                  style={{ background: customTheme.gradient.colorThree }}
                                />
                                <Input
                                  type="text"
                                  value={customTheme.gradient.colorThree}
                                  onChange={(e) => handleGradientChange(3, e.target.value)}
                                />
                                <Input
                                  type="color"
                                  value={customTheme.gradient.colorThree}
                                  className="w-10 h-10 p-0 overflow-hidden"
                                  onChange={(e) => handleGradientChange(3, e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 flex justify-end">
                        <button
                          className="px-4 py-2 bg-[var(--accent)] text-white rounded-md hover:bg-opacity-90 transition-colors"
                          onClick={applyCustomTheme}
                        >
                          Apply Custom Theme
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="preferences">
              <Card>
                <CardHeader>
                  <CardTitle>Display Preferences</CardTitle>
                  <CardDescription>Configure how the app behaves</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="clock-format">24-hour clock format</Label>
                        <p className="text-sm text-white/60">Toggle between 12h and 24h time format</p>
                      </div>
                      <Switch
                        id="clock-format"
                        checked={settings.clockFormat24h}
                        onCheckedChange={(checked) => updateSettings({ clockFormat24h: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="show-date">Show date</Label>
                        <p className="text-sm text-white/60">Display the date below the clock</p>
                      </div>
                      <Switch
                        id="show-date"
                        checked={settings.showDate}
                        onCheckedChange={(checked) => updateSettings({ showDate: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="show-clock">Show clock</Label>
                        <p className="text-sm text-white/60">Display the clock on the home screen</p>
                      </div>
                      <Switch
                        id="show-clock"
                        checked={settings.showClock}
                        onCheckedChange={(checked) => updateSettings({ showClock: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="sidebar-collapse">Collapse sidebar</Label>
                        <p className="text-sm text-white/60">Show only icons in the sidebar</p>
                      </div>
                      <Switch
                        id="sidebar-collapse"
                        checked={settings.sidebarCollapsed}
                        onCheckedChange={(checked) => updateSettings({ sidebarCollapsed: checked })}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6 text-center">
                <button
                  className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
                  onClick={resetToDefaults}
                >
                  Reset to Default Settings
                </button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <BottomNav />
    </main>
  );
}
