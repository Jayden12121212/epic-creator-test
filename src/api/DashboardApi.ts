import axios from "axios";
import Url from "@/constants/Url";

class DashboardApi {
  getInfluencerProfile() {
    return axios
      .get(Url.GET_INFLUENCER_PROFILE)
      .then((response) => response.data)
      .catch((ex) => {
        console.error("Failed to getInfluencerProfile:", ex.message);
        throw ex;
      });
  }

  getDashboardData(params: any) {
    return axios
      .get(Url.GET_DASHBOARD_DATA, { params })
      .then((response) => response.data)
      .catch((ex) => {
        console.error("Failed to getDashboardData:", ex.message);
        throw ex;
      });
  }

  getEarningsData() {
    return axios
      .get(Url.GET_EARNINGS_DATA)
      .then((response) => response.data)
      .catch((ex) => {
        console.error("Failed to getEarningsData:", ex.message);
        throw ex;
      });
  }

  updatePayoutType(data: any): Promise<void> {
    return axios
      .post(Url.UPDATE_PAYOUT_TYPE, data)
      .then((response) => response.data)
      .catch((ex) => {
        console.error("Failed to updatePayoutType:", ex.message);
        throw ex;
      });
  }
}

export default new DashboardApi();
