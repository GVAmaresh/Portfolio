import { useColor } from "@/app/ColorContext";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { IEducation, IMyEducation } from "@/redux/Interface";
import { MdDelete } from "react-icons/md";

export const EditEducationDetails = ({ saveData }: { saveData: boolean }) => {
  const { theme } = useColor();
  const { education: reduxEducation } = useSelector(
    (state: RootState) => state.resume
  );

  const [education, setEducation] = useState<IEducation | null>(null);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(saveData);
    if (saveData) {
      console.log(education);
      education && dispatch(addEducation(education));
    }
  }, [saveData, dispatch]);

  useEffect(() => {
    setEducation(reduxEducation);
  }, [reduxEducation]);

  const handleInputChange = (
    index: number,
    field: keyof IMyEducation,
    value: string
  ) => {
    const updatedEducation = [...(education?.myEducation || [])];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value
    };
    setEducation((prevEducation) =>
      prevEducation ? { ...prevEducation, myEducation: updatedEducation } : null
    );
  };

  const handleAddEducation = () => {
    setEducation((prevEducation) =>
      prevEducation
        ? {
            ...prevEducation,
            myEducation: [
              ...(prevEducation?.myEducation || []),
              {
                schoolName: "",
                duration: "",
                degree: "",
                major: "",
                description: ""
              }
            ]
          }
        : null
    );
  };

  const handleRemoveEducation = (index: number) => {
    const updatedEducation = [...(education?.myEducation || [])];
    updatedEducation.splice(index, 1);
    setEducation((prevEducation) =>
      prevEducation ? { ...prevEducation, myEducation: updatedEducation } : null
    );
  };

  const handleSave = () => {
    console.log("Saved Education Details: ", education);
  };

  return (
    <div className="p-4 ">
      {education && (
        <div className="gap-4">
          <div className="mb-3" style={{ color: theme.subContent }}>
            Education Details
          </div>
          <div className=" flex flex-wrap gap-4">
            {education &&
              education.myEducation &&
              education.myEducation.map((edu, index) => (
                <div
                  className="flex p-2"
                  style={{ boxShadow: theme.boxShadow }}
                >
                  <div key={index} className=" w-72 flex flex-col gap-2">
                    <div className=" ">
                      <TextField
                        label="School Name"
                        variant="outlined"
                        fullWidth
                        value={edu.schoolName}
                        onChange={(e) =>
                          handleInputChange(index, "schoolName", e.target.value)
                        }
                      />
                    </div>
                    <div className="">
                      <TextField
                        label="Duration"
                        variant="outlined"
                        fullWidth
                        value={edu.duration}
                        onChange={(e) =>
                          handleInputChange(index, "duration", e.target.value)
                        }
                      />
                    </div>
                    <div className="">
                      <TextField
                        label="Degree"
                        variant="outlined"
                        fullWidth
                        value={edu.degree}
                        onChange={(e) =>
                          handleInputChange(index, "degree", e.target.value)
                        }
                      />
                    </div>
                    <div className="">
                      <TextField
                        label="Major"
                        variant="outlined"
                        fullWidth
                        value={edu.major}
                        onChange={(e) =>
                          handleInputChange(index, "major", e.target.value)
                        }
                      />
                    </div>
                    <div className="">
                      <TextField
                        label="Description"
                        variant="outlined"
                        fullWidth
                        value={edu.description}
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            "description",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>{" "}
                  <div className="">
                    <IconButton
                      onClick={() => handleRemoveEducation(index)}
                      color="error"
                    >
                      <MdDelete color="black" />
                    </IconButton>
                  </div>
                </div>
              ))}

            <IconButton onClick={handleAddEducation} className="" size="small">
              <AddIcon />
            </IconButton>
          </div>
        </div>
      )}
    </div>
  );
};

import { IExperience, IMyWork } from "@/redux/Interface";
import {
  addEducation,
  addExperience,
  addSkills
} from "@/redux/redux/resumeDetails";

export const EditExperienceDetails = ({ saveData }: { saveData: boolean }) => {
  const { theme } = useColor();
  const { experience: reduxExperience } = useSelector(
    (state: RootState) => state.resume
  );

  const [experience, setExperience] = useState<IExperience | null>(null);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(saveData);
    if (saveData) {
      console.log(experience);
      experience && dispatch(addExperience(experience));
    }
  }, [saveData, dispatch]);

  useEffect(() => {
    setExperience(reduxExperience);
  }, [reduxExperience]);

  const handleInputChange = (
    index: number,
    field: keyof IMyWork,
    value: string
  ) => {
    const updatedWork = [...(experience?.myWork || [])];
    updatedWork[index] = {
      ...updatedWork[index],
      [field]: value
    };
    setExperience((prevExperience) =>
      prevExperience ? { ...prevExperience, myWork: updatedWork } : null
    );
  };

  const handleAddExperience = () => {
    setExperience((prevExperience) =>
      prevExperience
        ? {
            ...prevExperience,
            myWork: [
              ...(prevExperience?.myWork || []),
              {
                company: "",
                position: "",
                duration: "",
                description: "",
                certificate: []
              }
            ]
          }
        : null
    );
  };

  const handleRemoveExperience = (index: number) => {
    const updatedWork = [...(experience?.myWork || [])];
    updatedWork.splice(index, 1);
    setExperience((prevExperience) =>
      prevExperience ? { ...prevExperience, myWork: updatedWork } : null
    );
  };

  const handleSave = () => {
    console.log("Saved Experience Details: ", experience);
  };

  return (
    <div className="p-4 ">
      {experience && (
        <div className="gap-4">
          <div className="mb-3" style={{ color: theme.subContent }}>
            Experience Details
          </div>
          <div className="flex flex-wrap gap-4">
            {experience &&
              experience.myWork &&
              experience.myWork.map((work, index) => (
                <div
                  className="flex p-2"
                  style={{ boxShadow: theme.boxShadow }}
                  key={index}
                >
                  <div className="w-72 flex flex-col gap-2">
                    <TextField
                      label="Company Name"
                      variant="outlined"
                      fullWidth
                      value={work.company}
                      onChange={(e) =>
                        handleInputChange(index, "company", e.target.value)
                      }
                    />
                    <TextField
                      label="Position"
                      variant="outlined"
                      fullWidth
                      value={work.position}
                      onChange={(e) =>
                        handleInputChange(index, "position", e.target.value)
                      }
                    />
                    <TextField
                      label="Duration"
                      variant="outlined"
                      fullWidth
                      value={work.duration}
                      onChange={(e) =>
                        handleInputChange(index, "duration", e.target.value)
                      }
                    />
                    <TextField
                      label="Description"
                      variant="outlined"
                      fullWidth
                      value={work.description}
                      onChange={(e) =>
                        handleInputChange(index, "description", e.target.value)
                      }
                    />
                    {work.certificate.map((cert, index) => (
                      <TextField
                        key={index}
                        label={`Certificate ${index + 1}`}
                        variant="outlined"
                        fullWidth
                        value={cert}
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            "certificate",
                            e.target.value
                          )
                        }
                      />
                    ))}
                  </div>
                  <div className="">
                    <IconButton
                      onClick={() => handleRemoveExperience(index)}
                      color="error"
                    >
                      <MdDelete color="black" />
                    </IconButton>
                  </div>
                </div>
              ))}

            <IconButton onClick={handleAddExperience} className="" size="small">
              <AddIcon />
            </IconButton>
          </div>
        </div>
      )}
    </div>
  );
};

export const EditSkillsDetails = ({ saveData }: { saveData: boolean }) => {
  const { theme } = useColor();
  const { skills: reduxSkills } = useSelector(
    (state: RootState) => state.resume
  );
  const [skills, setSkills] = useState<string[]>([]);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(saveData);
    if (saveData) {
      console.log(skills);
      dispatch(addSkills(skills));
    }
  }, [saveData, dispatch]);

  useEffect(() => {
    setSkills(reduxSkills);
  }, [reduxSkills]);

  const handleSkillChange = (index: number, value: string) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const handleAddSkill = () => {
    setSkills([...skills, ""]);
  };

  return (
    <div className="p-4">
      <div className="mb-3" style={{ color: theme.subContent }}>
        Skills
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div className="">
            <TextField
              key={index}
              value={skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
              variant="outlined"
              label={`Skill ${index + 1}`}
              className="mb-2"
              fullWidth
            />
          </div>
        ))}
        <div className="">
          <IconButton onClick={handleAddSkill} className="" size="small">
            <AddIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
