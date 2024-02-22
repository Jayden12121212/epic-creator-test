// Assuming db is correctly set up and db.affiliate.findMany is a valid query.
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/db";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import authConfig from "@/lib/authConfig";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const session = await getServerSession(req, res, authConfig);

    if (!session || !session.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const userId = session.user.id;

    // Ensure userId is valid and not null/undefined before making the query.
    if (!userId) {
      return res
        .status(400)
        .json({ error: "Bad request: User ID is missing." });
    }

    const influencerProfile = await db.affiliate.findMany({
      where: { userId: userId },
    });

    if (!influencerProfile || influencerProfile.length === 0) {
      return res.status(404).json({ error: "Influencer profile not found" });
    }

    // Return the influencer profile data as a JSON response.
    res.status(200).json({ influencerProfile });
  } catch (error: any) {
    console.error("Error fetching influencer profile:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
}
