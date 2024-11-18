import { Helmet } from "react-helmet-async";
import logo from "../assets/reading.png";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Register | Vocab Vault</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center gap-4 py-4">
        <img className="w-24 h-24" src={logo} alt="" />
        <h1 className="text-3xl font-bold text-center ">Welcome back !</h1>
        <p className="text-center font-bold text-3xl">Login to Our Website</p>
      </div>

      {/* form */}

      <div className="card rounded-md bg-base-100 shadow-2xl w-full max-w-lg mx-auto">
        <form className="card-body" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input input-bordered rounded-md  bg-transparent"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              className="input input-bordered rounded-md bg-transparent"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="btn-xs absolute right-1 bottom-10 "
            >
              {showPassword ? (
                <FaEye size={20}></FaEye>
              ) : (
                <FaEyeSlash size={20}></FaEyeSlash>
              )}
            </button>
            <label className="label">
              <a
                href="#"
                className="label-text-alt link link-hover font-semibold"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6 space-y-4">
            <button className="btn btn-outline text-cyan-500">
              <CiLogin size={24}></CiLogin> Login
            </button>
            <button className="btn btn-outline ">
              <FaGoogle size={28}></FaGoogle> Login With Google
            </button>
          </div>
        </form>
        <p className="text-center p-6">
          New to Website?{" "}
          <Link to="/register" className="font-bold text-cyan-950">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
