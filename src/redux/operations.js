import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6442b75333997d3ef917d1ef.mockapi.io/";

export const fetchUsers = createAsyncThunk(
    "users/fetchAll",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get("/TweetsTest");
            return res.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const patchUser = createAsyncThunk(
    "users/patchFollows",
    async (user, thunkAPI) => {
        try {
            const res = await axios.put(`/TweetsTest/${user.id}`, {
                followers: user.isFollowing ? user.followers -1 : user.followers +1,
                isFollowing: !user.isFollowing
            });
            return res.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);