import axios from "axios";

export async function apiService(apiName, payload, method = "GET") {
  try {
    const url = `https://fypbackend.azurewebsites.net/${apiName}/`;
    const headers = {
      Accept: "application/json",
    };

    const axiosConfig = {
      headers,
    };


    if (method === "GET") {
      axiosConfig.data = payload;
    } else if (method === "POST") {
      axiosConfig.data = payload;
    } else {
      throw new Error("Unsupported HTTP method.");
    }

    const response = await axios.request({
      method,
      url,
      ...axiosConfig,
    });

    console.log(response);
    return response;
  } catch (error) {
    console.error("Error:", error);

    throw new Error(error);
  }
}
