import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <div className="bg-slate-900 flex md:flex-row flex-col gap-2 justify-between text-white p-5">
        <Link href="/" className="font-bold text-center md:text-left text-2xl">
          ANIMELIST
        </Link>
        <input className="p-1 text-sm" placeholder="mamamamam" />
      </div>
    </header>
  );
};

export default Navbar;
