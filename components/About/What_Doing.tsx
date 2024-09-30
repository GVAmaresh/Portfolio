import { useColor } from "@/app/ColorContext";
import { RootState } from "@/redux/store";
import { Grid } from "@mui/material";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { FaCode } from "react-icons/fa";
import { useSelector } from "react-redux";
import { IconType } from "react-icons"; 
import { iconMapping } from "../Others/IconType";

const Get_Work = ({ icon, title, description }: { icon: string, title: string, description: string }) => {
  const { theme } = useColor();

  const IconComponent = iconMapping[icon] 
  return (
    <div className="p-6 rounded-3xl" style={{ boxShadow: theme.boxShadow }}>
      <div className="flex flex-col md:flex-row justify-evenly align-middle items-center gap-6">
        <div className="justify-center">
          <IconComponent size={40} color={theme.logo} /> 
        </div>
        <div>
          <div className="font-bold text-center" style={{ color: theme.heading }}>{title}</div>
          <div className="text-center text-sm text-balance" style={{ color: theme.subContent }}>
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function What_Doing() {
  const { whatIamDoing } = useSelector((state: RootState) => state.about);
  console.log(whatIamDoing)
  const { theme } = useColor();

  return (
    <div className="pt-8">
      <div className="text-2xl font-extrabold" style={{ color: theme.heading }}>What I'm Doing</div>
      <Grid
        sx={{ flexGrow: 1 }}
        container
        spacing={2}
        justifyContent="center"
        marginTop={2}
      >
        <Grid item xs={10}>
          <Grid container justifyContent="center" spacing={4}>
            {whatIamDoing.map((data, index) => (
              <Grid key={index} item xs={12} sm={12} md={8} lg={6}>
                <Get_Work icon={data.logo} title={data.title} description={data.description} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
