import { logoutUser } from "../features/user/userSlice";
import { getFromLocalStorage } from "./localStorage";

const user = getFromLocalStorage();

const checkUser = (itemUser) => {
  if (user?.email === itemUser?.email) {
    return "You";
  } else {
    return itemUser?.firstName;
  }
};
const checkUserPermission = (referenceEmail) => {
  if (referenceEmail && user) {
    return user.email === referenceEmail;
  }
  return;
};
const profileCharities = (charities, id) => {
  return charities.filter((charity) => charity?.user?._id === id);
};
const checkUserAuthorization = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(logoutUser());
    return thunkAPI.rejectWithValue("Unauthorized Access,Logging Out...");
  } else {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export {
  checkUserPermission,
  checkUserAuthorization,
  profileCharities,
  checkUser,
};
