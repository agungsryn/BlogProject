import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../userContext";
import AuthServices from "../services/AuthServices";

const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    AuthServices.profile()
      .then(({ data }) => {
        setUserInfo(data.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const logout = () => {
    AuthServices.logout()
      .then(() => {
        setUserInfo(null);
        localStorage.removeItem("token");
        window.location.reload()
      })
      .catch(() => {});
  };
  console.log("userInfo?.username", userInfo?.username);
  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">
        MyBlog
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/create"> Create new post</Link>
            <a onClick={logout}> Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
