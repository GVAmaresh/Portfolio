import { Basic_Details } from "@/components/EditFeatures/EditUserDetails";
import { useColor } from "../ColorContext";
import {
  EditEducationDetails,
  EditExperienceDetails,
  EditSkillsDetails
} from "@/components/EditFeatures/EditResumeDetails";
import { useState } from "react";
import { iconMapping } from "@/components/Others/IconType";

export default function ResumeDetails() {
  const { theme } = useColor();
  const [saveData, setSaveData] = useState<boolean>(false);
  const handleSaveClick = () => {
    setSaveData(true);
    setTimeout(() => {
      setSaveData(false);
    }, 3000);
  };
  const IconComponent = iconMapping["save"];
  return (
    <div className="">
      <div className="flex gap-3">
        <div
          className="font-bold text-base md:text-2xl mt-3"
          style={{ color: theme.heading }}
        >
          Resume
        </div>
        <div
          className={`p-4 w-fit rounded-lg flex gap-2 cursor-pointer`}
          style={{
            boxShadow: theme.boxShadow,
            backgroundColor: saveData ? "green" : "transparent"
          }}
          onClick={handleSaveClick}
        >
          <div className="" style={{ color: theme.subContent }}>
            Save
          </div>
          <div className="mt-1">
            <IconComponent color={theme.logo} size={20} />
          </div>
        </div>
      </div>
      <div className="">
        <EditEducationDetails saveData={saveData} />
      </div>
      <div className="">
        <EditExperienceDetails saveData={saveData} />
      </div>
      <div className="">
        <EditSkillsDetails saveData={saveData} />
      </div>
    </div>
  );
}
