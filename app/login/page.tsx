"use client";
import { useEffect, useState } from "react";
import { getSignin, getSignup } from "@/redux/firebase/auth";
import Image from "next/image";
import { HiFingerPrint } from "react-icons/hi2";
import ContinueGoogle from "./google";
import { Snackbar, Alert, Box } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Page() {
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const signIn = async () => {
    try {
      await getSignin();
      router.push("/features");
    } catch (error: any) {
      if (error.code !== "auth/popup-closed-by-user") {
        console.error("Login failed:", error);
        setError(error.message || "An unexpected error occurred");
        setOpen(true);
      } else {
        console.warn("Popup closed by user.");
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      <div className="flex justify-center">
        <div className="">
          <Image
            src="/images/logo.png"
            alt="logo"
            className="w-28 h-28 md:w-40 md:h-32 lg:w-32 lg:h-32 mt-5"
            width={100}
            height={100}
          />
        </div>
        <div className="text-center mt-10 text-4xl md:text-5xl lg:text-7xl font-extralight text-slate-500">
          | <span className="font-medium">Google</span>
        </div>
      </div>

      <div className="flex justify-center mt-10 gap-3">
        <div className="">
          <HiFingerPrint className="text-[40px] md:text-[60px] lg:text-[65px]" />
        </div>
        <div className="font-medium text-slate-500 text-3xl md:text-5xl lg:text-4xl">
          Account Sign-In
        </div>
      </div>
      <div className="flex justify-center items-center mt-20">
        <div className="font-medium text-slate-500 text-lg md:text-xl lg:text-2xl">
          <ul className="list-disc pl-5">
            <li>Sign-in is only possible for existing users.</li>
            <li>New users cannot be signed in.</li>
            <li>Attempts to do so will not be accepted.</li>
          </ul>
        </div>
      </div>
      <div className="" onClick={signIn}>
        <ContinueGoogle />
      </div>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {error || "An unexpected error occurred"}
        </Alert>
      </Snackbar>
      </Box>
    </div>
  );
}