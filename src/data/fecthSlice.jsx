import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchCloths = createAsyncThunk("clothe/fetchCloths", async () => {
  const res = await axios(
    `https://www2.hm.com/en_gb/men/offers-highlights/member-offer/_jcr_content/main/productlisting.display.json?sort=stock&image-size=small&image=stillLife&offset=36&page-size=36`
  );
  return res.data;
});

const FetchSlice = createSlice({
  name: "clothe",
  initialState: {
    data: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCloths.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    });
    builder.addCase(fetchCloths.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCloths.rejected, (state) => {
      state.status = "faild";
    });
  },
});

export default FetchSlice.reducer;
