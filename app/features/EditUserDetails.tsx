import { Basic_Details } from "@/components/EditFeatures/EditUserDetails";
import { useColor } from "../ColorContext";

export default function UserDeatils() {
  const { theme } = useColor();
  return (
    <div className="">
      <div
        className="font-bold text-base md:text-2xl"
        style={{ color: theme.heading }}
      >
        User Details
      </div>
      <div className="">
        <Basic_Details />
      </div>
    </div>
  );
}
