import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,

  reducers: {

    setAllTasks: (state, action) => {
      state.tasks = action.payload;
    },

    createTaskSuccess: (state, action) => {
      state.tasks.unshift(action.payload);
    },

    updateTaskSuccess: (state, action) => {
      const index = state.tasks.findIndex(
        (task) =>
          task._id === action.payload._id ||
          task.id === action.payload.id
      );

      if (index !== -1) {
        state.tasks[index] = {
          ...state.tasks[index],
          ...action.payload,
        };
      }
    },

    deleteTaskSuccess: (state, action) => {
      state.tasks = state.tasks.filter(
        (task) =>
          task._id !== action.payload &&
          task.id !== action.payload
      );
    },

    setTaskLoading: (state, action) => {
      state.loading = action.payload;
    },

    setTaskError: (state, action) => {
      state.error = action.payload;
    },

    clearTaskError: (state) => {
      state.error = null;
    },
  },
});

export const {
  setAllTasks,
  createTaskSuccess,
  updateTaskSuccess,
  deleteTaskSuccess,
  setTaskLoading,
  setTaskError,
  clearTaskError,
} = taskSlice.actions;

export default taskSlice.reducer;