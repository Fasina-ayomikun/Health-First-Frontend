import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { handleError } from "../../utils/handleError";
import {
  createDonationThunk,
  getCharityDonationThunk,
  getUserDonationThunk,
} from "./singleDonationThunk";

const initialState = {
  amountDonated: "",
  charity: "",

  createdAt: "",
  userDonations: [],
  charityDonations: [],
  isLoading: false,
  isError: false,
};

export const createDonation = createAsyncThunk(
  "donations/createDonation",
  async (body, thunkAPI) => {
    return createDonationThunk(body, thunkAPI);
  }
);
export const getUserDonations = createAsyncThunk(
  "donations/userDonation",
  async (id, thunkAPI) => {
    return getUserDonationThunk(id, thunkAPI);
  }
);
export const getCharityDonations = createAsyncThunk(
  "donations/charityDonation",
  async (id, thunkAPI) => {
    return getCharityDonationThunk(id, thunkAPI);
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
      })
      .addCase(getUserDonations.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getUserDonations.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.userDonations = payload.donations;

        toast.success(payload.msg);
      })
      .addCase(getUserDonations.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;

        handleError(payload);
      })
      .addCase(getCharityDonations.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getCharityDonations.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.charityDonations = payload.donations;

        toast.success(payload.msg);
      })
      .addCase(getCharityDonations.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;

        handleError(payload);
      });
  },
});
export const { handleChange, clearState } = singleDonationSlice.actions;
export default singleDonationSlice.reducer;
