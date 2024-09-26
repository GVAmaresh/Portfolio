import Side_Comp from "@/components/SideNav_Comp/Side_Comp";
import Side_Comp_lg from "@/components/SideNav_Comp/Side_comp_lg";

export default function SideNav({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen pt-12 md:pt-12 lg:pt-16 px-4 md:px-16 lg:px-32 gap-2 md:gap-4 lg:gap-10 flex flex-col lg:flex-row ">
      <div className="w-full lg:w-1/4  bg-red-300 rounded-3xl">
        <div className="hidden lg:contents "></div>
        <div className=" contents lg:hidden h-full">
          <Side_Comp />
        </div>
        <div className="hidden lg:contents">
          <Side_Comp_lg/>
        </div>
      </div>

      <div className="w-full lg:w-2/3 flex-grow h-1/2 lg:h-auto bg-slate-500 rounded-3xl">
        {children}
      </div>
    </div>
  );
}
