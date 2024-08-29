import React from "react";
// import UrlShortening from "../../assets/UrlShorteningApp.jpg";
// import GitRepoVue from "../../assets/GitRepoVue.jpg";
// import GitRepoReact from "../../assets/GitRepoReact.jpg";
// import TimeZone from "../../assets/TimeZoneConverter.jpg";
// import Crowdfunding from "../../assets/crowdfund.jpg";

const projects = [
  {
    id: 1,
    name: "Dare projects",
    description: "Welcome to my projects section",
    technologies: "NextJs with typescrit and tailwindcss",
    // image: UrlShortening,
    github: "https://github",
    demo: "https://",
  },
  {
    id: 2,
    name: "Dare projects",
    description: "Welcome to my projects section",
    technologies: "Vue Js and Javascript",
    // image: GitRepoVue,
    github: "https://github",
    demo: "https://",
  },
  {
    id: 3,
    name: "Dare projects",
    description: "Welcome to my projects section",
    technologies: "React Js and Tailwindcss",
    // image: Crowdfunding,
    github: "https://github//",
    demo: "https://",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h1 className="text-[50px] font-bold mb-8 leading-normal text-center">
          <span className="text-transparent bg-clip-text font-bold bg-gradient-to-r from-blue-400 to-purple-500from-green-500 to-pink-400">
            My Projects
          </span>
        </h1>
        <div className="slider container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105 b-glow"
            
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 
              w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-2">{project.description}</p>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <div className="flex justify-center space-x-24">
                <a
                  href={project.github}
                  className="inline-block bg-gradient-to-r 
              from-blue-400 to-fuchsia-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className="inline-block bg-gradient-to-r 
                  from-blue-400 to-fuchsia-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
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
