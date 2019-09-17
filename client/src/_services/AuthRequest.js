import axios from "axios";
import { proxy } from "./configs";

export const login = async (email, password) => {
  return await axios
    .post(proxy + "/api/user/login", {
      email: email,
      password: password
    })
    .then(response => {
      localStorage.setItem("userData", response.data);
      return response.data;
    });
};

export const sign = async (name, email, password) => {
  return await axios
    .post(proxy + "/api/user/register", {
      name: name,
      email: email,
      password: password
    })
    .then(response => {
      if (response) {
        return response;
      } else {
        return null;
      }
    });
};
