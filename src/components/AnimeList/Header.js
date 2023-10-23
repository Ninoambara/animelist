"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

const Header = ({ title, toLink }) => {
  return (
    <div className="flex justify-between md:px-24 md:pt-10 p-3">
      <h1 className="text-white font-bold text-3xl flex justify-row">
        <p className="me-2 text-orange-400">
          <strong>|</strong>
        </p>
        {title}
      </h1>
      {toLink ? (
        <div className="flex flex-row items-center">
          <Link
            className="text-white  font-thin text-1xl  p-2"
            href={`/${toLink}`}
          >
            View All
          </Link>
          <ArrowRight className="text-white" size={24} />
        </div>
      ) : null}
    </div>
  );
};

export default Header;
