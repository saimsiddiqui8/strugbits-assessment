import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getAllData = createAsyncThunk("getUsers", async () => {
    const res = await fetch("https://reqres.in/api/users?page=1");
    const result = await res.json();
    return result;
});

export const createUser = createAsyncThunk(
    "createUser", async (data, { rejectWithValue }) => {
        try {
            const res = await fetch("https://reqres.in/api/users?page=1", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await res.json();
            console.log(result);
            return result;
        } catch (error) {
            return rejectWithValue(error.res);
        }
    }
);

const gitUser = createSlice({
    name: "getuser",
    initialState: {
        users: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllData.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllData.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(getAllData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(createUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            });
    },
});

export default gitUser.reducer;
