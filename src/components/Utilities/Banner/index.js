import Image from "next/image";

const Banner = () => {
  return (
    <div className="px-24 py-10 rounded-lg overflow-hidden">
      <Image
        className="object-cover banner"
        src={"https://wallpaperaccess.com/full/39043.jpg"}
        width={1000}
        height={1000}
        alt="Pic"
      />
    </div>
  );
};

export default Banner;
