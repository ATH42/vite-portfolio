const Work = () => {
  return (
    <section className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project cards will go here */}
          {[1, 2, 3].map((project) => (
            <div
              key={project}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-4">Project {project}</h3>
              <p className="text-gray-300">
                Project description goes here. Click to learn more about this
                project.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
