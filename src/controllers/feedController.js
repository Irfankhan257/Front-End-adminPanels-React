import { callingapiservice } from "services/callingapiservice";

export const FeedController = {
  FetchIdeas: async () => {
    try {
      const data = await callingapiservice.GetAllIdea();
      return data.data.allIdeas;
    } catch (error) {
      console.error("Error fetching ideas:", error);
    }
  },

  FetchUserRating: async (payload) => {
    try {
      const data = await callingapiservice.FetchUserRating(payload);
      console.log(data);
      return data.data;
    } catch (error) {
      console.error("Error fetching ideas:", error);
    }
  },

  PostUserRating: async (payload) => {
    try {
      const data = await callingapiservice.PostUserRating(payload);
      console.log(data);
      return data.data;
    } catch (error) {
      console.error("Error fetching ideas:", error);
    }
  },
};
