"use client"
import MainNav_Comp from "@/components/MainNav_Comp/MainNav_Comp";
import Image from "next/image";
import { useColor } from "./ColorContext";
import { useEffect } from "react";


export default function Home() {
  const {theme} = useColor()
  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty('--scrollbar-thumb', theme.scrollbarThumb);
    root.style.setProperty('--scrollbar-track', theme.scrollbarTrack);
  }, [theme]);
  return (
    <div className="">

      <MainNav_Comp/>
    </div>
  );
}
