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
  return (
    <div className="flex gap-4 p-2">
      <div className="bg-slate-500 rounded-full p-2">
        <Icon size={30} /> {/* Render the icon dynamically */}
      </div>
      <div>
        <div className="text-gray-500 text-xs">{label}</div>
        <a href={link} className="font-bold hover:font-extrabold cursor-pointer text-sm">
          {value}
        </a>
      </div>
    </div>
  );
}
