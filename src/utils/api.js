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
      if (value !== "") {
        searchQueriesStr += `&${key}=${encodeURI(value)}`;
      }
    }
  }
  return axiosInstance
    .get(`/projects/staff/${userID}?showDetails=true${searchQueriesStr}`)
    .then(({ data }) => {
      if (data.msg === "No matching projects found") {
        return data.msg;
      } else {
        console.log(data.projects);
        return data.projects;
      }
    })
    .catch((error) => {
      console.log(error);
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

export const patchProjectScopeOfWorks = (ProjectCode, newProjData) => {
  return axiosInstance
    .patch(`/project/${ProjectCode}`, newProjData)
    .then(({ data: { project } }) => {
      return project;
    });
};

export const addExperienceToProject = (ProjectCode, newExperience, StaffID) => {
  return axiosInstance
    .patch(`/project/staff/${ProjectCode}?StaffID=${StaffID}`, newExperience)
    .then(({ data: { project } }) => {
      return project;
    });
};
