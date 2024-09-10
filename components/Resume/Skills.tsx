import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800]
    })
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8"
    })
  }
}));

// Inspired by the former Facebook spinners.
function FacebookCircularProgress(props: CircularProgressProps) {
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        variant="determinate"
        sx={(theme) => ({
          color: theme.palette.grey[200],
          ...theme.applyStyles("dark", {
            color: theme.palette.grey[800]
          })
        })}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={(theme) => ({
          color: "#1a90ff",
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round"
          },
          ...theme.applyStyles("dark", {
            color: "#308fe8"
          })
        })}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  );
}

// From https://github.com/mui/material-ui/issues/9496#issuecomment-959408221
function GradientCircularProgress() {
  return (
    <React.Fragment>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e01cd5" />
            <stop offset="100%" stopColor="#1CB5E0" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress
        sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
      />
    </React.Fragment>
  );
}

const GetSkills = ()=>{
  return<>
          <div className="p-8 pt-4 pb-2">
          <div className=" mb-2 font-bold">
            Web Design{" "}
            <span className="pl-4 font-medium text-amber-400">50%</span>
          </div>
          <BorderLinearProgress variant="determinate" value={50} />
        </div>
  </>
}

export default function Skills() {
  return (
    <>
      <div className="">
        <div className=" font-bold text-3xl mb-4">My Skills</div>
        <div className="border-2 rounded-3xl pb-6 ml-1 lg:ml-4">
        {Object.values([1, 2, 3, 4]).map((data, index) => (
            <GetSkills />
          ))}
          </div>
      </div>
    </>
  );
}
