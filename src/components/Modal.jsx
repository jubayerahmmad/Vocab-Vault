const Modal = ({ words }) => {
  const { word, meaning, example, when_to_say } = words;
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
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
          <div className="my-4">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-outline w-full rounded-lg">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
