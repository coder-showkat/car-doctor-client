import { useContext } from "react";
import { BsPerson } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const handleLogOut = async () => {
    const res = await logoutUser();
    if (res.success)
      Swal.fire({
        icon: "success",
        text: res.message,
      });
    else
      Swal.fire({
        icon: "error",
        text: res.message,
      });
  };
  return (
    <div className="container mx-auto px-4 navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/appointment-requests">Appointment Requests</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="">
          <img src={logo} alt="logo" className="w-20 xl:w-24" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-x-6 font-semibold">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/appointment-requests">Appointment Requests</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        {/* <a href="" className="text-2xl">
          <HiOutlineSearch />
        </a> */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle text-2xl">
            <BsPerson />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {user ? (
              <>
                <li tabIndex={0}>
                  <a className="">Admin</a>
                  <ul className="p-2 right-full left-auto bg-base-100 shadow-md">
                    <li>
                      <NavLink to="/admin/appointment-requests">
                        Appointment Requests
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li onClick={handleLogOut}>
                  <a>Log Out</a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/sign-up">Sign Up</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <a className="btn btn-primary btn-outline normal-case">Appointment</a>
      </div>
    </div>
  );
};

export default Navbar;
