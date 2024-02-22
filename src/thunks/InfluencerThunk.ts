import InfluencerApi from "@/api/InfluencerApi";
import { selectAffiliateState } from "@/selectors/InfluencerSelector";

import { createAsyncThunk } from "@reduxjs/toolkit";

// Thunk for creating an influencer profile
export const createInfluencerProfileThunk = createAsyncThunk(
  "influencer/createProfile",
  async (profileData, { rejectWithValue }) => {
    try {
      const response = await InfluencerApi.createInfluencerProfile(profileData);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getInfluencerProfileThunk = createAsyncThunk(
  "influencer/getProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await InfluencerApi.getInfluencerProfile();
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

// Thunk for resending email verification
export const resendEmailVerificationThunk = createAsyncThunk(
  "influencer/resendEmailVerification",
  async (_, { rejectWithValue }) => {
    try {
      const response = await InfluencerApi.resendEmailVerification();
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

// Thunk for retrieving account social links
export const getAccountSocialLinksThunk = createAsyncThunk(
  "influencer/getSocialLinks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await InfluencerApi.getAccountSocialLinks();
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
