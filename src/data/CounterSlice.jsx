import { createSlice } from "@reduxjs/toolkit";



const CounterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            if (state.count <= 0) {
                state.count = 0
            } else state.count -= 1
        },
    }
})

export default CounterSlice.reducer
export const { increment, decrement } = CounterSlice.actions