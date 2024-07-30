import { callingapiservice } from "services/callingapiservice";

export const ChatController = {
  sendMessage: async (payload) => {
    try {
        console.log(payload);
      const data = await callingapiservice.sendMessage(payload);
      console.log(data);
      return data.data;
    } catch (error) {
      console.error("Error fetching ideas:", error);
    }
  },
};
