import axios from "axios";
import Url from "../constants/Url";

class PayoutApi {
  getPayoutOptions() {
    return axios
      .get(Url.GET_PAYOUT_PERIODS)
      .then((response) => response.data)
      .catch((ex) => {
        console.error("Failed to getPayoutOptions:", ex.message);
        throw ex;
      });
  }

  getPayoutReport(params: any) {
    return axios
      .get(Url.GET_PAYOUT_REPORT, { params })
      .then((response) => response.data)
      .catch((ex) => {
        console.error("Failed to getPayoutReport:", ex.message);
        throw ex;
      });
  }
}

export default new PayoutApi();
