import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProjects, IMyProjects } from "../Interface";
import { updateProjectDetails, updateProjectGroupsDetails } from "../firebase/firebaseProjectDetails";

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
      updateProjectGroupsDetails(action.payload)
    },
    addMyProjects(state, action: PayloadAction<IMyProjects[]>) {
      state.my_projects = action.payload;
      updateProjectDetails(action.payload)
    },

  }
});

export const {
  fetchProjectsStart,
  fetchProjectsSuccess,
  fetchProjectsFailure,
  addGroups,
  addMyProjects,
} = projectSlice.actions;

export default projectSlice.reducer;
