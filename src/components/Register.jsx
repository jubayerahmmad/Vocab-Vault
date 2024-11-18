import { useState } from "react";
import logo from "../assets/reading.png";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Register = () => {
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
        <title>Login | Vocab Vault</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center gap-6 py-4">
        <img className="w-24 h-24" src={logo} alt="" />
        <h1 className="text-3xl font-bold text-center ">
          Register to Our Website
        </h1>
      </div>

      {/* form */}

      <div className="card rounded-md bg-base-100 shadow-2xl w-full max-w-lg mx-auto">
        <form className="card-body" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered rounded-md  bg-transparent"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              name="photo"
              className="input input-bordered rounded-md  bg-transparent"
            />
          </div>
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
              className="btn-xs absolute right-1 bottom-2"
            >
              {showPassword ? (
                <FaEye size={20}></FaEye>
              ) : (
                <FaEyeSlash size={20}></FaEyeSlash>
              )}
            </button>
          </div>
          <div className="form-control mt-6 space-y-4">
            <button className="btn btn-outline text-cyan-500">Register</button>
            <button className="btn btn-outline">
              <FaGoogle size={28}></FaGoogle> Register With Google
            </button>
          </div>
        </form>
        <p className="text-center p-6">
          Already Have an Account?{" "}
          <Link to="/login" className="font-bold text-cyan-950">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
