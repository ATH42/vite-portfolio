const About = () => {
  return (
    <section className="min-h-screen pt-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">About Me</h2>
        <div className="space-y-6 text-gray-300">
          <p>
            Hi there! I'm a frontend developer passionate about creating
            beautiful, interactive web experiences.
          </p>
          <p>
            I specialize in modern web technologies including React, Three.js,
            and TypeScript, always striving to push the boundaries of what's
            possible on the web.
          </p>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                "Three.js",
                "Node.js",
                "TailwindCSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
