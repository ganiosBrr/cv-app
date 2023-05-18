import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEducations = createAsyncThunk(
    "education/fetchEducations",
    async () => {
        try {
            const response = await fetch("/api/educations");
            if (!response.ok) {
                throw new Error("Failed to fetch education data.");
            }
            const data = await response.json();
            return data.educations;
        } catch (error) {
            console.error("Error fetching education data:", error);
            throw error;
        }
    }
);

const educationSlice = createSlice({
    name: "education",
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchEducations.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(fetchEducations.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
          })
          .addCase(fetchEducations.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
          });
      },
});

export default educationSlice.reducer;