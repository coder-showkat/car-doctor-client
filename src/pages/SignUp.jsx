/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import img from "../assets/images/login/login.svg";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";

const SignUp = () => {
  const { user, loading, createUser } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    try {
      if (name.trim().length < 3)
        throw new Error("Name should be minimum 8 characters.");
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email) === false)
        throw new Error("Please input a valid email.");
      if (password.length < 6)
        throw new Error("Password should be minimum 8 characters.");
      const result = await createUser(name, email, password);
      if (!result.success) setError(result.message);
      alert(result.message);
      form.reset();
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <Loading />;
  if (user) return <Navigate to="/" replace={true} />;

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 py-12">
          <div className="hidden md:flex items-center">
            <img src={img} alt="" className="w-full max-h-full object-cover" />
          </div>
          <div className="border rounded-lg px-8 py-16 space-y-8 shadow">
            <h1 className="font-semibold text-4xl text-center mb-4">Sign Up</h1>
            <form onSubmit={handleSignUp} className="space-y-7">
              <div className="form-control">
                <label htmlFor="name" className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="input input-bordered"
                />
              </div>
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
                Sign Up
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
              Already have an account?{" "}
              <Link to="/login" className="text-primary">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
