import React from "react";
import { Avater } from "./avater/Avater";
import { FetchLeetCode } from "@/lib/CP/LeetCode";
import { pixelfy } from "@/lib/fonts/monsera";
import { SiLeetcode } from "react-icons/si";

const Leetcode = async () => {
  const profile = await FetchLeetCode();
  return (
    <>
      <h1
        className={`${pixelfy.className} text-center text-3xl text-text my-4`}
      >
        Competitive Programming
      </h1>
      <div className="flex flex-wrap bg-secondary/10 backdrop-blur-2xl justify-center gap-2 max-w-[1200px] mx-auto border rounded-2xl border-text/20 p-2  min-h-96">
        <p
          className={`w-full text-text font-semibold flex items-center gap-2 text-3xl ${pixelfy.className}
        `}
        >
          <SiLeetcode />
          {" LeetCode "}
        </p>
        {profile && (
          <div className="max-w-full lg:max-w-[400px] ">
            <Avater />
          </div>
        )}
        <div className="max-w-full lg:max-w-[450px] rounded-2xl overflow-hidden ">
          <a
            className=""
            href="https://leetcode.com/devmar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://leetcard.jacoblin.cool/devmar?theme=light&font=baloo&ext=contest"
              alt="LeetCode Stats"
            />
          </a>
        </div>
        <div>
          <img
            className="col-span-4"
            src="https://leetcode-badge-showcase.vercel.app/api?username=devmar"
            alt="LeetCode Badge"
          />
        </div>
      </div>
    </>
  );
};

export default Leetcode;
