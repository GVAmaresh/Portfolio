"use client";
import Side_Comp from "@/components/SideNav_Comp/Side_Comp";
import Side_Comp_lg from "@/components/SideNav_Comp/Side_comp_lg";
import { useState } from "react";
import { MdOutlineInvertColors } from "react-icons/md";
import { useColor } from "./ColorContext";

export default function SideNav({ children }: { children: React.ReactNode }) {
  const { theme, setChangeColor } = useColor(); 
  // const colors = ["black", "blue", "red", "green", "yellow"];


  return (
    <div className="" style={{backgroundColor:theme.backgroundColor}}>
      <div className="flex justify-end ">
      <MdOutlineInvertColors size={30} color={theme.color} onClick={setChangeColor} className="cursor-pointer"/>
      </div>
      <div className="h-fit pt-2 md:pt-2 lg:py-5 px-4 md:px-16 lg:px-32 gap-2 md:gap-4 lg:gap-10 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 rounded-3xl" style={{backgroundColor:theme.sideNav}}>
          {/* <div className="hidden lg:contents "></div> */}
          <div className=" contents lg:hidden h-full ">
            <Side_Comp />
          </div>
          <div className="hidden lg:contents ">
            <Side_Comp_lg />
          </div>
        </div>

        <div className="w-full lg:w-2/3 flex-grow h-auto lg:h-auto rounded-3xl overflow-hidden mb-2 md:mb-0" style={{backgroundColor:theme.contentBar}}>
          {children}
        </div>
      </div>
    </div>
  );
}
