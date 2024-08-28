import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Advantages = () => {
  return (
    <div className="advantages flex flex-col items-center md:items-end  w-full relative mt-20 lg:mt-[200px] space-y-10 z-20 px-32">
      <div className="space-y-10">
        <div className="flex flex-row py-0 md:gap-5 gap-2">
          <div className="bg-secondary/20 rounded-sm p-1 sm:w-9 w-[80px] h-9 md:w-12 md:h-12  mt-1">
            <Image
              src={"/home/advantage_1.svg"}
              alt="Advantage 1"
              width={64}
              height={64}
              className="object-contain h-full w-full"
            />
          </div>
          <div className="flex flex-col items-start justify-center sm:w-96">
            <h3 className="flex text-left text-xl md:text-2xl mb-2">
              Cost Savings
            </h3>
            <p className="flex text-left text-sm sm:text-base text-balance">
              SmartPredict Services takes charge of your IT projects, reducing
              your costs while guaranteeing a better ROI.
            </p>
          </div>
        </div>

        <div className="flex flex-row py-0 md:gap-5 gap-2">
          <div className="bg-secondary/20 rounded-sm p-1 sm:w-9 w-[80px] h-9 md:w-12 md:h-12  mt-1">
            <Image
              src={"/home/advantage_2.svg"}
              alt="Advantage 1"
              width={64}
              height={64}
              className="object-contain h-full w-full"
            />
          </div>
          <div className="flex flex-col items-start justify-center sm:w-96">
            <h3 className="flex text-left text-xl md:text-2xl mb-2">
              State-of-the-art expertise
            </h3>
            <p className="flex text-left text-sm sm:text-base  text-balance">
              Experienced software engineers and data scientists dedicated to
              providing you with technological solutions to your challenges.
            </p>
          </div>
        </div>

        <div className="flex flex-row py-0 md:gap-5 gap-2">
          <div className="bg-secondary/20 rounded-sm p-1 sm:w-9 w-[80px] h-9 md:w-12 md:h-12  mt-1">
            <Image
              src={"/home/advantage_3.svg"}
              alt="Advantage 1"
              width={64}
              height={64}
              className="object-contain h-full w-full"
            />
          </div>
          <div className="flex flex-col items-start justify-center sm:w-96">
            <h3 className="flex text-left text-xl md:text-2xl mb-2">
              Fully available
            </h3>
            <p className="flex text-left text-sm sm:text-base  text-balance text-sm sm:text-base">
              Resources at your disposal ASAP for better performance and on-time
              delivery, in line with your specifications.
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-center md:justify-start">
          <Button
            asChild
            size={"lg"}
            variant={"outline"}
            className="text-secondary-foreground border-secondary p-6"
          >
            <Link href={"/"}>Make an appointment !</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
