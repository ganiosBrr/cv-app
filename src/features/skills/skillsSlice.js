import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";


export const addSkill = createAsyncThunk(
    "skills/addSkill",
    async (skillData) => {
        try {
            const response = await fetch("/api/skills", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(skillData),
            });

            if (!response.ok) {
                throw new Error("Failed to fetch");
            }

            const skill = await response.json();
            const updatedSkill = {
                ...skill,
                id: uuidv4()
            };

            const storedSkills = localStorage.getItem("skills");
            const updatedSkills = storedSkills ? [...JSON.parse(storedSkills), updatedSkill] : [updatedSkill];
            localStorage.setItem("skills", JSON.stringify(updatedSkills));
            
            return updatedSkill;

        } catch (error) {
            console.error("Error fetching skills data:", error);
            throw error;
        }
    }
);

export const fetchSkills = createAsyncThunk("skills/fetchSkills", async () => {
    try {
      // Check localStorage first
      const storedSkills = localStorage.getItem("skills");
      if (storedSkills) {
        return JSON.parse(storedSkills);
      }
  
      // Fetch data from server if no data in localStorage
      const response = await fetch("/api/skills");
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
  
      const skills = await response.json();
      return skills;
    } catch (error) {
      console.error("Error fetching skills data:", error);
      throw error;
    }
  });

const skillsSlice = createSlice({
    name: "skills",
    initialState: {
        formRender: false,
        skills: [],
    },
    reducers: {
        toggleForm: (state) => {
            state.formRender = !state.formRender;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addSkill.fulfilled, (state, action) => {
            if (state.skills.length > 0) {
                state.skills.push(action.payload);
            } else {
                state.skills = [action.payload];
            }
        });
        builder.addCase(fetchSkills.fulfilled, (state, action) => {
            state.skills = action.payload;
        });
    }
});

export const { toggleForm } = skillsSlice.actions;
export default skillsSlice.reducer;