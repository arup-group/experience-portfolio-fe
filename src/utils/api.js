const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getUsers = () => {
  return axiosInstance.get("/users").then(({ data }) => {
    console.log("im in the get");
    return data;
  });
};
