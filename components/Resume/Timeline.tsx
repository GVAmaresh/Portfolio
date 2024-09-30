import { useColor } from "@/app/ColorContext";
import { IEducation } from "@/redux/Interface";
import { RootState } from "@/redux/store";
import * as React from "react";
import { FcReading } from "react-icons/fc";
import { GoDotFill } from "react-icons/go";
import { useSelector } from "react-redux";
import { IExperience, ITimelineComponents } from "../../redux/Interface";
import { iconMapping } from "../Others/IconType";
import { describe } from "node:test";
import { MdDescription } from "react-icons/md";
import Link from "next/link";
type IResumeDetails = IEducation & IExperience;

const GetTimeline = ({
  title,
  duration,
  description,
  position,
  major,
  certificate
}: ITimelineComponents) => {
  const { theme } = useColor();
  return (
    <>
      <div className="ml-4">
        <div
          className=" border-2 w-fit rounded-full"
          style={{
            borderColor: theme.borderColor,
            backgroundColor: theme.borderColor
          }}
        >
          <GoDotFill color={theme.borderColor} />
        </div>
        <div
          className="pb-4 border-l-2 ml-2 pl-8 -mt-5 border-black"
          style={{ borderColor: theme.borderColor }}
        >
          <div className="font-bold" style={{ color: theme.heading }}>
            {title}
          </div>
          <div className="mt-2 mb-1" style={{ color: theme.logo }}>
            {duration}
          </div>
          <div className="mb-1 text-sm" style={{ color: theme.subContent }}>
            <span>{position}</span>
            <span>{major && ` : ${major}`}</span>
          </div>
          <div
            className="text-xs md:text-base lg:text-base font-extralight"
            style={{ color: theme.subContent }}
          >
            {description}
          </div>
          <div className="">
            {certificate && certificate.length > 0 && (
              <div
                className="text-sm font-light"
                style={{ color: theme.subContent }}
              >
                <div className="mt-1 flex flex-wrap gap-3 font-bold">
                  {certificate.map((cert, index) => (
                    <li
                      style={{ textDecoration: "none", listStyleType: "none" }}
                      className="cursor-pointer"
                      key={index}
                    >
                      <a
                        href={cert.split("--")[1]}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        {cert.split("--")[0]}
                      </a>
                    </li>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
function TimelineComponents({
  education,
  experience
}: {
  education?: IEducation;
  experience?: IExperience;
}) {
  const { theme } = useColor();

  const IconComponent =
    iconMapping[
      education && education.logo
        ? education.logo
        : experience && experience.logo
        ? experience.logo
        : ""
    ] || FcReading;

  return (
    <div className="mb-12 pl-1 md:pl-4 lg:pl-8 mt-12 mr-1 md:mr-3 lg:mr-8">
      <div>
        <div className="flex gap-5">
          <div>{IconComponent && <IconComponent size={50} />}</div>
          <div
            className="mt-2 font-semibold md:font-bold lg:font-extrabold text-2xl md:text-4xl lg:text-4xl"
            style={{ color: theme.heading }}
          >
            {education && education.title
              ? education.title
              : experience && experience.title
              ? experience.title
              : ""}
          </div>
        </div>
        <div
          className="border-l-2 h-8 ml-6"
          style={{ borderColor: theme.borderColor }}
        ></div>
      </div>
      <div>
        {education &&
          education.myEducation &&
          education.myEducation.map((data, index) => (
            <div key={index}>
              <GetTimeline
                title={data.schoolName}
                description={data.description}
                duration={data.duration}
                position={data.degree}
                major={data.major}
              />
            </div>
          ))}
        {experience &&
          experience.myWork &&
          experience.myWork.map((data, index) => (
            <div key={index}>
              <GetTimeline
                title={data.company}
                duration={data.description}
                description={data.description}
                position={data.position}
                certificate={data.certificate}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default function Timeline() {
  const { education, experience } = useSelector(
    (state: RootState) => state.resume
  );
  console.log(education, experience);
  return (
    <>
      <div className="">
        <div className="">
          <TimelineComponents education={education} />
        </div>
        <div className="">
          <TimelineComponents experience={experience} />
        </div>
      </div>
    </>
  );
}
