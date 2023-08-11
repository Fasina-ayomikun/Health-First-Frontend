import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { handleError } from "../../utils/handleError";
import { createDonationThunk } from "./singleDonationThunk";

const initialState = {
  amountDonated: "",
  charity: "",

  createdAt: "",
  isLoading: false,
  isError: false,
};

export const createDonation = createAsyncThunk(
  "donations/createDonation",
  async (body, thunkAPI) => {
    return createDonationThunk(body, thunkAPI);
  }
);
const singleDonationSlice = createSlice({
  name: "singleDonation",
  initialState,
  reducers: {
    handleChange: (state, { payload }) => {
      let { name, value } = payload;

      state[name] = value;
    },
    clearState: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(createDonation.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(createDonation.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;

        toast.success(payload.msg);
      })
      .addCase(createDonation.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;

        handleError(payload);
      });
  },
});
export const { handleChange, clearState } = singleDonationSlice.actions;
export default singleDonationSlice.reducer;
