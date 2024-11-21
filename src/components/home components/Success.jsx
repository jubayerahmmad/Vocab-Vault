import { FaUser } from "react-icons/fa6";
import { MdOutlinePersonalVideo, MdOutlinePlayLesson } from "react-icons/md";
import { TbVocabulary } from "react-icons/tb";
import { useSpring, animated } from "react-spring";

const Success = () => {
  const user = useSpring({
    from: { number: 0 },
    to: { number: 1500 },
    config: { duration: 4000 },
  });
  const vocabulary = useSpring({
    from: { number: 1500 },
    to: { number: 4000 },
    config: { duration: 4000 },
  });
  const tutorials = useSpring({
    from: { number: 0 },
    to: { number: 25 },
    config: { duration: 2500 },
  });
  const lessons = useSpring({
    from: { number: 0 },
    to: { number: 30 },
    config: { duration: 3000 },
  });
  return (
    <div className="animate__animated animate__fadeInLeft">
      <h1 className="text-3xl font-bold text-center mb-6">Success</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6 rounded-lg">
        <div className="p-4 text-center border rounded-lg space-y-4">
          <div className="flex justify-center">
            <FaUser size={48} color="cyan"></FaUser>
          </div>
          <div>
            <animated.div className="text-2xl font-bold">
              {user.number.to((n) => `${n.toFixed(0)} +`)}
            </animated.div>
          </div>
          <h3 className="text-xl font-semibold">Total User</h3>
        </div>
        <div className="p-4 text-center border rounded-lg space-y-4">
          <div className="flex justify-center">
            <TbVocabulary size={48} color="cyan"></TbVocabulary>
          </div>
          <div>
            <animated.div className="text-2xl font-bold">
              {vocabulary.number.to((n) => `${n.toFixed(0)} +`)}
            </animated.div>
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
            <animated.div className="text-2xl font-bold">
              {tutorials.number.to((n) => `${n.toFixed(0)} +`)}
            </animated.div>
          </div>
          <h3 className="text-xl font-semibold">Tutorials</h3>
        </div>
        <div className="p-4 text-center border rounded-lg space-y-4">
          <div className="flex justify-center">
            <MdOutlinePlayLesson size={48} color="cyan"></MdOutlinePlayLesson>
          </div>
          <div>
            <animated.div className="text-2xl font-bold">
              {lessons.number.to((n) => `${n.toFixed(0)} +`)}
            </animated.div>
          </div>
          <h3 className="text-xl font-semibold">Lessons</h3>
        </div>
      </div>
    </div>
  );
};

export default Success;
