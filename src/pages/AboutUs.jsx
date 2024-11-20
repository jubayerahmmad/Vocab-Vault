import { Helmet } from "react-helmet-async";
import CommonBanner from "../components/CommonBanner";

import gadgets from "../assets/gadget-heaven.png";
import vocab from "../assets/vocab-vault.png";
import dreamxi from "../assets/dream-xi.png";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>About | Vocab Vault</title>
      </Helmet>
      <CommonBanner></CommonBanner>

      <section class=" my-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Skills</h2>
        <div className="max-w-6xl mx-auto px-6 lg:px-8  my-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5 animate__animated animate__fadeInLeft">
            {/* Skill Card 1*/}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Front-End Development
              </h3>
              <p className="text-gray-600">
                HTML5 ,CSS3 ,React.js, Tailwind CSS, JavaScript
              </p>
            </div>
            {/* Skill Card 2*/}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Version Control
              </h3>
              <p className="text-gray-600">Git, GitHub</p>
            </div>
            {/* Skill Card 3*/}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Back-End Tools
              </h3>
              <p className="text-gray-600">Firebase Authentication</p>
            </div>
            {/* Skill Card 4 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Routing
              </h3>
              <p className="text-gray-600">React Router</p>
            </div>
            {/* Skill Card 5 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                In Progress
              </h3>
              <p className="text-gray-600">
                Back-end Technologies, Advanced Front-end Technologies
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Projects */}
      <section className="mb-6 py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <img src={gadgets} alt="" className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    Gadget Heaven
                  </h3>
                  <p className="text-gray-600 mb-4">
                    An e-commerce dashboard project with cart and wishlist
                    features, built using React and dynamic routing.
                  </p>
                </div>
                <a
                  href="https://gadgetsss.netlify.app/"
                  className="text-cyan-600"
                >
                  View Project
                </a>
              </div>
            </div>
            {/* card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden ">
              <img src={vocab} alt="" className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    Vocab Vault
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A Spanish vocabulary learning app with cart built using
                    React and dynamic routing, also integrated Authentication
                    using Firebase Authentication
                  </p>
                </div>
                <a
                  href="https://vocab-vault-spanish-learning.netlify.app/"
                  className="text-cyan-600"
                >
                  View Project
                </a>
              </div>
            </div>
            {/* card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={dreamxi} alt="" className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    Dream XI Builder
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A single-page app where users can build their dream sports
                    team with real-time data rendering.
                  </p>
                </div>
                <a
                  href="https://dream-xi-builder.netlify.app/"
                  className="text-cyan-600"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
