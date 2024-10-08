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
  UserInfo: async (payload) => {
    const apiName = "auth/user";
    return apiService(apiName, payload, "GET");
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

  GetAllIdea: async (payload) => {
    const apiName = "ideas/getallideas";
    return apiService(apiName, payload, "GET");
  },

  getIdeasByInnovatorId: async (payload) => {
    const apiName = "ideas/getIdeasByInnovatorId";
    return apiService(apiName, payload, "GET");
  },

  FetchUserRating: async (payload) => {
    const apiName = "rating/fetchrating";
    return apiService(apiName, payload, "POST");
  },

  PostUserRating: async (payload) => {
    const apiName = "rating/userrating";
    return apiService(apiName, payload, "POST");
  },
  GetTags: async (payload) => {
    const apiName = "tags/fetchtag";
    return apiService(apiName, payload, "GET");
  },
  SendEmail: async (payload) => {
    const apiName = "email/sendemail";
    return apiService(apiName, payload, "POST");
  },
  sendMessage: async (payload) => {
    const apiName = "ai/askai";
    return apiService(apiName, payload, "POST");
  },
  searchIdeas: async (payload) => {
    const apiName = "ideas/searchideas";
    return apiService(apiName, payload, "GET");
  },
  Investors: async (payload) => {
    const apiName = "auth/investors";
    return apiService(apiName, payload, "GET");
  },
  InvestorSearch: async (payload) => {
    const apiName = "auth/investorssearch";
    return apiService(apiName, payload, "GET");
  },
};
