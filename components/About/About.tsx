import Heading from "../Others/Heading";
import Testimonials from "./Testimonials";
import What_Doing from "./What_Doing";

export default function About() {
  return (
    <>
      <div className="mt-2 md:mt-4 lg:-mt-6">
        <Heading value={"About Me"} />
        <div className="">
          <div className=" text-sm mt-4">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos id
            assumenda veritatis, ipsam corporis laudantium sequi vel mollitia
            explicabo voluptatem totam perferendis pariatur voluptatum
            accusantium neque incidunt repellendus eveniet dolorum!{" "}
          </div>
          <div className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            explicabo minus, sint illo magnam quidem magni molestiae, iure
            itaque corporis sunt eaque numquam nulla vitae ratione quaerat
            doloribus in ea!
          </div>
        </div>
      </div>
      <div className="">
        <What_Doing />
      </div>
      <div className="">
        <Testimonials />
      </div>
    </>
  );
}
