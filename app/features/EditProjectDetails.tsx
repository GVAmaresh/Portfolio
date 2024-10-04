import { iconMapping } from "@/components/Others/IconType";
import { useState } from "react";
import { useColor } from "../ColorContext";
import EditProjectDetails, { EditProjectGroupDetails } from "@/components/EditFeatures/EditProjectDetails";

export default function ProjectDeatils() {
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
          Project
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
      <div className="mt-1">
            <EditProjectGroupDetails saveData={saveData}/>
          </div>
      <div className="">
        <EditProjectDetails saveData={saveData} />
      </div>
    </div>
  );
}
