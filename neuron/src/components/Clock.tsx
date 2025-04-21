"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export function Clock() {
  const [time, setTime] = useState("00:00:00");
  const [date, setDate] = useState("");
  const { settings } = useTheme();
  const { clockFormat24h, showDate } = settings;

  useEffect(() => {
    // Update time on component mount and every second after
    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [clockFormat24h]); // Re-run if format changes

  const updateTime = () => {
    const now = new Date();

    // Format time based on user preferences
    let hours = now.getHours();
    let timeString = "";

    if (!clockFormat24h) {
      const period = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12; // Convert to 12-hour format
      timeString = `${hours.toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")} ${period}`;
    } else {
      timeString = `${hours.toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;
    }

    setTime(timeString);

    // Format date
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    };
    setDate(now.toLocaleDateString('en-US', options));
  };

  return (
    <div className="text-center">
      <div className="clock-display text-6xl md:text-8xl font-bold text-shadow">
        {time}
      </div>
      {showDate && (
        <div className="text-xl md:text-2xl mt-2 text-white/70 text-shadow">
          {date}
        </div>
      )}
    </div>
  );
}
