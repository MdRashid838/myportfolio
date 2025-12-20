import React from "react";

const projects = [
  {
    id: 1,
    title: "Project One",
    image: "https://placehold.co/600x400",
    link: "https://www.google.com",
  },
  {
    id: 2,
    title: "Project Two",
    image: "https://placehold.co/600x400",
    link: "https://www.google.com",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="md:max-w-[80%] w-full md:p-0 p-6 m-auto min-h-screen">
      <div className="flex flex-col justify-center items-center py-8 gap-1">
        <h1 className="text-3xl font-semibold text-[#313131]">Projects</h1>
        <p className="text-sm font-medium text-gray-700">Most Recent Work</p>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-center gap-6 max-w-sm w-full bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow p-5"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg border border-gray-200"
              />

              <div className="flex flex-col gap-3">
                <h2 className="text-lg font-semibold">{project.title}</h2>

                <a
                  href={project.link}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Explore
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
