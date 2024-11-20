import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import bgImg from "../assets/welcome-msg.png";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  // console.log(user);
  const { displayName, email, photoURL } = user;
  return (
    <div>
      <Helmet>
        <title>Tutorials | Vocab Vault</title>
      </Helmet>
      <div className="min-h-screen flex justify-center items-center">
        <div className="max-w-2xl my-4 mx-auto bg-white shadow-md rounded-xl">
          <div className="bg-cyan-500 text-white rounded-xl">
            <img
              className="rounded-t-xl border-b border-b-cyan-200"
              src={bgImg}
              alt=""
            />
          </div>

          <div className="space-y-4 text-center mx-auto -mt-12">
            <div className="flex justify-center">
              <img
                src={photoURL}
                alt="User Profile"
                className="w-36 h-36 ring-offset-2 ring-cyan-500 ring-2 rounded-full object-cover"
              />
            </div>

            <div>
              <p className="text-lg text-gray-700">
                <strong>Name:</strong> {displayName}
              </p>
              <p className="text-lg text-gray-700">
                <strong>Email:</strong> {email}
              </p>
            </div>
          </div>

          <div className="my-6 text-center">
            <Link
              to="/update-profile"
              className="px-6 py-2 btn bg-cyan-500 text-white hover:bg-cyan-700 transition duration-300"
            >
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
