import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {

  return (
    <div id='projects' className="relative z-50 my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-blue-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-20"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-slate-800 border border-slate-600 absolute left-0 w-fit text-blue-400 px-6 py-4 text-xl font-bold rounded-lg shadow-lg">
            <svg className="w-6 h-6 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12l4-4m-4 4l4 4" />
            </svg>
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-gradient-to-r from-slate-600 to-transparent ml-4"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="grid gap-8 lg:gap-10">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-5xl sticky transform transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="box-border flex items-center justify-center rounded-lg shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;