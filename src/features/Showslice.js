import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';

// fetching the data
export const getAllData = createAsyncThunk("getUsers", async () => {
    const res = await fetch("https://reqres.in/api/users?page=1");
    const result = await res.json();
    return result;
});

export const deleteUser = createAction("deleteUser");
export const editUser = createAction("editUser");
export const createUser = createAction("createUser");


const getUser = createSlice({
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
            .addCase(createUser, (state, action) => {
                const newUser = action.payload;
                state.users.data = Array.isArray(state.users.data)
                    ? [...state.users.data, newUser]
                    : [newUser];
            })
            .addCase(editUser, (state, action) => {
                const updatedUser = action.payload;
                // Ensuring that state.users.data is an array before mapping
                const userData = Array.isArray(state.users.data) ? state.users.data : [];

                // Find the index of the user to be updated
                const index = userData.findIndex((user) => user.id === updatedUser.id);

                // If the user is found, update it, otherwise, add it to the array
                if (index !== -1) {
                    state.users.data[index] = { ...userData[index], ...updatedUser };
                } else {
                    state.users.data.push(updatedUser);
                }
            })
        .addCase(deleteUser, (state, action) => {
            const userIdToDelete = action.payload;
            state.users.data = Array.isArray(state.users.data) ? state.users.data.filter(user => user.id !== userIdToDelete) : [];
        })
},
});

export default getUser.reducer;
