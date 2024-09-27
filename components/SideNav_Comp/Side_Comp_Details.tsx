import { useColor } from "@/app/ColorContext";
import { IconType } from "react-icons"; 

interface SideComponentDetailsProps {
  icon: IconType;
  label: string;
  value: string;
  link: string;
}

export default function Side_Component_Details({
  icon: Icon, 
  label,
  value,
  link,
}: SideComponentDetailsProps) {
  const {theme}=useColor()
  return (
    <div className="flex gap-4 p-2">
      <div className=" rounded-full p-2" style={{backgroundColor:theme.box}}>
        <Icon size={30} color={theme.logo}/>
      </div>
      <div>
        <div className="text-gray-500 text-xs" style={{color:theme.subContent}}>{label}</div>
        <a href={link} className="font-bold hover:font-extrabold cursor-pointer text-sm"style={{color:theme.heading}}>
          {value}
        </a>
      </div>
    </div>
  );
}
