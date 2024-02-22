import { RootState } from "@/createStore";
import { AffiliateStatus } from "@/types";

export const selectAffiliateState = (state: RootState) => state.influencer;

export const selectAffiliateStatus = (state: RootState) =>
  state.influencer.affiliateStatus;

export const selectIsLegalAgeAcknowledged = (state: RootState) =>
  state.influencer.isLegalAgeAcknowledged;

export const selectIsMinorAgeAcknowledged = (state: RootState) =>
  state.influencer.isMinorAgeAcknowledged;

export const selectMinorsGuardianInfo = (state: RootState) =>
  state.influencer.minorsGuardianInfo;

export const selectAddedSocialMediaAccounts = (state: RootState) =>
  state.influencer.addedSocialMediaAccounts;

export const selectCity = (state: RootState) => state.influencer.city;

export const selectState = (state: RootState) => state.influencer.state;

export const selectCountry = (state: RootState) => state.influencer.country;

export const selectCreatorCode = (state: RootState) =>
  state.influencer.creatorCode;

export const selectIsLoading = (state: RootState) => state.influencer.isLoading;

export const selectError = (state: RootState) => state.influencer.error;

export const selectAffiliateIsActive = (state: RootState) =>
  selectAffiliateStatus(state) === AffiliateStatus.ACTIVE;
