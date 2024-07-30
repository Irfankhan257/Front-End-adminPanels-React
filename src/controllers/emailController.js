import { callingapiservice } from "services/callingapiservice";

export const EmailController = {
  SendEmail: async (payload) => {
    try {
      const data = await callingapiservice.SendEmail(payload);
      return data.data;
    } catch (error) {
      console.error("Error fetching ideas:", error);
    }
  },
};
