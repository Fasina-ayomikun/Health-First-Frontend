import { toast } from "react-toastify";
import { customUrl } from "../../utils/axios";
import { checkUserAuthorization } from "../../utils/functions";
import { clearState, getCharityDonations } from "./singleDonationSlice";
import { getSingleCharity } from "../singleCharity/singleCharitySlice";

const createDonationThunk = async (body, thunkAPI) => {
  try {
    const resp = await customUrl.post("/donations", body, {
      withCredentials: true,
    });
    // thunkAPI.dispatch(getCharityDonations(resp.data.charity));
    // thunkAPI.dispatch(getSingleCharity(resp.data.donation.charity));
    thunkAPI.dispatch(clearState());
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    return checkUserAuthorization(error, thunkAPI);
  }
};
const getUserDonationThunk = async (id, thunkAPI) => {
  try {
    const resp = await customUrl.get(`/donations/${id}`, {
      withCredentials: true,
    });
    console.log(id);
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    return checkUserAuthorization(error, thunkAPI);
  }
};
const getCharityDonationThunk = async (id, thunkAPI) => {
  try {
    const resp = await customUrl.get(`/donations/charity/${id}`, {
      withCredentials: true,
    });
    console.log(id);
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export { createDonationThunk, getUserDonationThunk, getCharityDonationThunk };
