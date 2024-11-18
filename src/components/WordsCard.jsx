import React from "react";

const WordsCard = ({ words }) => {
  //   console.log(word);
  const {
    word,
    pronunciation,
    part_of_speech,
    meaning,
    difficulty,
    example,
    when_to_say,
  } = words;
  return (
    <div>
      <div
        className={`card border-2 shadow-md animate__animated animate__fadeInLeft h-[550px] ${
          difficulty === "easy"
            ? "bg-green-200"
            : difficulty === "medium"
            ? "bg-yellow-200"
            : "bg-red-200"
        }`}
      >
        <div className="card-body">
          <h2 className="text-lg font-bold">{word}</h2>
          <p className="">Pronunciation: {pronunciation}</p>
          <p className="">Part of Speech: {part_of_speech}</p>
          <p className="">Meaning: {meaning}</p>
          <p className="">Difficulty: {difficulty}</p>
          <p className="">Example: {example}</p>
          <p className="">When to Say: {when_to_say}</p>
        </div>
      </div>
    </div>
  );
};

export default WordsCard;
