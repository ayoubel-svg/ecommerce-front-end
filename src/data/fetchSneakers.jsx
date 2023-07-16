import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchSneakers = createAsyncThunk("sneakers/fetchCloths", async () => {
    const res = await axios(`https://api.escuelajs.co/api/v1/categories/4/products`)
    return res.data
})

const SneakersSlice = createSlice({
    name: "sneakers",
    initialState: {
        data: [],
        status: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSneakers.fulfilled, (state, { payload }) => {
            state.data = payload
            state.status = "success"
        })
        builder.addCase(fetchSneakers.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(fetchSneakers.rejected, (state) => {
            state.status = "faild"
        })
    }
})

export default SneakersSlice.reducer
