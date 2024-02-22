export interface Affiliate {
  affiliateStatus: AffiliateStatus;
  isLegalAgeAcknowledged: boolean;
  isMinorAgeAcknowledged: boolean;
  minorsGuardianInfo: MinorsGuardianInfo;
  addedSocialMediaAccounts: AddedSocialMediaAccounts[];
  city: string;
  state: string;
  country: string;
  creatorCode: string;
  isLoading: boolean;
  error: string | null;
}

export enum AffiliateStatus {
  INIT = "INIT",
  ACTIVE = "ACTIVE",
  PENDING = "PENDING",
  DISABLED = "DISABLED",
  REJECTED = "REJECTED",
  DELETED = "DELETED",
}

export interface MinorsGuardianInfo {
  firstName: string;
  lastName: string;
  type: GuardianType;
}

export enum GuardianType {
  FATHER = "FATHER",
  MOTHER = "MOTHER",
  OTHER = "OTHER",
}

export interface AddedSocialMediaAccounts {
  id: string;
  handle: string;
  url: string;
  type: SupportedSocials;
}

export enum SupportedSocials {
  YOUTUBE_CHANNEL,
  TWITCH_CHANNEL,
  FACEBOOK,
  VK,
  MIXER,
  TWITTER,
  INSTAGRAM,
  TIKTOK,
}
