import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getOrganizationDetails } from "../api/organization";

export const fetchOrganization = createAsyncThunk(
    "organization/fetchOrganization",
    async (_, { rejectWithValue }) => {
        try {
            const res = await getOrganizationDetails();
            return res;
        } catch (err) {
            return rejectWithValue(err.response?.data || "Error fetching org");
        }
    }
);

const organizationSlice = createSlice({
    name: "organization",
    initialState: {
        data: null,
        loading: false,
        error: null,
        loaded: false,
    },
    reducers: {
        clearOrganization: (state) => {
            state.data = null;
            state.loaded = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrganization.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchOrganization.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload?.organization || action.payload;
                state.loaded = true;
            })
            .addCase(fetchOrganization.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearOrganization } = organizationSlice.actions;
export default organizationSlice.reducer;