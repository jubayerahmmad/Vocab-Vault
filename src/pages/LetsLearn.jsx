import { Helmet } from "react-helmet-async";

import CommonBanner from "../components/CommonBanner";
import { Link, useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const LetsLearn = () => {
  const lessons = useLoaderData();
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Helmet>
        <title>Let's Learn | Vocab Vault</title>
      </Helmet>
      <CommonBanner></CommonBanner>

      <div className="my-4">
        <h1 className="text-3xl font-bold text-center">Check Lessons</h1>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 my-6">
          {lessons?.map((lesson) => (
            <div
              key={lesson.id}
              className="p-4 rounded-xl border border-cyan-700 lg:flex space-y-4 items-center justify-between animate__animated animate__fadeInLeft"
            >
              <div>
                <h1 className="text-xl lg:text-2xl font-bold">
                  Lesson {lesson.lesson_no}
                </h1>
                <p className="font-semibold text-gray-500">
                  Difficulty: {lesson.difficulty}
                </p>
              </div>
              <div>
                <Link to={`/lesson/${lesson.id}`}>
                  <button className="btn btn-sm lg:btn-md btn-outline text-cyan-500 ">
                    Check Lesson
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* tutorial */}
      <div className="my-8">
        <h1 className="text-3xl font-bold text-center my-6 animate__animated animate__fadeInDown">
          Tutorial
        </h1>
        <p className="text-center text-xl text-gray-600 font-bold my-4 animate__animated animate__fadeInDown">
          Everything you need to learn Spanish vocabulary, all in one place
        </p>
        <div className="my-8 border rounded-xl p-4">
          <iframe
            height="615"
            src="https://www.youtube.com/embed/kJQjXAVEWt0?si=PrcSfF4beFsGtWqA"
            title="YouTube video player"
            className="w-full rounded-xl"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <Link to="/tutorials">
          <button className="btn text-white bg-cyan-500">
            View More Tutorials
          </button>
        </Link>
      </div>
    </div>
  );
};

// {`${user ? `/tutorials` : "/login"}`}
// {`${user ? `/lesson/${lesson.id}` : "/login"}`}
export default LetsLearn;
