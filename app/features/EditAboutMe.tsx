import { useSelector } from "react-redux";
import { useColor } from "../ColorContext";
import { RootState } from "@/redux/store";
import { TextField, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { EditIntroduction, EditTestimonials, EditWhatIamDoing, EditWhatIKnow } from "@/components/EditFeatures/EditAboutComponent";

export default function EditAboutMe() {
  const { theme } = useColor();
  return (
    <div className="w-full">
      <div
        className="font-bold text-base md:text-2xl"
        style={{ color: theme.heading }}
      >
        About Me
      </div>
      <div className="">
        <EditIntroduction />
        <EditTestimonials/>
        <EditWhatIKnow />
        <EditWhatIamDoing/>
      </div>
    </div>
  );
}
