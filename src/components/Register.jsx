import { useContext, useState } from "react";
import logo from "../assets/reading.png";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import bg from "../assets/Animated Shape.svg";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    //  password validations
    if (password.length < 6) {
      setErrorMessage("Password Must Contain atleast 6 Characters!");
      return;
    }
    const hasLowercase = /(?=.*[a-z])/;
    if (!hasLowercase.test(password)) {
      setErrorMessage("Password Must Contain atleast One LowerCase letter!");
      return;
    }
    const hasUppercase = /(?=.*[A-Z])/;
    if (!hasUppercase.test(password)) {
      setErrorMessage("Password Must Contain atleast One UpperCase letter!");
      return;
    }

    // create user
    createUser(email, password)
      .then(() => {
        toast.success("Registration Successful");
        e.target.reset();
        // update profile
        const profileInfo = { displayName: name, photoURL: photo };
        updateUserProfile(profileInfo)
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            setErrorMessage(error.message);
            toast.error(error.code);
          });
      })
      .catch((error) => {
        setErrorMessage(error.code.split("/")[1]);
        toast.error(error.code.split("/")[1]);
      });
  };

  return (
    <div
      className="bg-gray-50 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url("${bg}")` }}
    >
      <Helmet>
        <title>Register | Vocab Vault</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center gap-6 py-4">
        <img className="w-24 h-24" src={logo} alt="" />
        <h1 className="text-3xl font-bold text-center ">
          Register to Our Website
        </h1>
      </div>

      {/* form */}

      <div className="card rounded-md bg-cyan-50 shadow-2xl w-full max-w-lg mx-auto">
        <form className="card-body" onSubmit={handleLogin}>
          {errorMessage && (
            <p className="font-bold text-red-500 text-center">{errorMessage}</p>
          )}
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
            <button className="btn text-white bg-cyan-500">Register</button>
            <Link to="/">
              <button className="btn btn-outline w-full">Back to Home</button>
            </Link>
          </div>
        </form>

        <p className="text-center p-6">
          Already Have an Account?
          <Link to="/login" className="font-bold text-cyan-950">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
