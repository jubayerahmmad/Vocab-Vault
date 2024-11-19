import { Helmet } from "react-helmet-async";
import logo from "../assets/reading.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import bg from "../assets/Animated Shape.svg";

const Login = () => {
  const { loginUser, setUser, googleLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { state } = useLocation();
  const emailRef = useRef("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    //login
    loginUser(email, password)
      .then((result) => {
        toast.success("Login Successful");
        setUser(result.user);
        navigate(`${state ? state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.code.split("/")[1]);
        setErrorMessage(error.code.split("/")[1]);
      });
  };

  //google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate(`${state ? state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.code.split("/")[1]);
        setErrorMessage(error.code.split("/")[1]);
      });
  };

  // forgot password

  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    navigate("/forgot-password", { state: { email } });
  };

  return (
    <div
      className="bg-gray-50 min-h-screen bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url("${bg}")` }}
    >
      <Helmet>
        <title>Login | Vocab Vault</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center gap-4 p-4 text-white">
        <img className="w-24 h-24" src={logo} alt="" />
        <h1 className="text-3xl font-bold text-center italic">
          Welcome back !
        </h1>
        <p className="text-center font-bold text-2xl">
          Log in to access your vocabulary vault!
        </p>
      </div>

      {/* form */}

      <div className="card rounded-md bg-cyan-50 shadow-2xl w-full max-w-lg mx-auto">
        <form className="card-body" onSubmit={handleLogin}>
          {errorMessage && (
            <p className="font-bold text-red-500 text-center">{errorMessage}</p>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              ref={emailRef}
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
              <button
                type="button"
                onClick={handleForgotPassword}
                className="label-text-alt link link-hover font-semibold"
              >
                Forgot password?
              </button>
            </label>
          </div>
          <div className="form-control mt-6 space-y-4">
            <button className="btn text-white bg-cyan-500">
              <CiLogin size={24}></CiLogin> Login
            </button>
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn btn-outline "
            >
              <FaGoogle size={28}></FaGoogle> Login With Google
            </button>
            <Link to="/">
              <button className="btn btn-outline w-full">Back to Home</button>
            </Link>
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
