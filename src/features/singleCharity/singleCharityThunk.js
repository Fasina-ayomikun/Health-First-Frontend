import { toast } from "react-toastify";
import { customUrl } from "../../utils/axios";
import { checkUserAuthorization } from "../../utils/functions";
import { getAllCharities } from "../charities/charitiesSlice";
import { clearState } from "./singleCharitySlice";

const getSingleCharityThunk = async (id, thunkAPI) => {
  try {
    const resp = await customUrl.get(`/charities/${id}`, {
      withCredentials: true,
    });
    return resp.data;
  } catch (error) {
    return checkUserAuthorization(error, thunkAPI);
  }
};

const createCharityThunk = async (body, thunkAPI) => {
  try {
    const resp = await customUrl.post("/charities", body, {
      withCredentials: true,
    });
    thunkAPI.dispatch(clearState());
    return resp.data;
  } catch (error) {
    return checkUserAuthorization(error, thunkAPI);
  }
};
const editCharityThunk = async (body, thunkAPI) => {
  try {
    const { editId, title, description, amountNeeded } = body;
    const resp = await customUrl.patch(
      `/charities/${editId}`,
      { title, description, amountNeeded },
      {
        withCredentials: true,
      }
    );
    thunkAPI.dispatch(clearState());
    return resp.data;
  } catch (error) {
    return checkUserAuthorization(error, thunkAPI);
  }
};
const deleteCharityThunk = async (id, thunkAPI) => {
  try {
    const resp = await customUrl.delete(
      `/charities/${id}`,

      {
        withCredentials: true,
      }
    );
    thunkAPI.dispatch(getAllCharities());

    toast.success(resp.data.msg);
    return resp.data;
  } catch (error) {
    return checkUserAuthorization(error, thunkAPI);
  }
};
export {
  deleteCharityThunk,
  editCharityThunk,
  getSingleCharityThunk,
  createCharityThunk,
};
