// export const GetValidImage = (img) => {
//   return process.env.REACT_APP_API_URL + "/storage" + img.split("public")[1];
// };

export const GetValidUsersImage = (img) => {
  return process.env.REACT_APP_API_URL_STORAGE + "/storage/users/images/" + img;
};
export const GetValidImage = (img) => {
  return process.env.REACT_APP_API_URL_STORAGE + "/" + img;
};