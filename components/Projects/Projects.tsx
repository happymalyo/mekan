import React from "react";
import { ProjectItem } from "./ProjectItem/ProjectItem";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center mt-40 gap-5">
      <h2 className="text-center text-xl text-balance mx-auto font-bold">
        Outsource your IT projects for success !
      </h2>
      <p className="text-center text-sm text-balance mx-auto">
        We can take full charge of your IT projects, depending on the range of
        services we offer.
      </p>
      <ProjectItem />
    </div>
  );
};

export default Projects;
