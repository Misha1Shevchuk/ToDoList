export const proxy = "https://todolist-ua.herokuapp.com";
export const config = {
  headers: {
    "Content-Type": "application/json",
    "auth-token": localStorage.getItem("userData")
  }
};
