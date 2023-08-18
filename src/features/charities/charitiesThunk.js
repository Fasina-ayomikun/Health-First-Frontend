import { customUrl } from "../../utils/axios";
import { checkUserAuthorization } from "../../utils/functions";

const getAllCharitiesThunk = async (_, thunkAPI) => {
  try {
    const resp = await customUrl.get("/charities", {
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": process.env.REACT_APP_SERVER_URL,
      },
    });
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    checkUserAuthorization(error, thunkAPI);
  }
};

export { getAllCharitiesThunk };
