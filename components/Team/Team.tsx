import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <div className="py-16 mt-3 px-4">
      <div className="text-center mb-6">
        <h2 className="text-3xl mb-4 text-balance">
          Happy to take charge of your projects
        </h2>
        <p className="text-sm mx-auto w-1/2 text-pretty text-muted-foreground">
          Collaborate with our highly qualified developers and data scientists.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 items-center">
          <div className="flex flex-col items-center space-y-2">
            <Image
              src="/teams/ranto.png"
              width={100}
              height={100}
              alt="Logo 1"
              className="object-contain"
            />
            <p className="text-muted-foreground text-center text-nowrap">
              Ranto ANDRIAMBOLOLONA
            </p>
            <h3 className="font-bold">CEO</h3>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <Image
              src="/teams/nina.png"
              width={100}
              height={100}
              alt="Logo 4"
              className="object-contain"
            />
            <p className="text-muted-foreground text-center text-nowrap">
              Ninà RANAIVOARISOA
            </p>
            <h3 className="font-bold">General Manager</h3>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <Image
              src="/teams/lorenzo.png"
              width={100}
              height={100}
              alt="Logo 4"
              className="object-contain"
            />
            <p className="text-muted-foreground text-center text-nowrap">
              Lorenzo RAMAROMANANA
            </p>
            <h3 className="font-bold">Projects & Product Director</h3>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <Image
              src="/teams/tiaray.png"
              width={100}
              height={100}
              alt="Logo 1"
              className="object-contain"
            />
            <p className="text-muted-foreground text-center text-nowrap">
              Ranto Tiaray ANDRIANAVONISON
            </p>
            <h3 className="font-bold">Technical & Data Director</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
