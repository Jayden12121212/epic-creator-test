import axios from "axios";
import Url from "@/constants/Url";

class EulaApi {
  getAffiliateAgreement(params: any) {
    return axios
      .get(Url.GET_AFFILIATE_AGREEMENT, { params })
      .then((response) => response.data)
      .catch((ex) => {
        console.error("Failed to getAffiliateEula:", ex.message);
        throw ex;
      });
  }

  getCodeOfConduct(params: any) {
    return axios
      .get(Url.GET_CODE_OF_CONDUCT, { params })
      .then((response) => response.data)
      .catch((ex) => {
        console.error("Failed to getCodeOfConductEula:", ex.message);
        throw ex;
      });
  }

  acceptAffiliateAgreement(data: any) {
    return axios
      .post(Url.ACCEPT_AFFILIATE_AGREEMENT, data)
      .then((response) => response.data)
      .catch((ex) => {
        console.error("Failed to acceptAffiliateAgreement:", ex.message);
        throw ex;
      });
  }

  acceptCodeOfConduct(data: any) {
    return axios
      .post(Url.ACCEPT_CODE_OF_CONDUCT, data)
      .then((response) => response.data)
      .catch((ex) => {
        console.error("Failed to acceptCodeOfConduct:", ex.message);
        throw ex;
      });
  }
}

export default new EulaApi();
