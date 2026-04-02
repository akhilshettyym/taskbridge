import authReducer from "../slices/authSlice";
import taskReducer from "../slices/taskSlice";
import { configureStore } from "@reduxjs/toolkit";
import superAdminReducer from "../slices/superAdminOrgSlice";
import organizationReducer from "../slices/organizationSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        tasks: taskReducer,
        organization: organizationReducer,
        superadmin: superAdminReducer,
    },
});