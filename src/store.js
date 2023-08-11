import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import charitiesReducer from "./features/charities/charitiesSlice";
import singleCharityReducer from "./features/singleCharity/singleCharitySlice";
// import reviewsReducer from "./features/reviews/reviewsSlice";
import singleDonationReducer from "./features/donations/singleDonationSlice";
import filesReducer from "./features/files/filesSlice";
import modalReducer from "./features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    charities: charitiesReducer,
    // reviews: reviewsReducer,
    singleCharity: singleCharityReducer,
    singleDonation: singleDonationReducer,
    files: filesReducer,
    modal: modalReducer,
  },
});
