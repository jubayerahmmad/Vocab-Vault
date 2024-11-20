import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import WordsCard from "./WordsCard";

const ViewLesson = () => {
  const [lesson, setLesson] = useState([]);
  const lessons = useLoaderData();
  const { lesson_no } = useParams();
  const lessonNumber = parseInt(lesson_no);

  useEffect(() => {
    const mappedLesson = lessons.map((lesson) => {
      return lesson;
    });
    const filterdLesson = mappedLesson.filter((lesson) => {
      const lessonNum = parseInt(lesson.lesson_no);
      return lessonNum === lessonNumber;
    });
    setLesson(filterdLesson);
  }, [lessonNumber]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4 underline decoration-cyan-400 underline-offset-2 animate__animated animate__fadeInDown">
        Lesson No - {lessonNumber}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
        {lesson?.map((words) => (
          <WordsCard key={words.id} words={words}></WordsCard>
        ))}
      </div>
      <div>
        <Link to="/letsLearn">
          <button className="btn btn-md bg-cyan-500 text-white mb-12 rounded-md">
            Back to Lesson
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ViewLesson;
