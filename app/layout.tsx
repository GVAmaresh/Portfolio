import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import SideNav from "./SideNav";
import { ColorProvider } from "./ColorContext";
import ConvertingRedux from "./ConvertingRedux";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "G V Amaresh",
  description: "Portfolio Details of G V Amaresh",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <ColorProvider>
          <ConvertingRedux>
            <SideNav> {children}</SideNav>
          </ConvertingRedux>
        </ColorProvider>
      </body>
    </html>
  );
}
