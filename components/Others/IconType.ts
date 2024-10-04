import { IconType } from "react-icons";
import { FcReading, FcConferenceCall  } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import { FaCode, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CiSaveDown1 } from "react-icons/ci";


export const iconMapping: { [key: string]: IconType } = {
  "facebook": FaFacebook,
  "twitter": FaTwitter,
  "instagram": FaInstagram,
  "github": FaGithub,
  "linkedin": FaLinkedin,
  "save":CiSaveDown1,
  "education":FcReading,
  "experience":FcConferenceCall,
  "code": FaCode,
  "delete": MdDelete
}