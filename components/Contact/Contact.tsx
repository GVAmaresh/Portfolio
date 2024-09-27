import { Input } from "postcss";
import Heading from "../Others/Heading";
import { BsSendFill } from "react-icons/bs";
import { useColor } from "@/app/ColorContext";

const GetMap = () => {
  const { theme } = useColor();
  return (
    <>
      <div
        className=" w-full md:w-5/6 lg:w-3/4 h-96 "
        style={{ boxShadow: theme.boxShadow }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2668467100134!2d77.5706285751567!3d12.954769087359047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15faaa74dd43%3A0x517b0248e308423b!2sSri%20Madhwa%20Yuvaka%20Sangha!5e0!3m2!1sen!2sin!4v1707397865438!5m2!1sen!2sin"
          width="100%"
          height="100%"
          className="rounded-3xl"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

const GetContactForm = () => {
  const { theme } = useColor();
  return (
    <>
      <div className="">
        <div className="flex flex-col md:flex-row justify-center lg:justify-evenly gap-2 lg:gap-3">
          <div className="w-full md:w-10/12">
            <input
              type="text"
              placeholder="name"
              style={{ boxShadow: theme.boxShadow, borderColor: "transparent" }}
              className={`w-11/12 md:w-10/12 bg-transparent border-2 rounded-lg text-2xl text-gray-950 pl-3 placeholder-${theme.subContent} active:bg-transparent active:border-transparent focus:border-transparent focus:bg-transparent`}
            />
          </div>
          <div className="w-full md:w-10/12 ">
            <input
              type="text"
              placeholder="name"
              style={{ boxShadow: theme.boxShadow, borderColor: "transparent",  }}
              className={`w-11/12 md:w-10/12 bg-transparent border-2 border-black rounded-lg text-2xl text-gray-950 pl-3 placeholder-${theme.subContent} active:bg-transparent focus:bg-transparent`}
            />
          </div>
        </div>

        <div className="mt-4">
          <input
            type="text"
            style={{
              boxShadow: theme.boxShadow,
              borderColor: "transparent",
              color: theme.subContent
            }}
            placeholder="name"
            className={`pb-16 bg-transparent w-11/12 border-2  rounded-lg text-2xl  pl-3 placeholder-${theme.subContent} active:bg-transparent focus:bg-transparent`}
          />
        </div>
        <div
          className="flex gap-2 p-4 border-2 w-fit mt-4 rounded-xl cursor-pointer 
                hover:bg-gray-700 focus:bg-green-500 active:bg-green-700 transition-colors"
        >
          <div className="">
            <BsSendFill size={25} color={theme.logo}/>
          </div>
          <div className="" style={{color:theme.subContent}}>Send Message</div>
        </div>
      </div>
    </>
  );
};

export default function Contact() {
  const{theme}=useColor()
  return (
    <>
      <div className="">
        <Heading value={"Contact"} />
        <div className=" mt-6 flex justify-center">
          <GetMap />
        </div>
        <div className="mt-6">
          <div className="mb-4 font-bold text-2xl" style={{color:theme.heading}}>Contact Form</div>
          <GetContactForm />
        </div>
      </div>
    </>
  );
}
