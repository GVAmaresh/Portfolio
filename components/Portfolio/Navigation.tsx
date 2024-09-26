import { CardMedia, Grid } from "@mui/material";
import Image from "next/image";

const Portfolio = () => {
  return (
    <>
      <div className="mt-4">
        <div className="w-72 h-1/2 md:w-80 lg:w-80">
          <CardMedia
            component="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYAaCA8u0LtyPqrp-pqk_eunAe1mSNjQqSuw&s"
            alt=""
            height={50}
            className=" rounded-xl md:rounded-2xl"
            width={200}
          />
        </div>
        <div className="pl-4 pt-2">
          <div className=" font-bold">Financial Department</div>
          <div className=" font-light">Web Development</div>
        </div>
      </div>
    </>
  );
};
export default function CustomBottomNavigation() {
  return (
    <>
      <div className="max-h-full">
        <div className="flex gap-4">
          <div className=" text-xs md:text-lg">All</div>
          {Object.values([1, 2, 3, 4]).map((data, index) => (
            <div className=" text-xs md:text-lg">Web Design</div>
          ))}
        </div>
        <div className="flex justify-evenly">
          <Grid
            sx={{ flexGrow: 1 }}
            container
            spacing={2}
            xs={10}
            justifyContent="center"
            marginTop={1}
          >
            <Grid item xs={14}>
              <Grid container justifyContent="center" spacing={4} alignContent="center">
                {Object.values([1, 2, 3, 4, 5, 6, 7, 8, 9]).map((data, index) => (
                  <Grid key={index} item xs={8} sm={6} md={6} lg={6}>
                    <Portfolio />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
