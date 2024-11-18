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
    </div>
  );
};

export default LetsLearn;
