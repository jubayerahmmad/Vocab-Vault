const About = () => {
  return (
    <div className="my-6">
      <h1 className="text-3xl font-bold text-center ">About Us</h1>

      <div className="p-6 rounded-lg my-8 border space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Our Mission</h3>
          <p>
            At <strong>Vocab Vault</strong>, our mission is to make language
            learning engaging, accessible, and effective. We believe that
            vocabulary is the cornerstone of mastering any language, and we are
            dedicated to helping learners expand their word bank in Spanish
            while keeping the process fun and interactive.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">How It Works</h3>
          <div>
            <ul className="list-disc mx-4">
              <li>
                <span className="font-medium text-md">
                  Gradual Progression:
                </span>{" "}
                Our lessons are carefully arranged by difficulty—starting with
                easy words, progressing to medium, and then tackling more
                advanced terms.
              </li>
              <li>
                <span className="font-medium text-md">
                  Interactive Learning:
                </span>{" "}
                Engage with interactive quizzes, exercises, and activities that
                help reinforce your knowledge and ensure long-term retention.
              </li>
              <li>
                <span className="font-medium text-md">
                  Dual-Language Support:
                </span>{" "}
                Every Spanish word is paired with its meaning in English to make
                learning easier and more intuitive.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
