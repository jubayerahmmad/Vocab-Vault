import { FaUser } from "react-icons/fa6";
import { MdOutlinePersonalVideo, MdOutlinePlayLesson } from "react-icons/md";
import { TbVocabulary } from "react-icons/tb";

const Success = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Success</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6 rounded-lg">
        <div className="p-4 text-center border rounded-lg space-y-4">
          <div className="flex justify-center">
            <FaUser size={48} color="cyan"></FaUser>
          </div>
          <div>
            <p className="text-2xl font-bold">1500+</p>
          </div>
          <h3 className="text-xl font-semibold">Total User</h3>
        </div>
        <div className="p-4 text-center border rounded-lg space-y-4">
          <div className="flex justify-center">
            <TbVocabulary size={48} color="cyan"></TbVocabulary>
          </div>
          <div>
            <p className="text-2xl font-bold">5000+</p>
          </div>
          <h3 className="text-xl font-semibold">Vocabulary</h3>
        </div>
        <div className="p-4 text-center border rounded-lg space-y-4">
          <div className="flex justify-center">
            <MdOutlinePersonalVideo
              size={48}
              color="cyan"
            ></MdOutlinePersonalVideo>
          </div>
          <div>
            <p className="text-2xl font-bold">15+</p>
          </div>
          <h3 className="text-xl font-semibold">Tutorials</h3>
        </div>
        <div className="p-4 text-center border rounded-lg space-y-4">
          <div className="flex justify-center">
            <MdOutlinePlayLesson size={48} color="cyan"></MdOutlinePlayLesson>
          </div>
          <div>
            <p className="text-2xl font-bold">25+</p>
          </div>
          <h3 className="text-xl font-semibold">Lessons</h3>
        </div>
      </div>
    </div>
  );
};

export default Success;
