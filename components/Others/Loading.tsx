import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
export const Loading = () => {
  return (
    <div className="">
      <Stack spacing={1}>
        <div className="hidden lg:contents">
          <div className=" flex flex-row gap-10 px-32 py-5 ">
            <Skeleton
              variant="rectangular"
              className="w-1/3 h-[90vh] rounded-2xl"
            />
            <Skeleton
              variant="rectangular"
              className="w-2/3 h-[90vh] rounded-2xl"
            />
          </div>
        </div>
        <div className="contents lg:hidden">
          <div className=" flex flex-col gap-1 px-5 py-4">
            <Skeleton
              variant="rectangular"
              className="w-full h-[10vh] rounded-2xl"
            />
            <Skeleton
              variant="rectangular"
              className="w-full h-[90vh] rounded-2xl"
            />
          </div>
        </div>
      </Stack>
    </div>
  );
};
