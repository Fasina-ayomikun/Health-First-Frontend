import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  removeFromLocalStorage,
  setToLocalStorage,
} from "../../utils/localStorage";
import {
  loginUserThunk,
  logoutUserThunk,
  registerUserThunk,
  singleUserThunk,
} from "./userThunk";

const initialState = {
  isLoading: false,
  isError: false,
  isEdited: false,
  user: [],
  profileUser: [],
};
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user, thunkAPI) => {
    return registerUserThunk("/auth/register", user, thunkAPI);
  }
);
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (user, thunkAPI) => {
    return loginUserThunk("/auth/login", user, thunkAPI);
  }
);
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    return logoutUserThunk("/auth/logout", thunkAPI);
  }
);
export const singleUser = createAsyncThunk(
  "auth/singleUser",
  async (id, thunkAPI) => {
    return singleUserThunk(`/users/${id}`, thunkAPI);
  }
);
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoading = false;
        state.isError = false;

        toast.success(payload.msg);
        setToLocalStorage(payload.user);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        toast.warning(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.user = payload.user;

        toast.success(payload.msg);
        setToLocalStorage(payload.user);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        toast.warning(payload);
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.user = null;

        toast.success(payload.msg);
        removeFromLocalStorage();
        window.location.reload(false);
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        toast.warning(payload);
      })
      .addCase(singleUser.pending, (state) => {
        state.isLoading = true;
        state.isEdited = false;
        state.isError = false;
      })
      .addCase(singleUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.profileUser = payload.user;

        localStorage.setItem(
          "Mama-charity-user-profile",
          JSON.stringify(payload.user)
        );
      })
      .addCase(singleUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        toast.warning(payload);
      });
  },
});

export default userSlice.reducer;
