import axios from "axios";

const proxy = "http://localhost:5000"
const config = {
    headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem("userData")
    }
}

export const login = async (email, password) => {
        return await axios
            .post(proxy + '/api/user/login', {
                email: email,
                password: password
            })
            .then(response => {
                sessionStorage.setItem("userData", response.data);
                return response.data;
            })
}

export const getList = async () => {
    return await axios.get(proxy + "/api/projects/", config).then(response => {
        console.log(response.data);
        return response.data;
        // this.makeProjectsList(response.data);
    });
};