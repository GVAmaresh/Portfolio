"use client";
import React from "react";
import { FaBirthdayCake, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import Side_Component_Details from "./Side_Comp_Details";
import { useColor } from "@/app/ColorContext";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Side_Comp_lg() {
  const { theme } = useColor();
  const {
    birthDate,
    email,
    field,
    github_url,
    leetcode_url,
    linkedin_url,
    location,
    phoneNumber,
    photo,
    userName
  } = useSelector((state: RootState) => state.user);

  // Local states
  const [data, setData] = React.useState<string[]>([]);
  const [socialMedia, setSocialMedia] = React.useState<any[]>([]);
  const [details, setDetails] = React.useState<any[]>([]);

  React.useEffect(() => {
    setData(field);

    setSocialMedia([
      {
        name: "linkedin",
        link: linkedin_url,
        icon: FaLinkedin,
        color: "black"
      },
      {
        name: "leetcode",
        link: leetcode_url,
        icon: SiLeetcode,
        color: "black"
      },
      {
        name: "github",
        link: github_url,
        icon: FaGithub,
        color: "black"
      }
    ]);

    setDetails([
      {
        label: "Email",
        value: email,
        icon: MdEmail,
        link: `mailto:${email}`
      },
      {
        label: "Phone No:",
        value: phoneNumber,
        icon: IoPhonePortraitOutline,
        link: `tel:${phoneNumber}`
      },
      {
        label: "Birthday",
        value: birthDate,
        icon: FaBirthdayCake,
        link: ""
      },
      {
        label: "Location",
        value: location,
        icon: FaLocationDot,
        link: ""
      }
    ]);
  }, [
    email,
    phoneNumber,
    birthDate,
    location,
    linkedin_url,
    leetcode_url,
    github_url
  ]); 

  return (
    <>
      <div>
        <div className="flex justify-center">
          <div
            className="bg-slate-600 h-32 m-6 rounded-xl w-32"
            style={{ backgroundColor: theme.box }}
          ></div>
        </div>
        <div
          className="text-center font-extrabold text-2xl"
          style={{ color: theme.heading }}
        >
          {userName}
        </div>
        <div className="flex flex-wrap justify-center mt-4">
          {data.map((d, index) => (
            <div
              key={index}
              style={{ color: theme.sideNav, backgroundColor: theme.box }}
              className="w-fit m-2 bg-slate-500 p-2 rounded-lg font-semibold text-xs"
            >
              {d}
            </div>
          ))}
        </div>
        <div className="border-b-2 border-gray-100 mt-4"></div>
        <div>
          {details.map((detail, index) => (
            <div className="flex justify-start mt-1 ml-2" key={index}>
              <Side_Component_Details
                key={index}
                icon={detail.icon}
                label={detail.label}
                value={detail.value ? detail.value.toString() : ""}
                link={detail.link}
              />
            </div>
          ))}
        </div>
        <div>
          <div className="border-b-2 border-gray-100 pt-2"></div>
          <div className="flex gap-3 pt-4 ml-6">
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
                  <IconComponent size={20} color={theme.socialMediaLogo} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
