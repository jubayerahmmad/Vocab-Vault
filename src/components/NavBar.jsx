import { Link, NavLink } from "react-router-dom";
import logo from "../assets/reading.png";
import "../../src/navbar.css";
import { CiLogin } from "react-icons/ci";
const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/letsLearn">Let's Learn</NavLink>
      </li>
      <li>
        <NavLink to="/tutorials">Tutorials</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-cyan-100">
      <div className="w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="btn btn-ghost text-xl text-cyan-500 font-bold"
          >
            <img className="w-8 h-8" src={logo} alt="" />
            Vocab Vault
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6 text-xl font-semibold">{links}</ul>
        </div>
        <div className="navbar-end text-right">
          <Link to="/login">
            <button className="btn btn-outline text-cyan-700 text-center">
              <CiLogin size={24}></CiLogin> Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
