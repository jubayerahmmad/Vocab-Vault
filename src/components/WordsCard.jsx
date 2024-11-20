import React, { useState } from "react";
import { VscUnmute } from "react-icons/vsc";
import Modal from "react-modal";

Modal.setAppElement("#root");
const WordsCard = ({ words }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const {
    word,
    pronunciation,
    part_of_speech,
    meaning,
    difficulty,
    when_to_say,
    example,
  } = words;

  const pronounceWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "es-ES";
    window.speechSynthesis.speak(utterance);
  };
  return (
    <div>
      <div
        className={`card backdrop-blur-xl text-center shadow-md animate__animated animate__fadeInLeft ${
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
          <p>
            <span className="font-semibold">Pronunciation:</span>{" "}
            {pronunciation}
          </p>
          <p>
            <span className="font-semibold">Meaning:</span> {meaning}
          </p>
          <p>
            <span className="font-semibold">Part of Speech:</span>{" "}
            {part_of_speech}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={openModal}
              className="btn btn-sm btn-outline rounded-md"
            >
              When to Say
            </button>
            <button
              onClick={() => pronounceWord(word)}
              className="btn btn-sm btn-outline rounded-md"
            >
              <VscUnmute size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal (react-modal) */}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          },
          content: {
            padding: "20px",
            height: "350px",
            maxWidth: "500px",
            margin: "auto",
            borderRadius: "10px",
            backgroundColor: "white",
          },
        }}
        contentLabel="Centered Modal"
      >
        <div className="p-4 rounded-lg border-2 border-cyan-600 space-y-4">
          <h2 className="text-xl font-bold italic">{word.toUpperCase()}</h2>
          <p>
            <span className="font-semibold">Meaning:</span> {meaning}
          </p>
          <p>
            <span className="font-semibold">When to Say:</span> {when_to_say}
          </p>
          <p>
            <span className="font-semibold">Example: </span>
            {example}
          </p>
        </div>
        <button
          onClick={closeModal}
          className="btn btn-outline btn-sm w-full rounded-lg my-4 text-xl"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default WordsCard;
