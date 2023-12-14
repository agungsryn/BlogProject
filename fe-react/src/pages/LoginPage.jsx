import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthServices from "../services/AuthServices";
import { UserContext } from "../userContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserInfo, userInfo } = useContext(UserContext);
  const handleLogin = (ev) => {
    ev.preventDefault();

    AuthServices.login({ email, password })
      .then((userInfo) => {
        setUserInfo(userInfo.data.user);
        localStorage.setItem('token', userInfo.data.token)
        window.location.reload()
      })
      .catch(() => {
        alert("wrong credentials");
      });
  };

  if (userInfo != null && userInfo.email) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <form className="login" onSubmit={handleLogin}>
        <h1>Login</h1>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="email"
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
