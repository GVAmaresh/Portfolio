export interface IUserDetails {
  userName: string;
  photo: string;
  email: string;
  phoneNumber: number;
  birthDate: string;
  location: string;
  linkedin_url: string;
  leetcode_url: string;
  twitter_url:string,
  github_url: string;
  field: string[];
  loading?: boolean;
  error?: string | null;
}

export interface IWhatIamDoing {
  logo: string;
  title: string;
  description: string;
}
export interface ITestimonials {
  photo: string;
  name: string;
  company: string;
  position: string;
  description: string;
}

export interface IAbout_ME {
  introduction: string[];
  whatIamDoing: IWhatIamDoing[];
  whatIKnow: string[];
  testimonials: ITestimonials[];
}

export interface IMyWork {
  company: string;
  position: string;
  duration: string;
  description: string;
  certificate: string[];
}

export interface IMyEducation {
  schoolName: string;
  duration: string;
  degree: string;
  major: string;
  description: string;
}

export interface IExperience {
  logo?: string;
  title?: string;
  myWork?: IMyWork[];
  certificate?:string[]
}

export interface IEducation {
  logo?: string;
  title?: string;
  myEducation?: IMyEducation[];
}

export interface IResume {
  experience: IExperience;
  education: IEducation;
  skills: string[];
}

export interface IMyProjects {
  title: string;
  shortDescription: string;
  description: string;
  github: string[];
  liveSite: string[];
  technologies: string[];
  category: string[];
  priority: number;
  photo: string[];
}

export interface IProjects {
  groups: string[];
  my_projects: IMyProjects[];
}

export interface IContact {
  map: string;
}

export interface ITimelineComponents {
  title: string;
  duration: string;
  position: string;
  description: string;
  major?: string;
  certificate?: string[];
}

export interface IPortfolioComponents {
  title: string;
  technologies: string[];
  priority: number;
  photo: string[];
  liveSite: string[];
  github: string[];
  description: string;
  category:string[]
}
