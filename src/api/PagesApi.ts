import axios from "axios";
import Url from "@/constants/Url";

class PagesApi {
  getPage(params: any) {
    return axios
      .get(Url.GET_PAGE, { params })
      .then((response) => response.data)
      .catch((ex) => {
        console.error("Failed to getPage:", ex.message);
        throw ex;
      });
  }
}

export default new PagesApi();
