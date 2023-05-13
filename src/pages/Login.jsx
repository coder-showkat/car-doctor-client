/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import img from "../assets/images/login/login.svg";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";

const Login = () => {
  const { user, loading, loginUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const { state } = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const result = await loginUser(email, password);
    if (!result.success) setError(result.message);
    alert(result.message);
    form.reset();
  };

  if (loading) return <Loading />;
  if (user)
    return (
      <Navigate to={state?.pathname ? state.pathname : "/"} replace={true} />
    );

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 py-12">
          <div className="hidden md:flex items-center">
            <img src={img} alt="" className="w-full max-h-full object-cover" />
          </div>
          <div className="border rounded-lg px-8 py-16 space-y-8 shadow">
            <h1 className="font-semibold text-4xl text-center mb-4">Login</h1>
            <form onSubmit={handleLogin} className="space-y-7">
              <div className="form-control">
                <label htmlFor="email" className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label htmlFor="password" className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Your password"
                  className="input input-bordered"
                />
              </div>
              {error && <p className="text-error text-center">{error}</p>}
              <button
                type="submit"
                className="btn btn-primary w-full mt-4 normal-case"
              >
                Sign in
              </button>
            </form>
            <p className="font-medium text-lg text-secondary text-center">
              Or Sign In with
            </p>
            <div className="flex items-center gap-x-3 w-fit mx-auto">
              <a
                href=""
                className="aspect-square rounded-full bg-secondary/10 hover:bg-secondary/20 shadow p-2 text-xl text-blue-600"
              >
                <FaFacebookF />
              </a>
              <a
                href=""
                className="aspect-square rounded-full bg-secondary/10 hover:bg-secondary/20 shadow p-2 text-xl text-blue-600"
              >
                <FaLinkedinIn />
              </a>
              <a
                href=""
                className="aspect-square rounded-full bg-secondary/10 hover:bg-secondary/20 shadow p-2 text-xl"
              >
                <FcGoogle />
              </a>
            </div>
            <p className="text-secondary font-semibold text-center">
              Don't have an account?{" "}
              <Link to="/sign-up" className="text-primary">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
