import { callingapiservice } from "services/callingapiservice";

export const FeedController = {
  FetchIdeas: async () => {
    try {
      const data = await callingapiservice.GetAllIdea();
      console.log("datadata", data);
      return data.data.allIdeas;
    } catch (error) {
      console.error("Error fetching ideas:", error);
    }
  },
};
