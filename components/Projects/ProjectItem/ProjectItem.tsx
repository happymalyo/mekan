import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const ProjectItem = () => {
  return (
    <div className="flex flex-wrap mt-12 lg:px-10">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
        <div className="flex flex-col items-center md:items-start  md:items-start h-full">
          <div className="mb-4">
            <Image
              src={"/services/img-1.svg"}
              width={80}
              height={80}
              alt="generative IA SP"
            />
          </div>
          <div className="flex flex-col flex-grow px-0 space-y-5">
            <h5 className="font-bold text-balance text-center md:text-left pt-10">
              Business integration of LLMs, LMMs and Generative AI
            </h5>
            <p className="text-center md:text-left text-balance text-muted-foreground h-full">
              Development of services in generative AI.
            </p>
            <Button className="md:px-16 mt-auto mx-auto md:mx-0 w-1/2 dark:bg-secondary/20 text-secondary-foreground">
              Learn more
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
        <div className="flex flex-col items-center md:items-start  h-full">
          <div className="mb-4">
            <Image
              src={"/services/img-2.svg"}
              width={80}
              height={80}
              alt="Data science"
            />
          </div>
          <div className="flex flex-col flex-grow px-0 space-y-5">
            <h5 className="font-bold text-balance text-center md:text-left pt-10">
              Data Science and AI Engineering
            </h5>
            <p className="text-center md:text-left text-balance text-muted-foreground h-full">
              Team of AI Experts at your disposal.
            </p>
            <Button className="md:px-16 mt-auto mx-auto md:mx-0 w-1/2 dark:bg-secondary/20 text-secondary-foreground">
              Learn more
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
        <div className="flex flex-col items-center md:items-start  h-full">
          <div className="mb-4">
            <Image
              src={"/services/img-3.svg"}
              width={80}
              height={80}
              alt="generative IA SP"
            />
          </div>
          <div className="flex flex-col flex-grow px-0 space-y-5">
            <h5 className="font-bold text-balance text-center md:text-left pt-10">
              Team of AI Experts at your disposal.
            </h5>
            <p className="text-center md:text-left text-balance text-muted-foreground h-full">
              Top-level, tailor-made Web development.
            </p>
            <Button className="md:px-16 mt-auto mx-auto md:mx-0 w-1/2 dark:bg-secondary/20 text-secondary-foreground">
              Learn more
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
        <div className="flex flex-col items-center md:items-start  h-full">
          <div className="mb-4">
            <Image
              src={"/services/img-4.svg"}
              width={80}
              height={80}
              alt="generative IA SP"
            />
          </div>
          <div className="flex flex-col flex-grow px-0 space-y-5">
            <h5 className="font-bold text-balance text-center md:text-left pt-10">
              Mobile projects
            </h5>
            <p className="text-center md:text-left text-balance text-muted-foreground h-full">
              Cross-platform mobile application development.
            </p>
            <Button className="md:px-16 mt-auto mx-auto md:mx-0 w-1/2 dark:bg-secondary/20 text-secondary-foreground">
              Learn more
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
        <div className="flex flex-col items-center md:items-start  h-full">
          <div className="mb-4">
            <Image
              src={"/services/img-5.svg"}
              width={80}
              height={80}
              alt="Backend api"
            />
          </div>
          <div className="flex flex-col flex-grow px-0 space-y-5">
            <h5 className="font-bold text-balance text-center md:text-left pt-10">
              Back-end & API
            </h5>
            <p className="text-center md:text-left text-balance text-muted-foreground h-full">
              Reliable management, thanks to proven technologies.
            </p>
            <Button className="md:px-16 mt-auto mx-auto md:mx-0 w-1/2 dark:bg-secondary/20 text-secondary-foreground">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
