import { Helmet } from "react-helmet-async";

import CommonBanner from "../components/CommonBanner";
import { Link, useLoaderData } from "react-router-dom";

const LetsLearn = () => {
  const lessons = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Let's Learn | Vocab Vault</title>
      </Helmet>
      <CommonBanner></CommonBanner>

      <div className="my-4">
        <h1 className="text-3xl font-bold text-center">Check Lessons</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 my-6">
          {lessons?.map((lesson) => (
            <div
              key={lesson.id}
              className="p-4 rounded-xl border border-cyan-700 2xl:flex items-center space-y-4 2xl:space-y-0 justify-between animate__animated animate__fadeInLeft"
            >
              <div>
                <h1 className="text-xl lg:text-2xl font-bold">
                  Lesson {lesson.lesson_no}
                </h1>
                <p className="text-sm font-semibold text-gray-500">
                  {lesson.topic}
                </p>
              </div>
              <div>
                <Link to={`/lesson/${lesson.id}`}>
                  <button className="btn btn-sm 2xl:btn-md btn-outline text-cyan-500 ">
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
        <p className="text-center text-lg lg:text-xl text-gray-600 font-bold my-4 animate__animated animate__fadeInDown">
          Everything you need to learn Spanish vocabulary, all in one place
        </p>
        <div className="my-8 border rounded-xl p-4">
          <iframe
            src="https://www.youtube.com/embed/kJQjXAVEWt0?si=PrcSfF4beFsGtWqA"
            title="YouTube video player"
            className="w-full rounded-xl h-96 lg:h-[600px]"
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
