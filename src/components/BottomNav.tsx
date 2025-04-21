"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Settings, User, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/proxy", label: "Proxy", icon: User },
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/more", label: "More", icon: MoreHorizontal },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 w-full bg-foreground/10 border-t border-border h-16 z-10">
      <div className="flex items-center justify-around h-full px-4">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "bottom-nav-button relative flex flex-col items-center justify-center p-2 rounded-xl transition-colors",
                isActive
                  ? "bg-[var(--accent)/20] text-[var(--accent)] shadow-[0_2px_8px_-2px_var(--accent)]"
                  : "text-white/70 hover:text-white"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon size={28} />
              <span className="text-xs mt-1 font-semibold tracking-wide">
                {link.label}
              </span>
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
