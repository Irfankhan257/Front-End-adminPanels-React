import { callingapiservice } from "services/callingapiservice";

export const LogInController = {
  InnovatorLogIn: async (payload) => {
    try {
      const data = await callingapiservice.SignInInnovator(payload);
      console.log(data.data.user);
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
};
