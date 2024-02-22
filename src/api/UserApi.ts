import axios from "axios";
import Url from "@/constants/Url";

class UserApi {
  updateTwoFactorAuthentication(data: any) {
    return axios
      .post(Url.UPDATE_TWO_FACTOR_AUTHENTICATION, data)
      .then((response) => response.data)
      .catch((ex) => {
        console.error("Failed to update two factor verification:", ex.message);
        throw ex;
      });
  }

  checkEmailVerification() {
    return axios
      .get(Url.GET_CHECK_EMAIL_VERIFICATION)
      .then((response) => response.data)
      .catch((ex) => {
        console.error("Failed to check email verification:", ex.message);
        throw ex;
      });
  }
}

export default new UserApi();
