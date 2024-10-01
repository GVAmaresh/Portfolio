import { Basic_Details } from "@/components/EditFeatures/EditUserDetails";
import { useColor } from "../ColorContext";
import { EditEducationDetails, EditExperienceDetails } from "@/components/EditFeatures/EditResumeDetails";

export default function ResumeDeatils() {
  const { theme } = useColor();
  return (
    <div className="">
      <div
        className="font-bold text-base md:text-2xl"
        style={{ color: theme.heading }}
      >
        Resume
      </div>
      <div className="">
        <EditEducationDetails />
      </div>
      <div className="">
        <EditExperienceDetails/>
      </div>
    </div>
  );
}
