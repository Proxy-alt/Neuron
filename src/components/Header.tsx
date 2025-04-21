import { ArrowLeft, ArrowRight, RotateCw } from "lucide-react";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const labelMap: { [key: string]: string } = {
    "/": "Home",
    "/settings": "Settings",
    "/proxy": "Proxy",
    "/more": "More",
  };
  const currentLabel = labelMap[pathname] || "Custom Tab";

  return (
    <div className="browser-header bg-foreground/10">
      <button className="nav-button">
        <ArrowLeft size={16} />
      </button>
      <button className="nav-button">
        <ArrowRight size={16} />
      </button>
      <button className="nav-button">
        <RotateCw size={16} />
      </button>
      <div className="url-bar flex-1 text-center">
        <span className="px-3 py-1 rounded-md bg-[var(--accent)/20] text-[var(--accent)] font-bold shadow-[0_0_8px_var(--accent)] animate-pulse">
          {currentLabel}
        </span>
      </div>
    </div>
  );
}
