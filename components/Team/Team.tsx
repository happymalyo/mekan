import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <div className="container">
      <div className="text-center mb-6">
        <h2 className="text-3xl mb-4 text-balance">
          Happy to take charge of your projects
        </h2>
        <p className="text-sm text-center mx-auto w-1/2 text-pretty text-muted-foreground">
          Collaborate with our highly qualified developers and data scientists.
        </p>
      </div>
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center gap-10 items-center">
          <div className="flex flex-col items-center space-y-2">
            <Image
              src="/teams/mario.jpeg"
              width={100}
              height={100}
              alt="Logo 1"
              className="object-contain rounded-full"
            />
            <p className="text-muted-foreground text-center text-nowrap">
              Mario Francisco RANDRIANANDRASANA
            </p>
            <h3 className="font-bold">CEO & Full Stack Js Developer</h3>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Image
              src="/teams/marion.jpeg"
              width={100}
              height={100}
              alt="Logo 1"
              className="object-contain rounded-full"
            />
            <p className="text-muted-foreground text-center text-nowrap">
              Rakotomandimby marion menye
            </p>
            <h3 className="font-bold">Lead & Full Stack / Odoo Developer</h3>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Image
              src="/teams/moise.jpeg"
              width={100}
              height={100}
              alt="Logo 1"
              className="object-contain rounded-full"
            />
            <p className="text-muted-foreground text-center text-nowrap">
              Moïse Rajesearison
            </p>
            <h3 className="font-bold">CTO & Flutter Developer</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
