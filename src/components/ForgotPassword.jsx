import { sendPasswordResetEmail } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { auth } from "../firebase/firebase.config";
import toast from "react-hot-toast";
import { useState } from "react";

const ForgotPassword = () => {
  const location = useLocation();
  // console.log(location);
  const [email, setEmail] = useState(location.state?.email || "");
  // const email = location.state?.email;

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        window.open("https://mail.google.com", "_blank");
        // window.location.href = 'https://mail.google.com';
        toast.success(`Reset Email Sent to ${email}`);
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center">
      <Helmet>
        <title>Reset Password | Vocab Vault</title>
      </Helmet>

      <div className="card rounded-md bg-cyan-50 shadow-2xl w-full max-w-lg mx-auto animate__animated animate__fadeInLeft">
        <h3 className="p-4 text-center font-bold">
          Enter your Valid Email to Reset Password.
        </h3>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered rounded-md  bg-transparent"
              required
            />
          </div>
          <div className="form-control mt-6 space-y-4">
            <p
              onClick={handleResetPassword}
              className="btn bg-cyan-500 text-white"
            >
              Reset Password
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
