import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";

// Root Reducer
import rootReducer from "./slices";

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [HYDRATE],
        },
      }),
  });

export type RootState = ReturnType<ReturnType<typeof makeStore>["getState"]>;
export const reduxWrapper = createWrapper(makeStore, { debug: true });
export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];
