import { combineReducers } from "@reduxjs/toolkit";

// Slices
import influencerSlice from "./InfluencerSlice";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  influencer: influencerSlice,
  user: userSlice,
});

export default rootReducer;
