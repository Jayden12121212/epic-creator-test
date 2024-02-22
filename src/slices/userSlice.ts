import { HYDRATE } from "next-redux-wrapper";
import {
  createSlice,
  PayloadAction,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
import { Session } from "next-auth";

interface UserState {
  session: Session | null;
}

const initialState: UserState = {
  session: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<Session | null>) => {
      state.session = action.payload;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<UserState>) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      console.log("Hydrating state");
      return {
        ...state,
        ...action.payload.user,
      };
    });
  },
});

export const { setSession } = userSlice.actions;
export default userSlice.reducer;
