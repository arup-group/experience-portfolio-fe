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
export const getProjectsPerUser = (userID, searchQueriesObj) => {
  let searchQueriesStr = "";
  if (typeof searchQueriesObj !== "object") {
    searchQueriesStr = "";
  } else {
    for (const [key, value] of Object.entries(searchQueriesObj)) {
      searchQueriesStr += `&${key}=${value}`;
    }
  }
  return axiosInstance
    .get(`/projects/staff/${userID}?showDetails=true${searchQueriesStr}`)
    .then(({ data: { projects } }) => {
      return projects;
    });
};
export const patchUserMetaData = (userID, newMetaData) => {
  return axiosInstance
    .patch(`/staff/meta/${userID}`, newMetaData)
    .then(({ data: { staffMeta } }) => {
      return staffMeta;
    });
};

export const postUserImage = (userID, imgFile) => {
  return axiosInstance
    .post(`/staff/meta/${userID}`, imgFile)
    .then(({ data: { staffMeta } }) => {
      return staffMeta;
    });
};

// export const postUserImage = (userID, imgFile) => {
//   console.log(userID, imgFile, "posting");
//   return axios({
//     method: "post",
//     url: `https://experience-portfolio-be.herokuapp.com/api/staff/meta/${userID}`,
//     data: imgFile,
//     headers: { "Content-Type": "multipart/form-data" },
//   });
// };
