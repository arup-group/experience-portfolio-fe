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

export const getProjectsPerUser = (
  userID,
  searchQueriesObj,
  keywordCodesArray
) => {
  let searchQueriesStr = "";
  let keywordCodesStr = "";
  if (typeof searchQueriesObj !== "object") {
    searchQueriesStr = "";
  } else {
    for (const [key, value] of Object.entries(searchQueriesObj)) {
      if (value !== "") {
        searchQueriesStr += `&${key}=${encodeURI(value)}`;
      }
    }
  }
  if (keywordCodesArray && keywordCodesArray.length > 0) {
    keywordCodesStr = `&Keywords=${keywordCodesArray.join(
      ";"
    )}&KeywordQueryType=OR`;
  } else {
    keywordCodesStr = "";
  }
  return axiosInstance
    .get(
      `/projects/staff/${userID}?showDetails=true${keywordCodesStr}${searchQueriesStr}`
    )
    .then(({ data }) => {
      if (data.msg === "No matching projects found") {
        return data.msg;
      } else {
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

export const getStaffKeywords = (userID) => {
  return axiosInstance
    .get(`/keywords/groups/${userID}`)
    .then(({ data }) => {
      return data.keywords;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getAllPortfolioKeywords = () => {
  return axiosInstance
    .get("/keywords/allgroups")
    .then(({ data }) => {
      return data.keywords;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getPortfolioStaff = (searchQueriesObj, keywordCodesArray) => {
  let searchQueriesStr = "";
  let keywordCodesStr = "";
  if (typeof searchQueriesObj !== "object") {
    searchQueriesStr = "";
  } else {
    for (const [key, value] of Object.entries(searchQueriesObj)) {
      if (value !== "") {
        searchQueriesStr += `&${key}=${encodeURI(value)}`;
      }
    }
  }
  if (keywordCodesArray && keywordCodesArray.length > 0) {
    keywordCodesStr = `&Keywords=${keywordCodesArray.join(
      ";"
    )}&KeywordQueryType=OR`;
  } else {
    keywordCodesStr = "";
  }

  return axiosInstance
    .get(`/projects/staff?${keywordCodesStr}${searchQueriesStr}`)
    .then(({ data }) => {
      if (data.msg === "No matching projects found") {
        return data.msg;
      } else {
        console.log(data, "data");
        return data.staffPortfolio;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// export const getAllKeyWords = (searchQueriesObj, keywordCodesArray) => {
//   let searchQueriesStr = "";
//   let keywordCodesStr = "";
//   if (typeof searchQueriesObj !== "object") {
//     searchQueriesStr = "";
//   } else {
//     for (const [key, value] of Object.entries(searchQueriesObj)) {
//       if (value !== "") {
//         searchQueriesStr += `&${key}=${encodeURI(value)}`;
//       }
//     }
//   }
//   if (keywordCodesArray && keywordCodesArray.length > 0) {
//     keywordCodesStr = `&Keywords=${keywordCodesArray.join(
//       ";"
//     )}&KeywordQueryType=OR`;
//   } else {
//     keywordCodesStr = "";
//   }
//   return axiosInstance
//     .get(
//       `/projects/staff/${userID}?showDetails=true${keywordCodesStr}${searchQueriesStr}`
//     )
//     .then(({ data }) => {
//       if (data.msg === "No matching projects found") {
//         return data.msg;
//       } else {
//         return data.projects;
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
