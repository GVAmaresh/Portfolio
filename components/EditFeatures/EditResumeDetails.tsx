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
  const { experience: reduxExperience } = useSelector((state: RootState) => state.resume);
  const dispatch = useDispatch();
  const [experience, setExperience] = useState<IExperience | null>(reduxExperience);

  useEffect(() => {
    if (saveData) {
      if (experience) {
        dispatch(addExperience(experience));
      }
    }
  }, [saveData, dispatch, experience]);

  useEffect(() => {
    setExperience(reduxExperience);
  }, [reduxExperience]);

  const handleInputChange = (index: number, field: keyof IMyWork, value: string) => {
    if (!experience) return;

    const updatedWork = [...(experience.myWork || [])];
    updatedWork[index] = {
      ...updatedWork[index],
      [field]: value,
    };

    setExperience({ ...experience, myWork: updatedWork });
  };

  const handleAddExperience = () => {
    setExperience((prevExperience) =>
      prevExperience
        ? {
            ...prevExperience,
            myWork: [
              ...(prevExperience.myWork || []),
              {
                company: "",
                position: "",
                duration: "",
                description: "",
                certificate: [],
              },
            ],
          }
        : null
    );
  };

  const handleRemoveExperience = (index: number) => {
    if (!experience) return;

    const updatedWork = [...(experience.myWork || [])];
    updatedWork.splice(index, 1);
    setExperience({ ...experience, myWork: updatedWork });
  };

  const handleAddCertificate = (workIndex: number) => {
    if (!experience) return;

    const updatedWork = [...(experience.myWork || [])];
    updatedWork[workIndex].certificate.push(""); // Add a new empty certificate

    setExperience({ ...experience, myWork: updatedWork });
  };

  const handleCertificateChange = (workIndex: number, certIndex: number, value: string) => {
    if (!experience) return;

    const updatedWork = [...(experience.myWork || [])];
    updatedWork[workIndex].certificate[certIndex] = value;

    setExperience({ ...experience, myWork: updatedWork });
  };

  return (
    <div className="p-4 ">
      {experience && (
        <div className="gap-4">
          <div className="mb-3" style={{ color: theme.subContent }}>
            Experience Details
          </div>
          <div className="flex flex-wrap gap-4">
            {experience.myWork&&experience.myWork.map((work, index) => (
              <div key={index} className="flex p-2" style={{ boxShadow: theme.boxShadow }}>
                <div className="w-72 flex flex-col gap-2">
                  <TextField
                    label="Company Name"
                    variant="outlined"
                    fullWidth
                    value={work.company}
                    onChange={(e) => handleInputChange(index, "company", e.target.value)}
                  />
                  <TextField
                    label="Position"
                    variant="outlined"
                    fullWidth
                    value={work.position}
                    onChange={(e) => handleInputChange(index, "position", e.target.value)}
                  />
                  <TextField
                    label="Duration"
                    variant="outlined"
                    fullWidth
                    value={work.duration}
                    onChange={(e) => handleInputChange(index, "duration", e.target.value)}
                  />
                  <TextField
                    label="Description"
                    variant="outlined"
                    fullWidth
                    value={work.description}
                    onChange={(e) => handleInputChange(index, "description", e.target.value)}
                  />
                  {work.certificate.map((cert, certIndex) => (
                    <TextField
                      key={certIndex}
                      label={`Certificate ${certIndex + 1}`}
                      variant="outlined"
                      fullWidth
                      value={cert}
                      onChange={(e) =>
                        handleCertificateChange(index, certIndex, e.target.value)
                      }
                    />
                  ))}
                  <IconButton onClick={() => handleAddCertificate(index)} size="small">
                    <AddIcon />
                  </IconButton>
                </div>
                <div>
                  <IconButton onClick={() => handleRemoveExperience(index)} color="error">
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
