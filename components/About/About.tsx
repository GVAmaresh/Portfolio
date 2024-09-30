import { useColor } from "@/app/ColorContext";
import Heading from "../Others/Heading";
import Testimonials from "./testimonials";
import What_Doing from "./What_Doing";
import Leetcode from "./Leetcode";
import WhatIKnow from "./whatIKnow";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";

export default function About() {
  const { introduction } = useSelector((state: RootState) => state.about);
  const { theme } = useColor();

  return (
    <div>
      <div className="mt-2 md:mt-4 lg:-mt-6">
        <Heading value={"About Me"} />
        <div className="" style={{ color: theme.subContent }}>
          {introduction.map((e) => (
            <div className=" text-base mt-4">{e}</div>
          ))}
        </div>
      </div>
      <div className="">
        <What_Doing />
      </div>
      <div className="">
        <WhatIKnow />
      </div>
      <div className="">
        <Leetcode />
      </div>
      <div className="">
        <Testimonials />
      </div>
    </div>
  );
}
