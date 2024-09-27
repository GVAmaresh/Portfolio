import { useColor } from "@/app/ColorContext";

export default function Heading({value}:{value: string}) {
  const {theme} = useColor()
  return (
    <>
      <div className="">
        <div className=" font-extrabold text-3xl" style={{color:theme.heading}}>{value}</div>
        <div className="mt-2 border-4 w-16 rounded-2xl border-amber-400"></div>
      </div>
    </>
  );
}
