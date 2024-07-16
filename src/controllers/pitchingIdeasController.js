const { callingapiservice } = require("services/callingapiservice");



export const PitchingIdeasController = {
  FetchTags: async () => {
    try {
      const data = await callingapiservice.GetTags();
      return data.data.allTags;
    } catch (error) {
      console.error("Error fetching ideas:", error);
    }
  },
  PostIdea: async (payload) => {
    try {
      const data = await callingapiservice.AddNewIdea(payload);
      return data.data;
    } catch (error) {
      console.error("Error fetching ideas:", error);
    }
  },
};