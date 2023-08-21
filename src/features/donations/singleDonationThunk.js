import { toast } from "react-toastify";
import { customUrl } from "../../utils/axios";
import { checkUserAuthorization } from "../../utils/functions";
import { clearState, getCharityDonations } from "./singleDonationSlice";
import { getSingleCharity } from "../singleCharity/singleCharitySlice";
import { getAllCharities } from "../charities/charitiesSlice";

const createDonationThunk = async (body, thunkAPI) => {
  try {
    const resp = await customUrl.post("/donations", body, {
      withCredentials: true,
    });
    thunkAPI.dispatch(getCharityDonations(resp.data.donation.charity));
    thunkAPI.dispatch(getAllCharities());
    thunkAPI.dispatch(getSingleCharity(resp.data.donation.charity));

    return resp.data;
  } catch (error) {
    return checkUserAuthorization(error, thunkAPI);
  }
};
const createPaystackThunk = async (body, thunkAPI) => {
  try {
    const resp = await customUrl.post("/paystack", body, {
      withCredentials: true,
    });

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

    return resp.data;
  } catch (error) {
    return checkUserAuthorization(error, thunkAPI);
  }
};
export {
  createDonationThunk,
  getUserDonationThunk,
  createPaystackThunk,
  getCharityDonationThunk,
};
