import axios from "axios";
import Url from "@/constants/Url";

class InfluencerApi {
  getInfluencerProfile() {
    return axios
      .get(Url.GET_INFLUENCER_PROFILE)
      .then((response) => response.data)
      .catch((ex) => {
        console.error("Failed to getInfluencerProfile:", ex.message);
        throw ex;
      });
  }

  createInfluencerProfile(data: any) {
    return axios
      .post(Url.CREATE_INFLUENCER_PROFILE, data)
      .then((response) => response.data)
      .catch((ex) => {
        console.error("Failed to create influencer profile:", ex.message);
        throw ex;
      });
  }

  resendEmailVerification() {
    return axios
      .post(Url.CREATE_RESEND_EMAIL_VERIFICATION, {})
      .then((response) => response.data)
      .catch((ex) => {
        console.error("Failed to resend email verification:", ex.message);
        throw ex;
      });
  }

  getAccountSocialLinks() {
    return axios
      .get(Url.GET_ACCOUNT_SOCIAL_LINKS)
      .then((response) => response.data)
      .catch((ex) => {
        console.error("Failed to get social links:", ex.message);
        throw ex;
      });
  }
}

export default new InfluencerApi();
