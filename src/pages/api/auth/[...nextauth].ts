import NextAuth from "next-auth";
import authConfig from "@/lib/authConfig";

export default NextAuth(authConfig);
