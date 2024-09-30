import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProjects, IMyProjects } from "../Interface";

const initialState: IProjects = {
  groups: [],
  my_projects: [],
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    fetchProjectsStart(state) {
      state.groups = [];
      state.my_projects = [];
    },
    fetchProjectsSuccess(state, action: PayloadAction<IProjects>) {
      state.groups = action.payload.groups;
      state.my_projects = action.payload.my_projects;
    },
    fetchProjectsFailure(state, action: PayloadAction<string>) {
      state.groups = [];
      state.my_projects = [];
      console.error(action.payload);
    },
    addGroups(state, action: PayloadAction<string[]>) {
      state.groups = action.payload;
    },
    addMyProjects(state, action: PayloadAction<IMyProjects[]>) {
      state.my_projects = action.payload;
    },
    addSingleProject(state, action: PayloadAction<IMyProjects>) {
      state.my_projects.push(action.payload);
    },
    updateProject(state, action: PayloadAction<{ index: number; project: IMyProjects }>) {
      const { index, project } = action.payload;
      state.my_projects[index] = project;
    },
    removeProject(state, action: PayloadAction<number>) {
      state.my_projects.splice(action.payload, 1);
    }
  }
});

export const {
  fetchProjectsStart,
  fetchProjectsSuccess,
  fetchProjectsFailure,
  addGroups,
  addMyProjects,
  addSingleProject,
  updateProject,
  removeProject
} = projectSlice.actions;

export default projectSlice.reducer;
