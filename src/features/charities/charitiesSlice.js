import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { handleError } from "../../utils/handleError";
import { getAllCharitiesThunk } from "./charitiesThunk";

const initialState = {
  isLoading: true,

  isError: false,
  charities: [],
};
export const getAllCharities = createAsyncThunk(
  "charities/allCharities",
  getAllCharitiesThunk
);

const charitiesSlice = createSlice({
  name: "charities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCharities.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getAllCharities.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.charities = payload.charities;
      })
      .addCase(getAllCharities.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        handleError(payload);
      });
  },
});

export const { handleChange } = charitiesSlice.actions;
export default charitiesSlice.reducer;
