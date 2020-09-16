const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: "https://experience-portfolio-be.herokuapp.com/api",
});

export const getUsers = (userID) => {
  return axiosInstance
    .get(`/staff/meta/${userID}`)
    .then(({ data: { staffMeta } }) => {
      return staffMeta;
    });
};
export const getProjectsPerUser = () => {
  return axiosInstance
    .get("/projects/staff/56876")
    .then(({ data: { projects } }) => {
      return projects;
    });
};
