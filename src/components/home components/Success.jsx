import { FaUser } from "react-icons/fa6";
import { MdOutlinePersonalVideo, MdOutlinePlayLesson } from "react-icons/md";
import { TbVocabulary } from "react-icons/tb";

const Success = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Success</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-gray-100 my-6 rounded-lg">
        <div className="p-4 text-center border rounded-lg">
          <div className="flex justify-center">
            <FaUser size={48}></FaUser>
          </div>
          <div>{/* counnt */}</div>
          <h3 className="text-xl font-semibold my-4">Total User</h3>
        </div>
        <div className="p-4 text-center border rounded-lg">
          <div className="flex justify-center">
            <TbVocabulary size={48}></TbVocabulary>
          </div>
          <h3 className="text-xl font-semibold my-4">Vocabulary</h3>
        </div>
        <div className="p-4 text-center border rounded-lg">
          <div className="flex justify-center">
            <MdOutlinePersonalVideo size={48}></MdOutlinePersonalVideo>
          </div>
          <h3 className="text-xl font-semibold my-4">Tutorials</h3>
        </div>
        <div className="p-4 text-center border rounded-lg">
          <div className="flex justify-center">
            <MdOutlinePlayLesson size={48}></MdOutlinePlayLesson>
          </div>
          <h3 className="text-xl font-semibold my-4">Lessons</h3>
        </div>
      </div>
    </div>
  );
};

export default Success;
