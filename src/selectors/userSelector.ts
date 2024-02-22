import { RootState } from "@/createStore";
import { Session } from "next-auth";

export const selectSession = (state: RootState): Session | null =>
  state.user.session;
