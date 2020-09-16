const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: "https://my-json-server.typicode.com",
});

export const getUsers = () => {
  return axiosInstance.get("/joaojesus81/mock/staffMeta").then(({ data }) => {
    return data;
  });
};
