import Link from "next/link";

const Header = ({ title, toLink }) => {
  return (
    <div className="flex justify-between md:px-24 md:py-5 p-3">
      <h1 className="text-white font-bold text-3xl flex justify-row">
        <p className="me-2 text-orange-400">
          <strong>|</strong>
        </p>
        {title}
      </h1>
      <Link
        className="text-white font-thin text-1xl items-center p-2"
        href={`/${toLink}`}
      >
        View All
      </Link>
    </div>
  );
};

export default Header;
