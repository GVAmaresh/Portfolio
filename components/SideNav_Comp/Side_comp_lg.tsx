"use client";
import React from "react";
import Side_Comp from "./Side_Comp";
import { FaBirthdayCake } from "react-icons/fa";
import { FaLocationDot, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoPhonePortraitOutline, IoLogoInstagram } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import Side_Component_Details from "./Side_Comp_Details";
export default function Side_Comp_lg() {
  const [data, setData] = React.useState<string[] | []>([
    "Web Developer",
    "MERN Developer",
    "Machine Learner"
  ]);
  const[socialMedia, setSocialMedia] = React.useState([{
    name: "linkedin",
    link: "https://www.linkedin.com/in/g-v-amaresh/",
    icon: FaLinkedin,
    color: "black"
  },
  {
    name: "leetcode",
    link: "https://leetcode.com/u/GVAmaresh/",
    icon: SiLeetcode,
    color: "black"
  }, 
  {
    name: "github",
    link: "https://github.com/GVAmaresh",
    icon: FaGithub,
    color: "black"
  }, 
])
  const [details, setDetails] = React.useState([
    {
      label: "Email",
      value: "reshama0302@gmail.com",
      icon: MdEmail,
      link: "mailto:reshama0302@gmail.com"
    },
    {
      label: "Phone No:",
      value: "7899720344",
      icon: IoPhonePortraitOutline,
      link: "tel:7899720344"
    },
    {
      label: "Birthday",
      value: "2 January, 2003",
      icon: FaBirthdayCake,
      link: "#"
    },
    {
      label: "Location",
      value: "Bengaluru, Karnataka, India",
      icon: FaLocationDot,
      link: "#"
    }
  ]);
  return (
    <>
      <div className="">
        <div className=" flex justify-center">
          <div className=" bg-slate-600 h-32 m-6 rounded-xl w-32"></div>
        </div>
        <div className=" text-center font-extrabold text-2xl">G V Amaresh</div>
        <div className=" flex flex-wrap justify-center mt-4">
          {data.map((d, index) => (
            <div
              key={index}
              className=" w-fit m-2 bg-slate-500 p-2 rounded-lg font-semibold text-xs"
            >
              {d}
            </div>
          ))}
        </div>
        <div className="border-b-2 border-gray-100 mt-4"></div>
        <div className="">
          {details.map((detail, index) => (
            <div className=" flex justify-start mt-1 ml-2">
              <Side_Component_Details
                key={index}
                icon={detail.icon}
                label={detail.label}
                value={detail.value}
                link={detail.link}
              />
            </div>
          ))}
        </div>
        <div className="">
          <div className="border-b-2 border-gray-100 pt-2"></div>
          <div className="flex gap-3 pt-4 ml-6">
            {socialMedia.map((media) => {
              const IconComponent = media.icon; // Get the icon component
              return (
                <a
                  key={media.name}
                  href={media.link}
                  target="_blank"
                  rel="noopener noreferrer" 
                  style={{ color: media.color }} 
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
