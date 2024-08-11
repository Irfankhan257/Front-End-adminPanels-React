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

  FetchIdeasBySearch: async (payload) => {
    try {
      const data = await callingapiservice.searchIdeas(payload);
      return data.data.ideas;
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

  Investors: async (payload) => {
    try {
      const data = await callingapiservice.Investors(payload);
      return data.data.investors;
    } catch (error) {
      console.error("Error fetching ideas:", error);
    }
  },
  InvestorSearch: async (payload) => {
    try {
      const data = await callingapiservice.InvestorSearch(payload);
      return data.data.investors;
    } catch (error) {
      console.error("Error fetching ideas:", error);
    }
  },
};
