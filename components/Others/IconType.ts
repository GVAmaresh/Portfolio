import { IconType } from "react-icons";
import { FcReading, FcConferenceCall  } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import { FaCode, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CiSaveDown1 } from "react-icons/ci";
import { CgWebsite } from "react-icons/cg";
import { SiThealgorithms } from "react-icons/si";
import { GiMeshNetwork } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa6"
import { HiServer } from "react-icons/hi";;
import { HiDatabase } from "react-icons/hi";
import { IoIosBrowsers } from "react-icons/io";
import { FaServer } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa6";
import { PiMouseRightClickFill } from "react-icons/pi";
import { AiOutlineCloudServer } from "react-icons/ai";


export const iconMapping: { [key: string]: IconType } = {
  "facebook": FaFacebook,
  "twitter": FaTwitter,
  "instagram": FaInstagram,
  "website":IoIosBrowsers,
  "backend":FaServer,
  "cloud":AiOutlineCloudServer,
  "deep": GiMeshNetwork ,
  "database":HiDatabase,
  "dsa":PiMouseRightClickFill,
  "github": FaGithub,
  "linkedin": FaLinkedin,
  "save":CiSaveDown1,
  "education":FcReading,
  "experience":FcConferenceCall,
  "code": FaCode,
  "delete": MdDelete
}