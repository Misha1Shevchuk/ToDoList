export const proxy = "https://blooming-chamber-22236.herokuapp.com";
export const config = {
  headers: {
    "Content-Type": "application/json",
    "auth-token": localStorage.getItem("userData")
  }
};
