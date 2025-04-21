"use client";

import React from "react";
import {
  Twitter,
  Github,
  Facebook,
  Instagram,
  Linkedin,
  Plus,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useTheme } from "@/contexts/ThemeContext";

// Custom Discord icon since it's not in Lucide
const DiscordIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.2703 5.33913C17.9634 4.71811 16.5602 4.26548 15.1001 4.00027C14.9644 4.2488 14.8062 4.582 14.6959 4.85332C13.1444 4.6088 11.6066 4.6088 10.0804 4.85332C9.97011 4.582 9.80879 4.2488 9.67144 4.00027C8.20971 4.26548 6.80485 4.71973 5.49796 5.34076C2.8554 9.41799 2.12318 13.3993 2.48868 17.3161C4.25252 18.6736 5.96523 19.4941 7.64723 20.0341C8.02444 19.5153 8.36091 18.9639 8.65312 18.3798C8.07098 18.1489 7.51755 17.8672 6.99445 17.5416C7.10476 17.4577 7.21186 17.3705 7.31574 17.2801C10.079 18.5799 13.0729 18.5799 15.8028 17.2801C15.9083 17.3705 16.0154 17.4577 16.1241 17.5416C15.6009 17.8688 15.0459 18.1505 14.4638 18.3815C14.756 18.9639 15.0908 19.517 15.4697 20.0357C17.1533 19.4958 18.8676 18.6752 20.6314 17.3161C21.0593 12.7835 19.9071 8.83905 19.2703 5.33913ZM8.60109 14.8349C7.63568 14.8349 6.84377 13.9384 6.84377 12.8528C6.84377 11.7671 7.61865 10.8689 8.60109 10.8689C9.58353 10.8689 10.3755 11.7654 10.3584 12.8528C10.3601 13.9384 9.58353 14.8349 8.60109 14.8349ZM16.2189 14.8349C15.2535 14.8349 14.4616 13.9384 14.4616 12.8528C14.4616 11.7671 15.2365 10.8689 16.2189 10.8689C17.2014 10.8689 17.9933 11.7654 17.9762 12.8528C17.9762 13.9384 17.2014 14.8349 16.2189 14.8349Z"
      fill="currentColor"
    />
  </svg>
);

// Custom Spotify icon
const SpotifyIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM16.5323 16.5054C16.3232 16.8454 15.8698 16.9487 15.5298 16.7398C13.2812 15.3759 10.4639 15.0757 7.24527 15.7525C6.85599 15.8392 6.46883 15.6048 6.38209 15.2155C6.29535 14.8262 6.52979 14.439 6.91906 14.3523C10.4639 13.5961 13.6093 13.9472 16.2978 15.5029C16.6378 15.7119 16.7412 16.1654 16.5323 16.5054ZM17.6889 13.9158C17.4277 14.3383 16.8524 14.4713 16.4299 14.2101C13.8772 12.6323 10.0942 12.1906 7.26386 13.0959C6.78942 13.2499 6.28399 12.9861 6.12997 12.5117C5.97595 12.0372 6.23983 11.5318 6.71427 11.3778C10.0726 10.3361 14.2921 10.8398 17.3946 12.6568C17.8171 12.918 17.9501 13.4933 17.6889 13.9158ZM17.7908 11.2351C14.7548 9.40546 9.79335 9.20379 6.83613 10.1987C6.27544 10.3795 5.67134 10.0639 5.4905 9.50319C5.30967 8.94248 5.62527 8.33838 6.18596 8.15755C9.62348 7.00305 15.181 7.2403 18.72 9.35688C19.2336 9.65781 19.3846 10.3169 19.0838 10.8304C18.7829 11.344 18.1238 11.4949 17.6102 11.1942L17.6131 11.1971L17.7908 11.2351Z"
      fill="currentColor"
    />
  </svg>
);

interface SidebarItemProps {
  icon: React.ReactNode;
  tooltip: string;
  href?: string;
}

const SidebarItem = ({ icon, tooltip, href }: SidebarItemProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={href || "#"}
            className="sidebar-item"
            target={href ? "_blank" : undefined}
            rel={href ? "noopener noreferrer" : undefined}
          >
            {icon}
          </a>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export function Sidebar() {
  const { settings } = useTheme();
  const { sidebarCollapsed } = settings;

  return (
    <div className="h-full bg-foreground/5 border-r border-border flex flex-col">
      <div className="flex flex-col items-center gap-2 p-2">
        <SidebarItem icon={<Plus size={20} />} tooltip="New Tab" />
        <div className="w-full h-[1px] bg-border my-2" />

        <SidebarItem
          icon={<Twitter size={20} />}
          tooltip="Twitter"
          href="https://twitter.com"
        />
        <SidebarItem
          icon={<Github size={20} />}
          tooltip="GitHub"
          href="https://github.com"
        />
        <SidebarItem
          icon={<DiscordIcon />}
          tooltip="Discord"
          href="https://discord.com"
        />
        <SidebarItem
          icon={<Facebook size={20} />}
          tooltip="Facebook"
          href="https://facebook.com"
        />
        <SidebarItem
          icon={<Instagram size={20} />}
          tooltip="Instagram"
          href="https://instagram.com"
        />
        <SidebarItem
          icon={<SpotifyIcon />}
          tooltip="Spotify"
          href="https://spotify.com"
        />
        <SidebarItem
          icon={<Linkedin size={20} />}
          tooltip="LinkedIn"
          href="https://linkedin.com"
        />
      </div>
    </div>
  );
}
