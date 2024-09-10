import * as React from "react";
import { FcReading } from "react-icons/fc";
import { GoDotFill } from "react-icons/go";

const GetTimeline = () => {
  return (
    <>
      <div className="ml-4">
        <div className=" border-2 w-fit rounded-full bg-black border-black">
          <GoDotFill />
        </div>
        <div className="pb-4 border-l-2 ml-2 pl-8 -mt-5 border-black">
          <div className="font-bold">
            Sri Sadguru Vidya Mandira, Basarikatte
          </div>
          <div className=" text-amber-400">2017-2019</div>
          <div className="text-xs md:text-base lg:text-base font-extralight">
            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit
            atque corrupti, quos dolores et quas molestias exceptur.
          </div>
        </div>
      </div>
    </>
  );
};

function TimelineComponents() {
  return (
    <>
      <div className="mb-12 pl-1 md:pl-4 lg:pl-8 mt-12 mr-1 md:mr-3 lg:mr-8">
        <div className="">
          <div className="flex gap-5">
            <div className="">
              <FcReading size={50} />
            </div>
            <div className="mt-2 font-semibold md:font-bold lg:font-extrabold text-2xl md:text-4xl lg:text-4xl">
              Education
            </div>
          </div>
          <div className=" border-black border-l-2 h-8 ml-6"></div>
        </div>
        <div className="">
          {Object.values([1, 2, 3, 4]).map((data, index) => (
            <GetTimeline />
          ))}
        </div>
      </div>
    </>
  );
}

export default function Timeline(){
  return (
    <>
      <div className="">
        <div className="">
        <TimelineComponents />
        </div>
        <div className="">
          <TimelineComponents/>
        </div>
      </div>
    </>
  );
};
