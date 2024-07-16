import { apiService } from "./apiservice";

export const callingapiservice = {
  SignUp: async (payload) => {
    const apiName = "auth/signup";
    return apiService(apiName, payload, "POST");
  },

  SignInInvestor: async (payload) => {
    const apiName = "auth/investorsignin";
    return apiService(apiName, payload, "POST");
  },

  SignInInnovator: async (payload) => {
    const apiName = "auth/innovatorsignin";
    return apiService(apiName, payload, "POST");
  },

  EditInfo: async (payload) => {
    const apiName = "auth/edituserinfo";
    return apiService(apiName, payload, "POST");
  },

  AddCompanyInfo: async (payload) => {
    const apiName = "company/addcompany";
    return apiService(apiName, payload, "POST");
  },

  EditCompanyInfo: async (payload) => {
    const apiName = "company/editcompany";
    return apiService(apiName, payload, "POST");
  },

  AddNewIdea: async (payload) => {
    const apiName = "ideas/addnewidea";
    return apiService(apiName, payload, "POST");
  },

  GetAllIdea: async () => {
    const apiName = "ideas/getallideas";
    return apiService(apiName, "GET");
  },

  FetchUserRating: async (payload) => {
    const apiName = "rating/fetchrating";
    return apiService(apiName, payload, "POST");
  },

  PostUserRating: async (payload) => {
    const apiName = "rating/userrating";
    return apiService(apiName, payload, "POST");
  },
  GetTags: async () => {
    const apiName = "tags/fetchtag";
    return apiService(apiName, "GET");
  },
};
