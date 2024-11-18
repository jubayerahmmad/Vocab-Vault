import React from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const WordsCard = ({ words }) => {
  //   console.log(word);
  const { word, pronunciation, part_of_speech, meaning, difficulty } = words;
  return (
    <div>
      <div
        className={`card backdrop-blur-xl shadow-md animate__animated animate__fadeInLeft  ${
          difficulty === "easy"
            ? "bg-green-200"
            : difficulty === "medium"
            ? "bg-yellow-200"
            : "bg-red-200"
        }`}
      >
        <div className="m-4 p-4 rounded-lg border-2 border-cyan-600 space-y-4">
          <h2 className="text-2xl font-extrabold italic">
            {word.toUpperCase()}
          </h2>
          <p className="">
            <span className="font-semibold">Pronunciation:</span>{" "}
            {pronunciation}
          </p>
          <p className="">
            <span className="font-semibold">Meaning:</span> {meaning}
          </p>
          <p className="">
            <span className="font-semibold">Part of Speech:</span>{" "}
            {part_of_speech}
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn btn-sm btn-outline rounded-md"
            >
              When to Say
            </button>
            <Link to="/letsLearn">
              <button className="btn btn-sm btn-outline btn-accent rounded-md">
                Back to Lesson
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Modal words={words}></Modal>
    </div>
  );
};

export default WordsCard;
