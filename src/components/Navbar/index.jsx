"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useRef } from "react";

const Navbar = () => {
  const searchRef = useRef();
  const pathName = usePathname();

  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    router.push(`/search/${searchRef.current.value}`);
  };
  return (
    <header>
      <div className="bg-[#08071F] flex md:flex-row flex-col gap-2 justify-between text-white py-5 px-20">
        <Link href="/" className="font-bold text-center md:text-left text-2xl">
          ANIMELIST
        </Link>
        <div className="">
          <ul className="flex justify-center cursor-pointer items-center md:gap-5 gap-1 md:flex-row flex-wrap md:text-sm text-xs">
            <Link
              href="/"
              className={
                pathName == "/" ? "bg-orange-600 p-2 transition-all" : "p-2"
              }
            >
              Homepage
            </Link>
            <Link
              href="/mangas"
              className={
                pathName == "/mangas"
                  ? "bg-orange-600 p-2 transition-all"
                  : "p-2"
              }
            >
              Top Manga
            </Link>
            <Link
              href="/animes"
              className={
                pathName == "/animes"
                  ? "bg-orange-600 p-2 transition-all"
                  : "p-2"
              }
            >
              Top Anime
            </Link>
            <Link href="/" className="p-2">
              Contact
            </Link>
          </ul>
        </div>
        <form onSubmit={handleSearch}>
          <input
            ref={searchRef}
            className="p-1 text-sm rounded text-black"
            placeholder="Search Anime"
          />
        </form>
      </div>
    </header>
  );
};

export default Navbar;
