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
import { ThemeContext } from "@emotion/react";
import { useColor } from "@/app/ColorContext";
import { useSelector } from "react-redux";
import { RootState } from '../../redux/store';

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


const GetSkills = ({skill}:{skill:string}) => {
  const { theme } = useColor();
  return (
    <>
      <div className="p-8 pt-4 pb-2">
        <div className=" mb-2 font-bold" style={{ color: theme.heading }}>
          {skill.split("--")[0]}
          <span
            className="pl-4 font-medium"
            style={{ color: theme.subContent }}
          >
            {skill.split("--")[1]}
          </span>
        </div>
        <BorderLinearProgress
          variant="determinate"
          value={parseInt(skill.split("--")[1])}
          sx={{
            "& .MuiLinearProgress-bar": {
              backgroundColor: theme.logo
            },
            backgroundColor: 'transparent',
            boxShadow: theme.boxShadow
          }}
        />
      </div>
    </>
  );
};

export default function Skills() {
  const{theme}=useColor()
  const{skills}=useSelector((state:RootState)=>state.resume)
  return (
    <>
      <div className="">
        <div className=" font-bold text-3xl mb-4" style={{color:theme.heading}}>My Skills</div>
        <div className="border-2 rounded-3xl pb-6 ml-1 lg:ml-4">
          {skills.map((data, index) => (
          <div className="" key={index}>
            <GetSkills skill={data}/>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}
