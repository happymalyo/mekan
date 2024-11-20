import React from "react";
import Image from "next/image";
import TheyTrustUsItem from "./TheyTrustUsItem/TheyTrustUsItem";

const TheyTrusUs = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-4">They Trust Us</h2>
          <p className="text-sm mx-auto w-1/2 text-pretty text-muted-foreground">
            Mëkan Services has already proved its worth to customers in a
            wide variety of sectors, including retail, IT, banking,
            manufacturing and many others
          </p>
        </div>
        <TheyTrustUsItem />
      </div>
    </div>
  );
};

export default TheyTrusUs;
