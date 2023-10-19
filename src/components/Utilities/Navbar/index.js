import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <div className="bg-[#08071F] flex md:flex-row flex-col gap-2 justify-between text-white py-5 px-20">
        <Link href="/" className="font-bold text-center md:text-left text-2xl">
          ANIMELIST
        </Link>
        <div className="">
          <ul className="flex gap-5 flex-row">
            <li className="bg-orange">Homepage</li>
            <li>Categories</li>
            <li>Top Anime</li>
            <li>Contact</li>
          </ul>
        </div>
        <input className="p-1 text-sm" placeholder="mamamamam" />
      </div>
    </header>
  );
};

export default Navbar;
