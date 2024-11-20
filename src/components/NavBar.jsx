import { Link, NavLink } from "react-router-dom";
import logo from "../assets/reading.png";
import "../../src/navbar.css";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { FaHome, FaInfoCircle, FaPlayCircle } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
const NavBar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogout = () => {
    const confirmLogOut = window.confirm("Are you Sure You want to Log Out?");
    if (confirmLogOut) {
      logOutUser()
        .then(() => {
          toast.success("Log out successful");
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  const links = (
    <>
      <li>
        <NavLink to="/" className="flex items-center gap-1">
          <FaHome></FaHome> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/letsLearn" className="flex items-center gap-1">
          <FaBook></FaBook> Let's Learn
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="flex items-center gap-1">
          <FaInfoCircle></FaInfoCircle> About Us
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/tutorials" className="flex items-center gap-1">
              <FaPlayCircle></FaPlayCircle> Tutorials
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-profile" className="flex items-center gap-1">
              <CgProfile></CgProfile> My Profile
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="sticky bg-cyan-100 top-0 z-10 bg-cover bg-center">
      {user && (
        <h3 className="font-bold text-3xl text-center p-2 italic animate__animated animate__fadeInDown">
          Welcome, {user.displayName}!
        </h3>
      )}
      <div className="navbar  sticky top-0 z-10">
        <div className="w-11/12 mx-auto">
          <div className="navbar-start flex items-center">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-sm lg:btn-md xl:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="gap-4 px-2 py-1 flex flex-col font-semibold dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <Link
              to="/"
              className="btn btn-ghost lg:text-2xl text-cyan-500 font-extrabold"
            >
              <img className="w-6 h-6 lg:w-8 lg:h-8" src={logo} alt="" />
              Vocab Vault
            </Link>
          </div>
          <div className="navbar-center hidden xl:flex">
            <ul className="flex gap-6 text-xl font-semibold">{links}</ul>
          </div>
          <div className="navbar-end text-right">
            {user ? (
              <div className="flex items-center justify-end gap-2">
                <Link to="/my-profile">
                  <img
                    className="h-4 w-4 lg:h-10 lg:w-10 rounded-full ring-offset-2 ring-cyan-500 ring-2"
                    src={user.photoURL}
                    alt=""
                  />
                </Link>

                <Link>
                  <button
                    onClick={handleLogout}
                    className="btn font-bold text-white bg-cyan-500 text-center btn-sm lg:btn-md hover:bg-cyan-700 transition duration-300"
                  >
                    Log Out
                  </button>
                </Link>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <button className="btn font-bold text-white bg-cyan-500 text-center btn-sm lg:btn-md hover:bg-cyan-700 transition duration-300">
                    Login
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
