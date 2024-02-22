import axios from "axios";
import Url from "@/constants/Url";

class OverviewApi {
  getOverviewData(params: any) {
    return axios
      .get(Url.GET_OVERVIEW_DATA, { params })
      .then((response) => response.data)
      .catch((ex) => {
        console.error("Failed to getOverviewData:", ex.message);
        throw ex;
      });
  }
}

export default new OverviewApi();
