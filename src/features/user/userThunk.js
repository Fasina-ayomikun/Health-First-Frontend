import { customUrl } from "../../utils/axios";
const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customUrl.post(url, user, {
      withCredentials: true,
    });
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customUrl.post(url, user, {
      withCredentials: true,
    });
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
const logoutUserThunk = async (url, thunkAPI) => {
  try {
    const resp = await customUrl.get(url, {
      withCredentials: true,
    });

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
const singleUserThunk = async (url, thunkAPI) => {
  try {
    const resp = await customUrl.get(url, {
      withCredentials: true,
    });

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export { registerUserThunk, loginUserThunk, logoutUserThunk, singleUserThunk };
