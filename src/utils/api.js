const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: "https://experience-portfolio-be.herokuapp.com/api",
});

export const getUserMeta = (staffID) => {
  return axiosInstance.get(`/staff/meta/${staffID}`).then((response) => {
    return response.data.staffMeta;
  });
};
