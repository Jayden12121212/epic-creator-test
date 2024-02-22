// Providers
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import Twitch from "next-auth/providers/twitch";
import InstagramProvider from "next-auth/providers/instagram";

import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db";

const authConfig: NextAuthOptions = {
  // @ts-ignore
  adapter: PrismaAdapter(db as any),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID || "",
      clientSecret: process.env.TWITTER_CLIENT_SECRET || "",
    }),
    Twitch({
      clientId: process.env.TWITCH_CLIENT_ID || "",
      clientSecret: process.env.TWITCH_CLIENT_SECRET || "",
    }),
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID || "",
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET || "",
    }),
  ],

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }

      return session;
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (!dbUser) {
        if (user) {
          token.id = user?.id;
        }

        return token;
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      };
    },
  },
};

export default authConfig;
