"use client"
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { MdEmail } from "react-icons/md";
import { IoPhonePortraitOutline, IoLogoInstagram } from "react-icons/io5";
import { FaBirthdayCake, FaGithub } from "react-icons/fa";
import { FaLocationDot, FaLinkedin, FaTwitter } from "react-icons/fa6";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Side_Component_Details from "./Side_Comp_Details";
import { SiLeetcode } from "react-icons/si";

export default function Side_Comp() {
  const [data, setData] = React.useState<string[] | []>([
    "Web Developer",
    "MERN Developer",
    "Machine Learner",
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
    },
  ]);

  return (
    <div className="flex-grow lg:flex-grow-0 h-11/12 lg:h-auto rounded-2xl overflow-hidden relative">
      <Accordion className="rounded-3xl overflow-hidden">
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          className="relative rounded-3xl"
        >
          <ExpandMoreIcon className="absolute top-2 right-2" />

          <div className="flex items-center justify-start h-full w-full pl-1 md:pl-6 gap-3">
            <div className="bg-slate-500 h-24 md:h-36 w-32 md:w-32 rounded-2xl"></div>
            <div>
              <div className="text-center font-bold">G V Amaresh</div>
              <div className="flex flex-wrap gap-2 justify-center">
                {data.map((d, index) => (
                  <div
                    key={index}
                    className="bg-slate-500 p-1 border-2 rounded-2xl font-medium text-xs"
                  >
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AccordionSummary>
        <div className="border-b-2"></div>
        <AccordionDetails>
        {details.map((detail, index) => (
            <Side_Component_Details
              key={index}
              icon={detail.icon}
              label={detail.label}
              value={detail.value}
              link={detail.link}
            />
          ))}
          <div className="border-b-2 pt-2"></div>
          <div className="flex gap-3 pt-4 ml-3">
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
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
