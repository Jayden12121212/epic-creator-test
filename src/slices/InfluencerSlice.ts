import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Affiliate, AffiliateStatus, GuardianType } from "@/types";
import { getInfluencerProfileThunk } from "@/thunks/InfluencerThunk";

const initialState: Affiliate = {
  affiliateStatus: AffiliateStatus.INIT,
  isLegalAgeAcknowledged: false,
  isMinorAgeAcknowledged: false,
  minorsGuardianInfo: {
    firstName: "",
    lastName: "",
    type: GuardianType.OTHER,
  },
  addedSocialMediaAccounts: [],
  city: "",
  state: "",
  country: "",
  creatorCode: "",
  isLoading: false,
  error: null,
};

const influencerSlice = createSlice({
  name: "influencer",
  initialState,
  reducers: {
    createInfluencerProfile(state) {
      state.isLoading = true;
    },
    createInfluencerProfileSuccess(state, action: AnyAction) {
      state.isLoading = false;
      state.creatorCode = action.payload.creatorCode;
      state.affiliateStatus = AffiliateStatus.PENDING;
    },
    createInfluencerProfileFailed(state, action: AnyAction) {
      state.isLoading = false;
      state.error = action.payload.error;
    },
    resendEmailVerification(state) {
      state.isLoading = true;
    },
    resendEmailVerificationSuccess(state) {
      state.isLoading = false;
    },
    resendEmailVerificationFailed(state, action: AnyAction) {
      state.isLoading = false;
      state.error = action.payload.error;
    },
    setAgeAcknowledgment: (
      state,
      action: PayloadAction<{ isLegalAgeAcknowledged: boolean }>
    ) => {
      const { isLegalAgeAcknowledged } = action.payload;

      // If legal age is acknowledged, set isMinorAgeAcknowledged to false and clear minorsGuardianInfo
      if (isLegalAgeAcknowledged) {
        state.isLegalAgeAcknowledged = true;
        state.isMinorAgeAcknowledged = false;
        state.minorsGuardianInfo = {
          firstName: "",
          lastName: "",
          type: GuardianType.OTHER,
        };
      } else {
        // If legal age is not acknowledged, we assume the user is acknowledging being under 18
        state.isLegalAgeAcknowledged = false;
        state.isMinorAgeAcknowledged = true;
        // No need to clear minorsGuardianInfo as it's expected to be filled
      }
    },
    updateSocialLinks(state, action: AnyAction) {
      state.addedSocialMediaAccounts = action.payload.socialLinks;
    },
    removeSocialChannel(state, action: AnyAction) {
      state.addedSocialMediaAccounts = state.addedSocialMediaAccounts.filter(
        (channel) => channel.id !== action.payload
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: AnyAction) => {
      return {
        ...state,
        ...action.payload.influencer,
        addedSocialMediaAccounts:
          action.payload.influencer.addedSocialMediaAccounts || [],
        minorsGuardianInfo: { ...action.payload.influencer.minorsGuardianInfo },
      };
    });
    builder.addCase(getInfluencerProfileThunk.fulfilled, (state, action) => {
      const profile = action.payload.influencerProfile[0];

      if (profile) {
        state.affiliateStatus =
          profile.affiliateStatus ?? state.affiliateStatus;
        state.isLegalAgeAcknowledged =
          profile.isLegalAgeAcknowledged ?? state.isLegalAgeAcknowledged;
        state.isMinorAgeAcknowledged =
          profile.isMinorAgeAcknowledged ?? state.isMinorAgeAcknowledged;
        state.city = profile.city ?? state.city;
        state.state = profile.state ?? state.state;
        state.country = profile.country ?? state.country;
        state.creatorCode = profile.creatorCode ?? state.creatorCode;
        state.isLoading = false;
        state.error = null;
      }
    });
  },
});

export const {
  createInfluencerProfile,
  createInfluencerProfileSuccess,
  createInfluencerProfileFailed,
  resendEmailVerification,
  resendEmailVerificationSuccess,
  resendEmailVerificationFailed,
  updateSocialLinks,
  removeSocialChannel,
} = influencerSlice.actions;

export default influencerSlice.reducer;
