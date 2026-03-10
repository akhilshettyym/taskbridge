import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employees: [],
    loading: false,
    error: null,
};

const employeeSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        setEmployees
    }
})