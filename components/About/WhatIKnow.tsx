import { useColor } from "@/app/ColorContext";
import RootLayout from "@/app/layout";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from '../../redux/store';

export default function WhatIKnow() {
    const{theme}=useColor()
  const { whatIKnow} = useSelector((state: RootState) => state.about);
  return (

    <div className=" ">
        <div className="text-2xl mt-12 font-extrabold" style={{color:theme.heading}}>What I Know</div>
      <div className="flex flex-wrap">
        {whatIKnow.map((e) => (
          <div className="m-2">
            <div className="p-2" style={{boxShadow:theme.boxShadow, color:theme.subContent}}>{e}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


