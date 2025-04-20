"use client";

import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Clock } from "@/components/Clock";
import { BottomNav } from "@/components/BottomNav";
import { useTheme } from "@/contexts/ThemeContext";

export default function Home() {
  const { settings } = useTheme();
  const { theme, showClock } = settings;

  return (
    <main className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-14">
          <Sidebar />
        </div>
        <div
          className="flex-1 flex justify-center items-center overflow-hidden"
          style={{
            backgroundImage: `url(https://ext.same-assets.com/4041918963/1352368609.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="flex flex-col items-center justify-center p-4">
            {showClock && <Clock />}
          </div>
        </div>
      </div>
      <BottomNav />
    </main>
  );
}
