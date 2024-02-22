import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/db";
import { AffiliateStatus, GuardianType } from "@/types";

interface CreateInfluencerProfileRequestBody {
  userId: string;
  affiliateStatus: AffiliateStatus;
  isLegalAgeAcknowledged: boolean;
  isMinorAgeAcknowledged: boolean;
  minorsGuardianInfo?: {
    firstName: string;
    lastName: string;
    type: GuardianType; // Ensure type is of GuardianType enum
  };
  addedSocialMediaAccounts: {
    id: string;
    handle: string;
    url: string;
    type: string;
  }[];
  city: string;
  state: string;
  country: string;
  creatorCode: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const body: CreateInfluencerProfileRequestBody = req.body;

      const affiliate = await db.affiliate.create({
        data: {
          user: { connect: { id: body.userId } }, // Update userId to user
          affiliateStatus: AffiliateStatus.ACTIVE,
          isLegalAgeAcknowledged: body.isLegalAgeAcknowledged,
          isMinorAgeAcknowledged: body.isMinorAgeAcknowledged,
          minorsGuardianInfo: {
            create: body.minorsGuardianInfo || {},
          },
          addedSocialMediaAccounts: {
            create: body.addedSocialMediaAccounts,
          },
          city: body.city,
          state: body.state,
          country: body.country,
          creatorCode: body.creatorCode,
        },
      });

      return res.status(200).json(affiliate);
    } catch (error) {
      console.error("Request error", error);
      res.status(500).json({
        error: "Error creating influencer profile",
        errorMessage: error.message,
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
