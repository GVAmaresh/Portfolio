import { useColor } from "@/app/ColorContext";
import { IMyProjects } from "@/redux/Interface";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, IconButton, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { MdDelete } from "react-icons/md";
import { addGroups, addMyProjects } from "@/redux/redux/projectDetails";

export default function EditProjectDetails({
  saveData
}: {
  saveData: boolean;
}) {
  const { theme } = useColor();
  const { my_projects: reduxProjects } = useSelector(
    (state: RootState) => state.project
  );

  const [projects, setProjects] = useState<IMyProjects[]>([]);

  useEffect(() => {
    setProjects(reduxProjects);
  }, [reduxProjects]);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(saveData);
    if (saveData) {
      console.log(projects);
      dispatch(addMyProjects(projects));
    }
  }, [saveData, dispatch]);

  const handleProjectChange = (
    index: number,
    field: keyof IMyProjects,
    value: string | string[] | number
  ) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value
    };
    setProjects(updatedProjects);
  };

  const handleArrayChange = (
    projectIndex: number,
    field: keyof IMyProjects,
    arrayIndex: number,
    value: string
  ) => {
    const updatedProjects = [...projects];
    const updatedArray = [
      ...(updatedProjects[projectIndex][field] as string[])
    ];
    updatedArray[arrayIndex] = value;
    updatedProjects[projectIndex] = {
      ...updatedProjects[projectIndex],
      [field]: updatedArray
    };
    setProjects(updatedProjects);
  };

  const handleAddToArray = (projectIndex: number, field: keyof IMyProjects) => {
    const updatedProjects = [...projects];
    const updatedArray = [
      ...(updatedProjects[projectIndex][field] as string[]),
      ""
    ];
    updatedProjects[projectIndex] = {
      ...updatedProjects[projectIndex],
      [field]: updatedArray
    };
    setProjects(updatedProjects);
  };

  const handleRemoveFromArray = (
    projectIndex: number,
    field: keyof IMyProjects,
    arrayIndex: number
  ) => {
    const updatedProjects = [...projects];
    const updatedArray = [
      ...(updatedProjects[projectIndex][field] as string[])
    ];
    updatedArray.splice(arrayIndex, 1);
    updatedProjects[projectIndex] = {
      ...updatedProjects[projectIndex],
      [field]: updatedArray
    };
    setProjects(updatedProjects);
  };

  const handleAddProject = () => {
    setProjects([
      ...projects,
      {
        title: "",
        shortDescription: "",
        description: "",
        github: [],
        liveSite: [],
        technologies: [],
        category: [],
        priority: 0,
        photo: []
      }
    ]);
  };

  const handleDeleteProject = (index: number) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  return (
    <div className="p-4">
      <div className="mb-3" style={{ color: theme.subContent }}>
        Project Details
      </div>
      <div className="space-y-6">
        {projects?.map((project, projectIndex) => (
          <div
            key={projectIndex}
            className="p-4 shadow-md rounded-lg"
            style={{ boxShadow: theme.boxShadow }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TextField
                label="Title"
                value={project.title}
                onChange={(e) =>
                  handleProjectChange(projectIndex, "title", e.target.value)
                }
                fullWidth
                variant="standard"
              />
              <TextField
                label="Short Description"
                value={project.shortDescription}
                onChange={(e) =>
                  handleProjectChange(
                    projectIndex,
                    "shortDescription",
                    e.target.value
                  )
                }
                fullWidth
                variant="standard"
              />
              <TextField
                label="Description"
                value={project.description}
                onChange={(e) =>
                  handleProjectChange(
                    projectIndex,
                    "description",
                    e.target.value
                  )
                }
                fullWidth
                multiline
                maxRows={4}
                variant="standard"
              />

              <div className="col-span-2">
                <label className="block text-sm font-medium">
                  GitHub Links
                </label>
                <div className=" flex flex-wrap">
                  {project.github.map((githubLink, arrayIndex) => (
                    <div
                      key={arrayIndex}
                      className="flex items-center space-x-2 mt-2 w-full md:w-1/3 "
                    >
                      <TextField
                        value={githubLink}
                        multiline
                        maxRows={5}
                        onChange={(e) =>
                          handleArrayChange(
                            projectIndex,
                            "github",
                            arrayIndex,
                            e.target.value
                          )
                        }
                        fullWidth
                        variant="standard"
                      />
                      <IconButton
                        onClick={() =>
                          handleRemoveFromArray(
                            projectIndex,
                            "github",
                            arrayIndex
                          )
                        }
                        size="small"
                      >
                        <MdDelete color="black" />
                      </IconButton>
                    </div>
                  ))}
                  <IconButton
                    onClick={() => handleAddToArray(projectIndex, "github")}
                    className=""
                    size="small"
                  >
                    <AddIcon />
                  </IconButton>
                </div>
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium">Categories</label>
                <div className="flex flex-wrap">
                  {project.category.map((category, arrayIndex) => (
                    <div
                      key={arrayIndex}
                      className="flex items-center space-x-2 mt-2 w-full md:w-1/3"
                    >
                      <TextField
                        multiline
                        maxRows={5}
                        value={category}
                        onChange={(e) =>
                          handleArrayChange(
                            projectIndex,
                            "category",
                            arrayIndex,
                            e.target.value
                          )
                        }
                        fullWidth
                        variant="standard"
                      />
                      <IconButton
                        onClick={() =>
                          handleRemoveFromArray(
                            projectIndex,
                            "category",
                            arrayIndex
                          )
                        }
                        size="small"
                      >
                        <MdDelete color="black" />
                      </IconButton>
                    </div>
                  ))}
                  <IconButton
                    onClick={() => handleAddToArray(projectIndex, "category")}
                    className=""
                    size="small"
                  >
                    <AddIcon />
                  </IconButton>
                </div>
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium">Photo URLs</label>
                {project.photo.map((photo, arrayIndex) => (
                  <div
                    key={arrayIndex}
                    className="flex items-center space-x-2 mt-2"
                  >
                    <TextField
                      value={photo}
                      multiline
                      maxRows={12}
                      onChange={(e) =>
                        handleArrayChange(
                          projectIndex,
                          "photo",
                          arrayIndex,
                          e.target.value
                        )
                      }
                      fullWidth
                      variant="standard"
                    />
                    <IconButton
                      onClick={() =>
                        handleRemoveFromArray(projectIndex, "photo", arrayIndex)
                      }
                      size="small"
                    >
                      <MdDelete color="black" />
                    </IconButton>
                  </div>
                ))}
                <IconButton
                  onClick={() => handleAddToArray(projectIndex, "photo")}
                  className=""
                  size="small"
                >
                  <AddIcon />
                </IconButton>
              </div>

              <TextField
                label="Priority"
                value={project.priority}
                onChange={(e) =>
                  handleProjectChange(
                    projectIndex,
                    "priority",
                    Number(e.target.value)
                  )
                }
                fullWidth
                type="number"
                variant="standard"
              />
            </div>
          </div>
        ))}

        <div className="">
          <IconButton onClick={handleAddProject} size="large">
            <AddIcon style={{ color: theme.color }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export const EditProjectGroupDetails = ({
  saveData
}: {
  saveData: boolean;
}) => {
  const { theme } = useColor();
  const { groups: reduxProjectGroup } = useSelector(
    (state: RootState) => state.project
  );
  const [projectGroup, setProjectGroup] = useState<string[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setProjectGroup(reduxProjectGroup);
  }, [reduxProjectGroup]);

  useEffect(() => {
    if (saveData) {
      dispatch(addGroups(projectGroup));
    }
  }, [saveData, dispatch, projectGroup]);

  const handleGroupChange = (index: number, value: string) => {
    const updatedGroups = [...projectGroup];
    updatedGroups[index] = value;
    setProjectGroup(updatedGroups);
  };

  const handleAddGroup = () => {
    setProjectGroup([...projectGroup, ""]);
  };

  const handleDeleteGroup = (index: number) => {
    setProjectGroup(projectGroup.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      <div
        className="font-semibold text-lg mb-4"
        style={{ color: theme.subContent }}
      >
        Project Groups
      </div>

      <div className="flex flex-wrap gap-3">
        {projectGroup.map((group, index) => (
          <div key={index} className="flex items-center mb-2">
            <TextField
              label={`Group ${index + 1}`}
              value={group}
              onChange={(e) => handleGroupChange(index, e.target.value)}
              variant="standard"
              fullWidth
            />
            <IconButton onClick={() => handleDeleteGroup(index)} size="small">
              <MdDelete color="black" />
            </IconButton>
          </div>
        ))}
      <div className="">
        <IconButton onClick={handleAddGroup} size="large">
          <AddIcon style={{ color: theme.color }} />
        </IconButton>
      </div>
      </div>
    </div>
  );
};
