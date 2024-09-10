import { Grid } from "@mui/material";
import { FaCode } from "react-icons/fa";

const Get_Work = () => {
  return (
    <div className=" border-2 p-6  rounded-3xl">
      <div className="flex flex-col md:flex-row justify-evenly align-middle items-center gap-6 ">
        <div className=" justify-center">
          <FaCode size={40} />
        </div>
        <div className="">
          <div className=" font-bold text-center">Web design</div>
          <div className="text-center text-sm text-balance">
            The most modern and high-quality design made at a professional
            level.
          </div>
        </div>
      </div>
    </div>
  );
};

export default function What_Doing() {
    return (
      <div className="pt-8">
        <div className="text-2xl font-extrabold mb-">What I'm Doing</div>
        <Grid
          sx={{ flexGrow: 1 }}
          container
          spacing={2}
          justifyContent="center"
          marginTop={5}
        >
          <Grid item xs={10}>
            <Grid container justifyContent="center" spacing={4}>
              {Object.values([1,2, 3, 4]).map((data, index) => (
                <Grid key={index} item xs={12} sm={12} md={8} lg={6}>
                  <Get_Work/>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
