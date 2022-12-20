
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const  Navbar = () => {

  const {user,setUser} = useContext(AuthContext)
  return (
    <>
      <div className="my-5">
        <Link
          id="link"
          className="p-3 text-decoration-none display-4 text-info fw-bold"
          to="/"
          style={{ textShadow: "2px 2px 3px rgb(255, 255, 255)" }}
        >
          Home
        </Link>

        {user.login ? (
          <Link
            onClick={(e) => setUser({ ...user, login: false })}
            id="link"
            className="p-3 text-decoration-none display-4 text-info fw-bold"
            to="/login"
            style={{ textShadow: "2px 2px 3px rgb(255, 255, 255)" }}
          >
            Logout
          </Link>
        ) : (
          <Link
            id="link"
            className="p-3 text-decoration-none display-4 text-info fw-bold"
            to="/login"
            style={{ textShadow: "2px 2px 3px rgb(255, 255, 255)" }}
          >
            Login
          </Link>
        )}

        <Link
          id="link"
          className="p-3 text-decoration-none display-4 text-info fw-bold"
          to="/team"
          style={{ textShadow: "2px 2px 3px rgb(255, 255, 255)" }}
        >
          Team
        </Link>
      </div>
    </>
  );
}

export default Navbar;
