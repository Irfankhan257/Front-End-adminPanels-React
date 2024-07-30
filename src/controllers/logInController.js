import { callingapiservice } from "services/callingapiservice";

export const LogInController = {
  InnovatorLogIn: async (payload) => {
    try {
      const data = await callingapiservice.SignInInnovator(payload);
      return data.data.user;
    } catch (error) {
      console.error("Error fetching ideas:", error);
    }
  },
  InvestorLogIn: async (payload) => {
    try {
      const data = await callingapiservice.SignInInvestor(payload);
      return data.data.user;
    } catch (error) {
      console.error("Error fetching ideas:", error);
    }
  },
  SignUp: async (payload) => {
    try {
      const data = await callingapiservice.SignUp(payload);
      return data.data.message;
    } catch (error) {
      console.error("Error fetching ideas:", error);
    }
  },
  UserInfo: async (payload) => {
    try {
      const data = await callingapiservice.UserInfo(payload);
      return data.data.data;
    } catch (error) {
      console.error("Error fetching ideas:", error);
    }
  },
};
