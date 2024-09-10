import Heading from "../Others/Heading";
import Skills from "./Skills";
import Timeline from "./Timeline";

export default function Resume() {
  return (
    <>
      <div className="mt-2 md:mt-4 lg:-mt-6">
        <Heading value={"Resume"} />
      </div>
      <Timeline />
      <Skills />
    </>
  );
}
