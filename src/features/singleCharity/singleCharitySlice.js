import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { handleError } from "../../utils/handleError";
import {
  deleteCharityThunk,
  editCharityThunk,
  getSingleCharityThunk,
  createCharityThunk,
} from "./singleCharityThunk";

const initialState = {
  charityId: "",
  title: "",
  description: "",
  amountNeeded: "",
  amountDonated: "",
  createdAt: "",
  isLoading: false,
  isEditing: false,
  listOfDonors: [],
  user: [],
  image: "",
};

export const getSingleCharity = createAsyncThunk(
  "charities/singleCharity",
  getSingleCharityThunk
);
export const createCharity = createAsyncThunk(
  "charities/createCharity",
  async (body, thunkAPI) => {
    return createCharityThunk(body, thunkAPI);
  }
);
export const editCharity = createAsyncThunk(
  "charities/editCharity",
  async (body, thunkAPI) => {
    return editCharityThunk(body, thunkAPI);
  }
);

export const deleteCharity = createAsyncThunk(
  "charities/deleteCharity",
  async (id, thunkAPI) => {
    return deleteCharityThunk(id, thunkAPI);
  }
);
const singleCharitySlice = createSlice({
  name: "singleCharity",
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
      .addCase(getSingleCharity.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getSingleCharity.fulfilled, (state, { payload }) => {
        const {
          _id,
          title,
          description,
          listOfDonors,
          amountNeeded,
          amountDonated,
          user,
          image,
          medicalReport,

          createdAt,
        } = payload.charity;
        toast.success(payload.msg);
        return {
          ...state,
          isLoading: false,
          isError: false,
          charityId: _id,
          title,
          description,
          listOfDonors,
          amountNeeded,
          amountDonated,
          user,
          image,
          medicalReport,

          createdAt,
        };
      })
      .addCase(getSingleCharity.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        handleError(payload);
      })
      .addCase(createCharity.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(createCharity.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;

        toast.success(payload.msg);
        localStorage.setItem("Health-Charity-created", JSON.stringify(true));
      })
      .addCase(createCharity.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        handleError(payload);
      })
      .addCase(editCharity.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isEditing = false;
      })
      .addCase(editCharity.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;

        toast.success(payload.msg);
        localStorage.setItem("Health-Charity-created", JSON.stringify(true));
      })
      .addCase(editCharity.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.isEditing = false;
        handleError(payload);
      });
  },
});
export const {
  handleChange,

  clearState,
} = singleCharitySlice.actions;
export default singleCharitySlice.reducer;
