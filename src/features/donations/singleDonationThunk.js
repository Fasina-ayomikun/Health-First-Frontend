import { toast } from "react-toastify";
import { customUrl } from "../../utils/axios";
import { checkUserAuthorization } from "../../utils/functions";
// import { getRecipeReviews } from "../reviews/reviewsSlice";
// import { getSingleRecipe } from "../singleRecipe/singleRecipeSlice";
import { clearState } from "./singleDonationSlice";

const createDonationThunk = async (body, thunkAPI) => {
  try {
    const resp = await customUrl.post("/donations", body, {
      withCredentials: true,
    });
    // thunkAPI.dispatch(getRecipeReviews(resp.data.review.recipe));
    // thunkAPI.dispatch(getSingleRecipe(resp.data.review.recipe));
    thunkAPI.dispatch(clearState());
    return resp.data;
  } catch (error) {
    return checkUserAuthorization(error, thunkAPI);
  }
};
export { createDonationThunk };
