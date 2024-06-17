import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("users"));

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };

  const cartItems = useSelector((state) => state.cart);

  const navList = (
    <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
      <li>
        <Link to={"/"}>Home</Link>
      </li>

      <li>
        <Link to={"/allproduct"}>All Product</Link>
      </li>

      {!user ? (
        <li>
          <Link to={"/signup"}>Signup</Link>
        </li>
      ) : (
        ""
      )}

      {!user ? (
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      ) : (
        ""
      )}

      {user?.role === "user" && (
        <li>
          <Link to={"/user-dashboard"}>User</Link>
        </li>
      )}

      {user?.role === "admin" && (
        <li>
          <Link to={"/admin-dashboard"}>Admin</Link>
        </li>
      )}

      {user && (
        <li className=" cursor-pointer" onClick={logout}>
          logout
        </li>
      )}

      <li>
        <Link to={"/cart"}>Cart({cartItems.length})</Link>
      </li>
    </ul>
  );
  return (
    <nav className="bg-pink-600 sticky top-0">
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
        <div className="left py-3 lg:py-0">
          <Link to={"/"}>
            <h2 className=" font-bold text-white text-2xl text-center">
              E-Bharat
            </h2>
          </Link>
        </div>

        <div className="right flex justify-center mb-4 lg:mb-0">{navList}</div>

        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
