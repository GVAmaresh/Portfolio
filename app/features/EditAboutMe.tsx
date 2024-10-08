import { useSelector } from "react-redux";
import { useColor } from "../ColorContext";
import { RootState } from "@/redux/store";
import { TextField, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import {
  EditIntroduction,
  EditTestimonials,
  EditWhatIamDoing,
  EditWhatIKnow
} from "@/components/EditFeatures/EditAboutComponent";
import { iconMapping } from "@/components/Others/IconType";

export default function EditAboutMe() {
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
    <div className="w-full">
      <div className="flex gap-3">
        <div
          className="font-bold text-base md:text-2xl mt-3"
          style={{ color: theme.heading }}
        >
          About Me
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
      <div className="ml-3 mt-2">
        <EditIntroduction saveData={saveData}/>
        <EditTestimonials saveData={saveData}/>
        <EditWhatIKnow saveData={saveData}/>
        <EditWhatIamDoing saveData={saveData}/>
      </div>
    </div>
  );
}
