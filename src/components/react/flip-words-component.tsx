import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import "@/styles/global.css";

export function FlipWordsComponent() {
  const words = ["Software Engineer", "Blockchain Enthusiast", "AI Researcher"];

  return (
    <div className="h-[4rem] flex items-center">
      <div className="text-4xl hero-text-h2">
        <FlipWords words={words} />
      </div>
    </div>
  );
}
