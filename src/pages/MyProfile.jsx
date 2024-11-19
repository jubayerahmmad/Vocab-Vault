import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

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
        <div className="max-w-4xl  my-4 border border-cyan-400 mx-auto p-6 bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">
            Welcome to Your Profile {displayName}!
          </h1>

          <div className="space-y-4 text-center  mx-auto">
            <div className="flex justify-center">
              <img
                src={photoURL}
                alt="User Profile"
                className="w-32 h-32 ring-offset-2 ring-cyan-500 ring-2 rounded-full object-cover"
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

          <div className="mt-6 text-center">
            <Link
              to="/update-profile"
              className="px-6 py-2 btn bg-cyan-500 text-white rounded-full hover:bg-cyan-700 transition duration-300"
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
