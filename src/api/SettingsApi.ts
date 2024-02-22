import axios from "axios";
import Url from "../constants/Url";
import { convertJsonToFormData } from "../utils/Utils";

class SettingsApi {
  getAffiliateSlugOptions() {
    return axios
      .get(Url.GET_AFFILIATE_SLUG_OPTIONS)
      .then((response) => response.data)
      .catch((ex) => {
        console.error("Failed to getAffiliateSlugOptions:", ex.message);
        throw ex;
      });
  }

  getInfluencerProfile() {
    return axios
      .get(Url.GET_INFLUENCER_PROFILE)
      .then((response) => response.data)
      .catch((ex) => {
        console.error("Failed to getInfluencerProfile:", ex.message);
        throw ex;
      });
  }

  // Assuming `data` is of type `any`, but you should define a more specific type if possible
  updateAffiliateProfile(data: any) {
    return axios
      .post(Url.UPDATE_INFLUENCER_PROFILE, data)
      .then((response) => response.data)
      .catch((ex) => {
        console.error("Failed to updateAffiliateProfile:", ex.message);
        throw ex;
      });
  }

  getTaxInfo() {
    return axios
      .get(Url.GET_TAX_INFO)
      .then((response) => response.data)
      .catch((ex) => {
        console.error("Failed to getTaxInfo:", ex.message);
        throw ex;
      });
  }

  updateTaxInfo(data: any) {
    return axios
      .post(Url.UPDATE_TAX_INFO, data)
      .then((response) => response.data)
      .catch((ex) => {
        console.error("Failed to updateTaxInfo:", ex.message);
        throw ex;
      });
  }

  getPayoutAccount() {
    return axios
      .get(Url.GET_PAYOUT_ACCOUNT)
      .then((response) => response.data)
      .catch((ex) => {
        console.error("Failed to getPayoutAccount:", ex.message);
        throw ex;
      });
  }

  // Fixed syntax error in method signature
  updatePayoutAccount(data: any) {
    return axios
      .post(Url.UPDATE_PAYOUT_ACCOUNT, data)
      .then((response) => response.data)
      .catch((ex) => {
        console.error("Failed to updatePayoutAccount:", ex.message);
        throw ex;
      });
  }

  checkW9Form() {
    return axios
      .get(Url.CHECK_W9FORM)
      .then((response) => response.data)
      .catch((ex) => {
        console.error("Failed to checkW9Form:", ex.message);
        throw ex;
      });
  }

  uploadW9Form(data: any) {
    return axios
      .post(Url.UPLOAD_W9FORM, convertJsonToFormData(data), {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => response.data)
      .catch((ex) => {
        console.error("Failed to upload W9 Form:", ex.message); // Corrected error message for consistency
        throw ex;
      });
  }
}

export default new SettingsApi();
