import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/Animated Shape.svg";

const UpdateProfile = () => {
  const { updateUserProfile, setLoader } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const profileInfo = { displayName: name, photoURL: photo };
    updateUserProfile(profileInfo)
      .then(() => {
        navigate("/my-profile");
        setLoader(false);
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <div
      className="min-h-screen flex items-center svg bg-cover bg-center w-full"
      style={{ backgroundImage: `url("${bg}")` }}
    >
      <Helmet>
        <title>Update Profile | Vocab Vault</title>
      </Helmet>
      <div className="card rounded-md bg-cyan-50 shadow-2xl w-full max-w-lg mx-auto animate__animated animate__fadeInLeft">
        <h3 className="p-4 text-center font-bold">
          Enter your Name and a PhotoURL to Update Your profile.
        </h3>
        <form className="card-body" onSubmit={handleUpdateProfile}>
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
          <button className="btn bg-cyan-500 text-white">Update</button>
          <Link to="/" className="btn btn-outline">
            Back to Home
          </Link>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
