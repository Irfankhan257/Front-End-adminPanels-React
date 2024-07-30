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

  FetchIdeasByInnovator: async (payload) => {
    try {
      const data = await callingapiservice.getIdeasByInnovatorId(payload);
      return data.data.innovatorIdeas;
    } catch (error) {
      console.error("Error fetching ideas:", error);
    }
  },

  FetchUserRating: async (payload) => {
    try {
      const data = await callingapiservice.FetchUserRating(payload);
      return data.data;
    } catch (error) {
      console.error("Error fetching ideas:", error);
    }
  },

  PostUserRating: async (payload) => {
    try {
      const data = await callingapiservice.PostUserRating(payload);
      return data.data;
    } catch (error) {
      console.error("Error fetching ideas:", error);
    }
  },
};
