"use client";

import { HeaderList } from "@/lib/Headerlist";
import Link from "next/link";
import { DarkTogle } from "../DarkTogle/darktoggle";

export const Header = () => {
  const headerList = HeaderList();

  return (
    <>
      <div className=" border border-secondary rounded-full text-sm fixed left-1/2 transform -translate-x-1/2 z-10 mt-0 md:mt-2 p-1 backdrop-blur-xl bg-background/50">
        <ul className="flex w-full justify-center items-center hover:cursor-pointer">
          {headerList.map((item) => (
            <Link key={item.name} href={item.path}>
              <li
                className={`px-2 py-1 rounded-full text-sm text-primary/70 transition-colors duration-1000`}
              >
                {item.name}
              </li>
            </Link>
          ))}
          <DarkTogle />
        </ul>
      </div>
    </>
  );
};
