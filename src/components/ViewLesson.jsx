import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import WordsCard from "./WordsCard";
import { Helmet } from "react-helmet-async";

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

  // difficullty wise words display
  const handleDifficulty = (difficulty) => {
    const mappedLesson = lessons.map((lesson) => {
      return lesson;
    });
    const filterdLesson = mappedLesson.filter((lesson) => {
      const lessonNum = parseInt(lesson.lesson_no);
      return lessonNum === lessonNumber;
    });
    if (difficulty === "all") {
      setLesson(filterdLesson);
      return;
    }
    const difficultyFilter = filterdLesson.filter(
      (word) => word.difficulty === difficulty
    );
    setLesson(difficultyFilter);
  };

  return (
    <div>
      <Helmet>
        <title>Lesson {`${lessonNumber}`} | Vocab Vault</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center my-4 underline decoration-cyan-400 underline-offset-2 animate__animated animate__fadeInDown">
        Lesson No - {lessonNumber}
      </h1>
      <div className="flex justify-center gap-4 animate__animated animate__fadeInUp">
        <p
          onClick={() => handleDifficulty("all")}
          className="btn cursor-pointer rounded-md font-bold bg-transparent border-none hover:bg-transparent hover:underline shadow-none text-base"
        >
          All
        </p>
        <p
          onClick={() => handleDifficulty("easy")}
          className="btn cursor-pointer rounded-md font-bold bg-green-200 text-xs"
        >
          Easy
        </p>
        <p
          onClick={() => handleDifficulty("medium")}
          className="btn cursor-pointer rounded-md font-bold bg-yellow-200 text-xs"
        >
          Medium
        </p>
        <p
          onClick={() => handleDifficulty("hard")}
          className="btn cursor-pointer rounded-md font-bold bg-red-200 text-xs"
        >
          Hard
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-12">
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
