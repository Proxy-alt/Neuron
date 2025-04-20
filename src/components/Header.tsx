"use client";

import React from "react";
import { ArrowLeft, ArrowRight, RotateCw } from "lucide-react";

export function Header() {
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
      <div className="url-bar">sunset://home</div>
    </div>
  );
}
