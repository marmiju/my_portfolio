"use client";
import React, { useEffect, useState } from "react";

export const DesignationLoop = ({ data }: { data: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearTimeout(timeout);
  }, [index, data.length]);

  const nextIndex = (index + 1) % data.length;
  const nextNextIndex = (index + 2) % data.length;

  return (
    <div className="relative  overflow-hidden">
      <div className="flex flex-col text-center md:text-start lg:text-right">
        <h1 className="text-2xl text-primary/90 transition-all font-bold duration-500 ease-in-out">
          {data[nextIndex]}
        </h1>
        <h1 className="text-xl text-text/60 transition-all duration-500 ease-in-out">
          {data[index]}
        </h1>
        <h1 className="text-lg text-secondary transition-all duration-500 ease-in-out">
          {data[nextNextIndex]}
        </h1>
      </div>
    </div>
  );
};
