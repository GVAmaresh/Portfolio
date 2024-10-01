"use client";
import { getVerified } from "@/redux/firebase/auth";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import EditABoutMe from "./EditAboutMe";
import UserDeatils from "./EditUserDetails";
import ResumeDeatils from "./EditResume";
export default function Features() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const handleSignin = async () => {
    const isVerified = await getVerified();
    if (!isVerified) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSignin();
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          height: "90vh"
        }}
      >
        <div className=" overflow-y-scroll">
          <div className="p-4 pl-6">
            <UserDeatils />
          </div>
          <div className="border-2 mt-1 w-full border-gray-700"></div>
          <div className="p-4 pl-6">
            <EditABoutMe />
          </div>
          <div className="border-2 mt-1 w-full border-gray-700"></div>
          <div className="p-4 pl-6">
            <ResumeDeatils />
          </div>
        </div>
      </Box>
    </div>
  );
}
