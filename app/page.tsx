"use client"
import MainNav_Comp from "@/components/MainNav_Comp/MainNav_Comp";
import { useColor } from "./ColorContext";
import { useEffect } from "react";

export default function Home() {
  const { theme } = useColor();

  useEffect(() => {
    const root = document.documentElement;

    if (theme.scrollbarThumb) {
      root.style.setProperty('-webkit-scrollbar-thumb', theme.scrollbarThumb);
    } else {
      root.style.setProperty('-webkit-scrollbar-thumb', '#888'); 
    }

    if (theme.scrollbarTrack) {
      root.style.setProperty('-webkit-scrollbar-track', theme.scrollbarTrack);
    } else {
      root.style.setProperty('-webkit-scrollbar-track', '#f1f1f1'); 
    }
  }, [theme]);

  return (
    <div>
      <MainNav_Comp />
    </div>
  );
}
