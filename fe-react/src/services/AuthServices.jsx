import http from "../http-common";

const login = (data) => {
  return http.post("/login", data);
};

const profile = (data) => {
  return http.get("/profile", data);
};

const logout = (data) => {
  return http.get("/logout", data);
};

const AuthServices = {
  login,
  profile,
  logout
};

export default AuthServices;
