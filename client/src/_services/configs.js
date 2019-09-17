export const proxy = "http://localhost:5000";
export const config = {
  headers: {
    "Content-Type": "application/json",
    "auth-token": sessionStorage.getItem("userData")
  }
};
