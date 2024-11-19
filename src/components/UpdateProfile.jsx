import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const profileInfo = { displayName: name, photoURL: photo };
    updateUserProfile(profileInfo)
      .then(() => {
        navigate("/my-profile");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Update Profile | Vocab Vault</title>
      </Helmet>
      <div className="card rounded-md bg-base-100 shadow-2xl w-full max-w-lg mx-auto">
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
          <button className="btn bg-cyan-500">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
