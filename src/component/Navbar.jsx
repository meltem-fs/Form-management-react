
import { Link } from "react-router-dom";

const  Navbar = () => {
  return (
    <>
      <div className="my-5">
        <Link
          id="link"
          className="p-3 text-decoration-none display-4 text-info fw-bold"
          to="/"
        >
          Home
        </Link>
        <Link
          id="link"
          className="p-3 text-decoration-none display-4 text-info fw-bold"
          to="/login"
        >
          Login
        </Link>
        <Link
          id="link"
          className="p-3 text-decoration-none display-4 text-info fw-bold"
          to="/team"
        >
          Team
        </Link>
      </div>
    </>
  );
}

export default Navbar;
