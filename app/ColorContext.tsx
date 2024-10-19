"use client";
import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect
} from "react";
import themes from "./theme.json";

interface Theme {
  borderColor: string;
  warningBackground:string;
  color: string;
  backgroundColor: string;
  sideNav: string;
  mainNav: string;
  scrollbarThumb?:string,
  scrollbarTrack?:string,
  boxShadow: string;
  contentBar: string;
  heading: string;
  subContent: string;
  box: string;
  logo: string;
  socialMediaLogo: string;
  easyColor: string;
  mediumColor: string;
  hardColor: string;
}

type ThemeKeys = keyof typeof themes;

interface ColorContextProps {
  theme: Theme;
  setChangeColor: () => void;
}

const ColorContext = createContext<ColorContextProps | undefined>(undefined);

export const ColorProvider = ({ children }: { children: ReactNode }) => {
  const colorKeys = Object.keys(themes) as ThemeKeys[];

  const [currentColor, setCurrentColor] = useState<ThemeKeys>(() => {
    if (typeof window === 'undefined') return colorKeys[0];
    
    const savedColor = localStorage.getItem("currentColor");
    return savedColor && colorKeys.includes(savedColor as ThemeKeys)
      ? (savedColor as ThemeKeys)
      : colorKeys[0];
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("currentColor", currentColor);
    }
  }, [currentColor]);

  const updateColor = () => {
    setCurrentColor((prevColor) => {
      const nextIndex = (colorKeys.indexOf(prevColor) + 1) % colorKeys.length;
      return colorKeys[nextIndex];
    });
  };

  const theme = themes[currentColor];

  return (
    <ColorContext.Provider value={{ theme, setChangeColor: updateColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  const context = useContext(ColorContext);
  
  if (!context) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  
  return context;
};