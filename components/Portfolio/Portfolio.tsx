import Heading from "../Others/Heading";
import CustomBottomNavigation from "./Navigation";

export default function Portfolio() {
  return (
    <>
    <div className="mt-2 md:mt-4 lg:-mt-6">
    <Heading value={"Portfolio"} />
      <CustomBottomNavigation />
      </div>
    </>
  );
}
