import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-8 min-h-screen">
      <Helmet>
        <title>Error | Vocab Vault</title>
      </Helmet>
      <h2 className="text-5xl font-extrabold">Page Not Found</h2>
      <Link to="/">
        <button className="btn border-cyan-800 border text-cyan-800">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
