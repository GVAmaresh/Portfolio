"use client";
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
import { RootState } from "@/redux/store";
import { useColor } from "@/app/ColorContext";
import { useSelector } from "react-redux";

export default function Side_Comp() {
  const { userName } = useSelector((state: RootState) => state.user);
  const { theme } = useColor();
  const [data, setData] = React.useState<string[] | []>([
    "Web Developer",
    "MERN Developer",
    "Machine Learner"
  ]);
  const [socialMedia, setSocialMedia] = React.useState([
    {
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
    }
  ]);
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
    <div className="flex-grow lg:flex-grow-0 h-11/12 lg:h-auto rounded-2xl overflow-hidden relative">
      <Accordion
        className="rounded-3xl overflow-hidden"
        style={{ backgroundColor: theme.sideNav }}
      >
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          className="relative rounded-3xl"
        >
          <ExpandMoreIcon className="absolute top-2 right-2" />

          <div className="flex items-center justify-start h-full w-full pl-1 md:pl-6 gap-3">
            <div className=" h-24 md:h-36 w-32 md:w-32 rounded-2xl" style={{backgroundColor:theme.box}}></div>
            <div>
              <div
                className="text-center font-bold"
                style={{ color: theme.heading }}
              >
                {userName}
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {data.map((d, index) => (
                  <div
                    key={index}
                    style={{
                      color: theme.subContent,
                      backgroundColor: theme.box
                    }}
                    className="p-1 rounded-md font-normal text-xs"
                  >
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AccordionSummary>
        <div className="border-b-2 w-full"></div>
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
        </AccordionDetails>
        <div className="border-b-2 pt-2 w-full"></div>
        <AccordionDetails>
          <div className="flex gap-3 mt-1 ml-3">
            {socialMedia.map((media) => {
              const IconComponent = media.icon;
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
