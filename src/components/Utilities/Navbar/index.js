import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <div className="bg-[#08071F] flex md:flex-row flex-col gap-2 justify-between text-white py-5 px-20">
        <Link href="/" className="font-bold text-center md:text-left text-2xl">
          ANIMELIST
        </Link>
        <div className="">
          <ul className="flex justify-center cursor-pointer items-center md:gap-5 gap-1 md:flex-row flex-wrap md:text-sm text-xs">
            <li className="p-2 bg-orange-600 ">Homepage</li>
            <li className="p-2">Categories</li>
            <li className="p-2">Top Anime</li>
            <li className="p-2">Contact</li>
          </ul>
        </div>
        <input className="p-1 text-sm rounded" placeholder="Search Anime" />
      </div>
    </header>
  );
};

export default Navbar;
